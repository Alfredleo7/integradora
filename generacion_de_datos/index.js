const db = require('./database_pg');
const rm = require('./resultados_metricas');
const ff = require('./fuzzy_functions');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

async function main() {
    //Se obtiene todos los rooms
    let escenarios = await db.getEscenarios();
    let metricas = await db.getMetrics();
    // let jugadores = await db.getJugadores();
    let level_users = await db.getLevelUser();
    let niveles = [];

    await asyncForEach(
        escenarios,
        async escenario => {
            let escenarioId = escenario.id;
            let games = await db.getJuegosByEscenario(escenario.id);
            let escenario_actual = escenario;
            await asyncForEach(
                games,
                async game => {
                    let gameId = game.id;
                    let levels_game = await db.getLevelsByGame(game.id);
                    await asyncForEach(
                        levels_game,
                        async _level => {
                            let levelId = _level.id;
                            let learning = await db.getLearnUserByLevel(levelId);
                            let nivel_actual = await db.getNivelById(levelId);
                            let escenario_default = [];
                            let escenario_rest = [];
                            escenarios.forEach(
                                _escenario => {
                                    if (_escenario.id == escenario.id)
                                        escenario_default.push(_escenario);
                                    else
                                        escenario_rest.push(_escenario);
                                }
                            )
                            let jugadores_room_default = await db.getJugadoresByEscenario(escenario.id);
                            let jugadores_room_rest = await db.getJugadoresExceptAnEscenario(escenario.id);
                            let _levels = await db.getLevelUserByEscenario(escenario.id);
                            let resultados = [];
                            let levels = [];

                            // aqui se filta al nivel seleccionado
                            _levels.forEach(
                                _level => {
                                    if(_level.id_nivel == levelId)
                                        levels.push(_level);
                                }
                            )

                            let tiempo_juego = 0;
                            let num_try_prom = 0;
                            let n_wrong_prom = 0;
                            let n_right_prom = 0;
                            
                            let t_play = [];
                            let num_try = [];
                            let n_wrong = [];
                            let n_right = [];

                            let intentos_ok = 0;
                            let correctas_ok = 0;

                            let respuestas_ok = [];
                            let incorrectas_ok = 0;

                            let corrida_incorrectas_por_minutos = [];

                            let r_incorrectas_ok = [];
                            let corridas_por_minutos = [];

                            let tiempo_juego_ok = 0;

                            let tiempo_juego_ok_list = [];
                            let n_user_complete = 0;

                            let tiempo_meta_ok = [];

                            let intentos_efectividad = [];

                            levels.forEach(
                                level => {
                                    tiempo_juego += level.tiempo_juego;
                                    num_try_prom += level.intentos;
                                    n_wrong_prom += level.incorrectas;
                                    n_right_prom += level.correctas;
                                    t_play.push(level.tiempo_juego);
                                    num_try.push(level.intentos);
                                    n_wrong.push(level.incorrectas);
                                    n_right.push(level.correctas);

                                    //Solo se toma en cuenta los usuarios que competaron el nivel
                                    if(level.estado == "completado") {
                                        intentos_ok += level.intentos;
                                        correctas_ok += level.correctas;
                                        respuestas_ok.push(level.correctas);
                                        incorrectas_ok += level.incorrectas;
                                        corrida_incorrectas_por_minutos.push( level.incorrectas / ( level.tiempo_juego / 60 ) );
                                        r_incorrectas_ok.push(level.incorrectas);
                                        corridas_por_minutos.push(level.correctas / ( level.tiempo_juego / 60 ) )
                                        tiempo_juego_ok += level.tiempo_juego;
                                        tiempo_juego_ok_list.push(level.tiempo_juego);
                                        n_user_complete++;
                                        tiempo_meta_ok.push(level.tiempo_juego);
                                        intentos_efectividad.push(level.intentos);
                                    }

                                }
                            );
                            tiempo_juego = tiempo_juego / levels.length;
                            n_wrong_prom = n_wrong_prom / levels.length;
                            n_right_prom = n_right_prom / levels.length;
                            num_try_prom = num_try_prom / levels.length;

                            intentos_ok = intentos_ok / n_user_complete;
                            correctas_ok = correctas_ok  / n_user_complete;
                            incorrectas_ok = incorrectas_ok  / n_user_complete;
                            tiempo_juego_ok = tiempo_juego_ok  / n_user_complete;

                            //quartiles para el tiempo de usuarios que terminaron en nivel
                            let q_lower_time_ok = rm.quartile(tiempo_meta_ok, 1, 4);
                            let q_upper_time_ok = rm.quartile(tiempo_meta_ok, 3, 4);
                            let media = rm.quartile(tiempo_meta_ok,2,4);
                            let rango_interquartil = q_upper_time_ok - q_lower_time_ok;
                            let l_externo_inf = q_lower_time_ok - ( rango_interquartil * 3);
                            let l_externo_sup = q_upper_time_ok + ( rango_interquartil * 3);

                            let caracteristicas = {
                                eficiencia: {
                                    fuzzy: 0,
                                    descripcion: '',
                                    sets: []
                                },
                                efectividad: {
                                    fuzzy: 0,
                                    descripcion: '',
                                    sets: []
                                },
                                flexibilidad: {
                                    fuzzy: 0,
                                    descripcion: '',
                                    sets: []
                                },
                                satisfaccion: {
                                    fuzzy: 0,
                                    descripcion: '',
                                    sets: []
                                },
                                jugabilidad: {
                                    fuzzy: 0,
                                    descripcion: '',
                                    sets: []
                                }
                            }

                            let _metricas = metricas;
                            _metricas.forEach(
                                metrica => {
                                    switch(metrica.id) {
                                        //Eficiencia
                                        case 1:
                                            resultado = rm.TiempoMeta(tiempo_juego_ok).toFixed(2);
                                            metrica.resultado = resultado + " seg";
                                            metrica.resultado_valor = resultado;
                                            metrica.valoracion = ff.fuzzification_variable(
                                                resultado,
                                                ff.sets_eficiencia.tiempo_meta(
                                                    Math.min(...tiempo_meta_ok),
                                                    Math.max(...tiempo_meta_ok)
                                                )
                                            )
                                            break;
                                        case 2:
                                            resultado = rm.EficienciaMeta(correctas_ok, (tiempo_juego/60)).toFixed(2);
                                            metrica.resultado = resultado + " corr/min";
                                            metrica.resultado_valor = resultado;
                                            metrica.valoracion = ff.fuzzification_variable(
                                                resultado,
                                                ff.sets_eficiencia.eficiencia_respuestas_correctas(
                                                    Math.min(...corridas_por_minutos),Math.max(...corridas_por_minutos)
                                                )
                                            )
                                            break;
                                        case 3:
                                            resultado = rm.EficienciaMetaPorIncorrectas(incorrectas_ok, (tiempo_juego/60)).toFixed(2);
                                            metrica.resultado = resultado + " incorr/min";
                                            metrica.resultado_valor = resultado;
                                            metrica.valoracion = ff.fuzzification_variable(
                                                resultado,
                                                ff.sets_eficiencia.eficiencia_respuestas_incorrectas(
                                                    Math.min(...corrida_incorrectas_por_minutos),Math.max(...corrida_incorrectas_por_minutos)
                                                )
                                            )
                                            // console.log('Eficiencia de respuestas incorrectas\n\tMínimo:',Math.min(...corrida_incorrectas_por_minutos),"incorrectas por minutos\n\tMáximo: ",
                                                        // Math.max(...corrida_incorrectas_por_minutos)," incorrectas por minutos")
                                            break;
                                        case 4:
                                            var best_time = 0, cont_best_time = 0;
                                            for(var j=0; j < tiempo_juego_ok_list.length; j++){
                                                if (tiempo_juego_ok_list[j] > media) {
                                                    best_time = best_time + tiempo_juego_ok_list[j];
                                                    cont_best_time++;
                                                }
                                            }
                                            if (cont_best_time != 0)
                                                best_time = best_time / cont_best_time;
                                            else
                                                best_time = 1;
                                            resultado = rm.EficienciaRelativaUsuarioOK(cont_best_time, tiempo_meta_ok.length).toFixed(2);
                                            metrica.resultado = resultado + "%";
                                            metrica.resultado_valor = resultado;
                                            metrica.valoracion = ff.fuzzification_variable(resultado, ff.sets_eficiencia.relativa_mejores_resultados_jugadores)
                                            break;
                                        case 5:
                                            var worst_time = 0, cont_worst_time = 0;
                                            for(var j=0; j < tiempo_juego_ok_list.length; j++){
                                                if (tiempo_juego_ok_list[j] < media) {
                                                    worst_time = worst_time + tiempo_juego_ok_list[j];
                                                    cont_worst_time++;
                                                }
                                            }
                                            if (cont_best_time != 0)
                                                worst_time = worst_time / cont_worst_time;
                                            else
                                                worst_time = 1;
                                            
                                            resultado = rm.EficienciaRelativaUsuarioBAD(cont_worst_time,tiempo_meta_ok.length).toFixed(2);
                                            metrica.resultado = resultado + "%";
                                            metrica.resultado_valor = resultado;
                                            metrica.valoracion = ff.fuzzification_variable(resultado, ff.sets_eficiencia.relativa_jugadores_dificultades_en_nivel)
                                            break;
                                        //Efectividad
                                        case 6:
                                            resultado = rm.EfectividadMeta(correctas_ok, incorrectas_ok).toFixed(2);
                                            metrica.resultado = resultado + "% aciertos";
                                            metrica.resultado_valor = resultado;
                                            metrica.valoracion = ff.fuzzification_variable(resultado, ff.sets_efectividad.efectividad_meta)
                                            break;
                                        case 7:
                                            resultado = rm.CompletitudMeta(n_user_complete, levels.length).toFixed(2);
                                            metrica.resultado = resultado + "% j. completaron";
                                            metrica.resultado_valor = resultado;
                                            metrica.valoracion = ff.fuzzification_variable(resultado, ff.sets_efectividad.completitud_meta)
                                            break;
                                        case 8:
                                            resultado = rm.FrecuenciaIntentosMeta(intentos_ok, correctas_ok).toFixed(2);
                                            metrica.resultado = resultado + " intentos";
                                            metrica.resultado_valor = resultado;
                                            metrica.valoracion = ff.fuzzification_variable(
                                                resultado,
                                                ff.sets_efectividad.frecuencia_intentos_meta(
                                                    Math.min(...intentos_efectividad),
                                                    Math.max(...intentos_efectividad)
                                                )
                                            )
                                            break;
                                        //Flexibilidad
                                        case 9:
                                            resultado = rm.AccesibilidadPorMetas(escenario_default, escenario_rest, levels, jugadores_room_default, jugadores_room_rest).toFixed(3);
                                            if (isNaN(resultado)){
                                                metrica.resultado = "No hay Jugadores en Escenario por Default";
                                                metrica.resultado_valor = 0;
                                                metrica.valoracion = {fuzzy: 0, description: 'No aplica'}
                                            }
                                            else{
                                                metrica.resultado = resultado;
                                                metrica.resultado_valor = resultado;
                                                metrica.valoracion = ff.fuzzification_variable(resultado, ff.sets_flexibilidad.accesibilidad_por_metas)
                                            }
                                            break;
                                        case 10:
                                            resultado = rm.AccesibilidadPorTiempo(escenario_default, escenario_rest, levels, jugadores_room_default, jugadores_room_rest).toFixed(3);
                                            if (isNaN(resultado)){
                                                metrica.resultado = "No hay Jugadores en Escenario por Default";
                                                metrica.resultado_valor = 0;
                                                metrica.valoracion = {fuzzy: 0, description: 'No aplica'}
                                            }
                                            else {
                                                metrica.resultado = resultado;
                                                metrica.resultado_valor = resultado;
                                                metrica.valoracion = ff.fuzzification_variable(resultado, ff.sets_flexibilidad.accesibilidad_por_tiempo)
                                            }
                                            break;
                                        //Satisfaccion
                                        case 11:
                                            if(niveles && niveles.length)
                                                resultado = rm.PreferenciaUso(n_user_complete, levels, niveles, level_users).toFixed(3);
                                            else
                                                resultado = 0;
                                            metrica.resultado = resultado + "%";
                                            metrica.resultado_valor = resultado;
                                            metrica.valoracion = ff.fuzzification_variable(resultado, ff.sets_satisfaccion.preferencia_uso)
                                            break;
                                        default:
                                            break;
                                    }
                                    
                                    switch(metrica.nombre_car) {
                                        case 'Eficiencia':
                                            caracteristicas.eficiencia.sets.push(metrica.valoracion);
                                            break;
                                        case 'Efectividad':
                                            caracteristicas.efectividad.sets.push(metrica.valoracion);
                                            break;
                                        case 'Flexibilidad':
                                            caracteristicas.flexibilidad.sets.push(metrica.valoracion);
                                            break;
                                        case 'Satisfacción':
                                            caracteristicas.satisfaccion.sets.push(metrica.valoracion);
                                            break;
                                        default:
                                            break;
                                    }
                                }
                            )
                            let index_eficiencia = caracteristicas.eficiencia.sets.map(fuz_var=>fuz_var.fuzzy);
                            let index_efectividad = caracteristicas.efectividad.sets.map(fuz_var=>fuz_var.fuzzy);
                            let index_flexibilidad = caracteristicas.flexibilidad.sets.map(fuz_var=>fuz_var.fuzzy);
                            let index_satisfaccion = caracteristicas.satisfaccion.sets.map(fuz_var=>fuz_var.fuzzy);

                            let regla_eficiencia = await db.getReglaLinguisticaByCaracteristicaCodigo(1, index_eficiencia.join(''));
                            caracteristicas.eficiencia.fuzzy = {
                                resultado: regla_eficiencia.valoracion,
                                conclusion: regla_eficiencia.conclusion
                            }
                            let regla_efectividad = await db.getReglaLinguisticaByCaracteristicaCodigo(2, index_efectividad.join(''));
                            caracteristicas.efectividad.fuzzy = {
                                resultado: regla_efectividad.valoracion,
                                conclusion: regla_efectividad.conclusion
                            };
                            let regla_flexibilidad = await db.getReglaLinguisticaByCaracteristicaCodigo(3, index_flexibilidad.join(''));
                            caracteristicas.flexibilidad.fuzzy = {
                                resultado: regla_flexibilidad.valoracion,
                                conclusion: regla_flexibilidad.conclusion
                            };
                            let regla_satisfaccion = await db.getReglaLinguisticaByCaracteristicaCodigo(4, index_satisfaccion.join(''));
                            caracteristicas.satisfaccion.fuzzy = {
                                resultado: regla_satisfaccion.valoracion,
                                conclusion: regla_satisfaccion.conclusion
                            };
                            let regla_valoracion = await db.getReglaLinguisticaByCaracteristicaCodigo(
                                6,
                                [
                                    caracteristicas.eficiencia.fuzzy.resultado,
                                    caracteristicas.efectividad.fuzzy.resultado,
                                    caracteristicas.flexibilidad.fuzzy.resultado,
                                    caracteristicas.satisfaccion.fuzzy.resultado
                                ].join('')
                            )
                            caracteristicas.jugabilidad.fuzzy = {
                                resultado: regla_valoracion.valoracion,
                                conclusion: regla_valoracion.conclusion
                            };
                            let new_registro = {
                                escenario: escenario.id,
                                escenario_description: escenario.descripcion,
                                juego: game.id,
                                juego_nombre: game.nombre,
                                nivel: _level.id,
                                nivel_nombre: _level.nombre,
                                tiempo_juego,
                                n_wrong_prom,
                                n_right_prom,
                                num_try_prom,
                                intentos_ok,
                                correctas_ok,
                                incorrectas_ok,
                                tiempo_juego_ok,
                                eficiencia_valoracion: caracteristicas.eficiencia.fuzzy.resultado,
                                eficiencia_conclusion: caracteristicas.eficiencia.fuzzy.conclusion,
                                efectividad_valoracion: caracteristicas.efectividad.fuzzy.resultado,
                                efectividad_conclusion: caracteristicas.efectividad.fuzzy.conclusion,
                                flexibilidad_valoracion: caracteristicas.flexibilidad.fuzzy.resultado,
                                flexibilidad_conclusion: caracteristicas.flexibilidad.fuzzy.conclusion,
                                satisfaccion_valoracion: caracteristicas.satisfaccion.fuzzy.resultado,
                                satisfaccion_conclusion: caracteristicas.satisfaccion.fuzzy.conclusion,
                                jugabilidad_valoracion: caracteristicas.jugabilidad.fuzzy.resultado,
                                jugabilidad_conclusion: caracteristicas.jugabilidad.fuzzy.conclusion

                            }
                            db.save_registro(new_registro);
                        }
                    )
                }
            )
        }
    )
    console.log("FIN DEL PROGRAMA")
}

main();
