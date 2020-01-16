const {
    TiempoMeta,
    EficienciaMeta,
    EficienciaMetaPorIncorrectas,
    quartile,
    EficienciaRelativaUsuarioOK,
    EficienciaRelativaUsuarioBAD,
    EfectividadMeta,
    CompletitudMeta,
    FrecuenciaIntentosMeta,
    AccesibilidadPorMetas
} = require('./resultados_metricas');
const {
    fuzzification_variable,
    sets_eficiencia,
    sets_efectividad
} = require('./fuzzy_functions');

const con = require('./database_pg');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

async function main() {
    try {

        let metricas_tmp = (
            await con.query(
                `SELECT * FROM metrica`
            )
        ).rows;

        let metricas = []

        await asyncForEach(
            metricas_tmp,
            async metrica_tmp => {
                let caracteristicas = (
                    await con.query(
                        `SELECT * FROM caracteristica WHERE id=${metrica_tmp.id_caracteristica}`
                    )
                ).rows;
                if(caracteristicas && caracteristicas.length) {
                    metricas.push({
                        id: metrica_tmp.id,
                        nombre: metrica_tmp.nombre,
                        proposito: metrica_tmp.proposito,
                        formula: metrica_tmp.formula,
                        interpretacion: metrica_tmp.interpretacion,
                        nombre_car: caracteristicas[0].nombre,
                        descripcion_car: caracteristicas[0].descripcion
                    })
                }
                        
            }
        )


        let niveles = (
            await con.query(
                `SELECT * FROM nivel`
            )
        ).rows;
        await asyncForEach(
            niveles,
            async (nivel) => {
                let niveles_usuario = (
                    await con.query(
                        `
                            SELECT * FROM nivel_usuario WHERE id_nivel = ${nivel.id}
                        `
                    )
                ).rows;
                if(niveles_usuario && niveles_usuario.length) {

                    let tiempo_juego = 0;
                    let num_try_prom = 0;
                    let n_wrong_prom = 0;
                    let n_right_prom = 0;
                    let intentos_ok = 0;
                    let correctas_ok = 0;
                    let incorrectas_ok = 0;
                    let tiempo_juego_ok = 0;

                    let n_user_complete = 0;

                    let tiempo_meta_ok = [];
                    let corridas_por_minutos = [];
                    let corrida_incorrectas_por_minutos = [];
                    let tiempo_juego_ok_list = [];

                    let intentos_efectividad = [];

                    niveles_usuario.forEach(
                        nivel_usuario => {

                            tiempo_juego += nivel_usuario.tiempo_juego;
                            num_try_prom += nivel_usuario.intentos;
                            n_wrong_prom += nivel_usuario.incorrectas;
                            n_right_prom += nivel_usuario.correctas;

                            if(nivel_usuario.estado == 'completado') {

                                intentos_ok += nivel_usuario.intentos;
                                correctas_ok += nivel_usuario.correctas;
                                incorrectas_ok += nivel_usuario.incorrectas;
                                tiempo_juego_ok += nivel_usuario.tiempo_juego;

                                n_user_complete++;

                                tiempo_meta_ok.push(nivel_usuario.tiempo_juego);
                                corridas_por_minutos.push( nivel_usuario.correctas /( nivel_usuario.tiempo_juego / 60 ) );
                                corrida_incorrectas_por_minutos.push( nivel_usuario.incorrectas / ( nivel_usuario.tiempo_juego / 60 ) )
                                tiempo_juego_ok_list.push(nivel.tiempo_juego);

                                intentos_efectividad.push(nivel.intentos)
                            }
                            
                        }
                    )

                    tiempo_juego = tiempo_juego / niveles_usuario.length;
                    n_wrong_prom = n_wrong_prom / niveles_usuario.length;
                    n_right_prom = n_right_prom / niveles_usuario.length;

                    intentos_ok = intentos_ok / n_user_complete;
                    correctas_ok = correctas_ok / n_user_complete;
                    incorrectas_ok = incorrectas_ok / n_user_complete;
                    tiempo_juego_ok = tiempo_juego_ok / n_user_complete;

                    let media = quartile(tiempo_meta_ok, 2, 4);

                    metricas.forEach(
                        metrica => {

                            switch(metrica.id) {
                                //Eficiencia
                                case 1:
                                    metrica.resultado = TiempoMeta(tiempo_juego_ok)
                                    metrica.valoracion = fuzzification_variable(
                                        metrica.resultado,
                                        sets_eficiencia.tiempo_meta(
                                            Math.min(...tiempo_meta_ok),
                                            Math.max(...tiempo_meta_ok)
                                        )
                                    );
                                    break;
                                case 2:
                                    metrica.resultado = EficienciaMeta(correctas_ok, tiempo_juego_ok / 60);
                                    metrica.valoracion = fuzzification_variable(
                                        metrica.resultado,
                                        sets_eficiencia.eficiencia_respuestas_correctas(
                                            Math.min(...corridas_por_minutos),
                                            Math.max(...corridas_por_minutos)
                                        )
                                    )
                                    break;
                                case 3:
                                    metrica.resultado = EficienciaMetaPorIncorrectas(incorrectas_ok, tiempo_juego / 60);
                                    metrica.valoracion = fuzzification_variable(
                                        metrica.resultado,
                                        sets_eficiencia.eficiencia_respuestas_incorrectas(
                                            Math.min(...corrida_incorrectas_por_minutos),
                                            Math.max(...corrida_incorrectas_por_minutos)
                                        )
                                    )
                                    break;
                                case 4:
                                    let best_time = 0;
                                    let cont_best_time = 0;
                                    tiempo_juego_ok_list.forEach(
                                        tiempo => {
                                            if(tiempo > media) {
                                                best_time += tiempo;
                                                cont_best_time++;
                                            }
                                        }
                                    )
                                    if (cont_best_time != 0)
                                        best_time = best_time / cont_best_time;
                                    else
                                        best_time = 1;
                                    
                                    metrica.resultado = EficienciaRelativaUsuarioOK(cont_best_time, tiempo_meta_ok.length);
                                    metrica.valoracion = fuzzification_variable(
                                        metrica.resultado,
                                        sets_eficiencia.relativa_mejores_resultados_jugadores
                                    )
                                    break;
                                case 5:
                                    let worst_time = 0;
                                    let cont_worst_time = 0;
                                    tiempo_juego_ok_list.forEach(
                                        tiempo => {
                                            if(tiempo < media) {
                                                worst_time += tiempo;
                                                cont_worst_time++
                                            }
                                        }
                                    )
                                    if(cont_worst_time != 0) {
                                        worst_time = worst_time / cont_worst_time;
                                    } else {
                                        worst_time = 1;
                                    }

                                    metrica.resultado = EficienciaRelativaUsuarioBAD(
                                        cont_worst_time,
                                        tiempo_meta_ok.length
                                    );
                                    metrica.valoracion = fuzzification_variable(
                                        metrica.resultado,
                                        sets_eficiencia.relativa_jugadores_dificultades_en_nivel
                                    )
                                    break;

                                //Efectividad
                                case 6:
                                    metrica.resultado = EfectividadMeta(correctas_ok, incorrectas_ok);
                                    metrica.valoracion = fuzzification_variable(
                                        metrica.resultado,
                                        sets_efectividad.efectividad_meta
                                    )
                                    break;
                                case 7:
                                    metrica.resultado = CompletitudMeta(
                                        n_user_complete,
                                        niveles_usuario.length
                                    )
                                    metrica.valoracion = fuzzification_variable(
                                        metrica.resultado,
                                        sets_efectividad.completitud_meta
                                    )
                                    break;
                                case 8:
                                    metrica.resultado = FrecuenciaIntentosMeta(
                                        intentos_ok, correctas_ok
                                    );
                                    metrica.valoracion = fuzzification_variable(
                                        metrica.resultado,
                                        sets_efectividad.frecuencia_intentos_meta(
                                            Math.min(...intentos_efectividad),
                                            Math.max(...intentos_efectividad)
                                        )
                                    )
                                    break;
                                
                                // Flexibilidad
                                case 9:
                                    metrica.resultado = AccesibilidadPorMetas(
                                        
                                    )

                            }

                        }
                    )

                    
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
                    
                }
            }
        )
        
    } catch (error) {
        console.log(error)
    }
}

main();