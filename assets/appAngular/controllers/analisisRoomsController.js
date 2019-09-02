app.controller('analisisRoomsController', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
	$scope.metricas = [];
    $scope.resultados = [];
    $scope.level = [];
    $scope.levels_game = [];
    $scope.learning = [];
    $scope.jugadores = [];  
    $scope.games = [];
    $scope.escenarios = [];

    $scope.escenario_actual = {};
    $scope.nivel_actual = {};

    var efectividad_default = 0;
    var niveles = [], level_users = [];
    var juego_actual;

    var idEscenarioActual = 0;

    //var comboGame = document.getElementById("game");
    //var comboLevel = document.getElementById("level");

    //se obtiene todos los room
    TodoService.getEscenarios().then(function(response) {
        $scope.escenarios = response;
    });

    $scope.gameEscenario = function(){
        idEscenarioActual = $scope.select.escenarioId;
        TodoService.getJuegosByEscenario(idEscenarioActual).then(function(response) {
            $scope.games = response;
            TodoService.getEscenarioById(idEscenarioActual).then(function(response) {
                $scope.escenario_actual = response;
                console.log($scope.escenario_actual);
            });
        });
    }

    $scope.nivelesGame = function(){
        TodoService.getLevelsByGame($scope.select.gameId).then(function(response) {
            $scope.levels_game = response;
        });
    }

    TodoService.getMetrics().then(function(response) {
        $scope.metricas = response;
        $.getScript('appAngular/controllers/resultados_metricas.js', function()
        {
            //console.log(hello());
        });
    });
    //se obtiene todos los niveles
    TodoService.getJugadores().then(function(response) {
        $scope.jugadores = response;
        //$scope.temporal = response;
    });

    TodoService.getLevelUser().then(function(response) {
        level_users = response;
    });


    $scope.funcionLevel = function(){
        var resultado = 0;
        var q_lower = 0;
        var q_mid = 0;
        var q_upper = 0;
        var q_lower_time_ok = 0;
        var q_mid_time_ok = 0;
        var q_upper_time_ok = 0;
        var rango_interquartil = 0;
        var limite_externo_menor = 0;
        var limite_externo_mayor = 0;
        var media=0;
        //var q_lower = numbers.statistic.quantile(data, 1, 4);
        //var q_mid = numbers.statistic.quantile(data, 2, 4);
        //var q_upper = numbers.statistic.quantile(data, 3, 4);
        
        var t_play = [$scope.level.length - 1]; //Arreglo del tiempo de juego de un nivel
        var tiempo_juego = 0; //promedio de tiempo de juego de un nivel
        var num_try = [$scope.level.length - 1]; //Arreglo del numero de intentos de un nivel
        var num_try_prom = 0; // promedio de numero de intentos de un nivel
        var n_user_complete = 0; //Número de usuarios que completaron el nivel

        var n_wrong = [];
        var n_wrong_prom = 0;
        var n_right = [];
        var tiempo_juego_ok_list = [];
        var n_right_prom = 0;

        var intentos_ok = 0;
        var correctas_ok = 0;
        var incorrectas_ok = 0;
        var tiempo_juego_ok = 0;

        var escenario_default = [];
        var escenario_rest = [];
        var jugadores_room_default = [], jugadores_room_rest = [];

        // Maximos y mínimos
        var intentos_efectividad=[];
        var tiempo_meta_ok=[];
		var respuestas_ok=[]
		var r_incorrectas_ok=[]
		var corridas_por_minutos=[]
		var corrida_incorrectas_por_minutos=[]
        

                
        TodoService.getLearnUserByLevel($scope.select.levelId).then(function(response) {
            $scope.learning = response;
        });

        TodoService.getNivelById($scope.select.levelId).then(function(response) {
            $scope.nivel_actual = response;
        });

        
        for(var j=0; j < $scope.escenarios.length; j++){
            if ($scope.escenarios[j].id == idEscenarioActual) {
                escenario_default.push($scope.escenarios[j]);
            } else{
                escenario_rest.push($scope.escenarios[j]);
            }
        }

        //Aquí se guardan los jugadores del room por defecto y del resto
        TodoService.getJugadoresByEscenario(idEscenarioActual).then(function(response) {
            jugadores_room_default = response;
        });
        TodoService.getJugadoresExceptAnEscenario(idEscenarioActual).then(function(response) {
            jugadores_room_rest = response;
        });

        TodoService.getLevelUserByEscenario(idEscenarioActual).then(function(response) {
            $scope.resultados = [];
            $scope.level = [];
            //$scope.level = response;

            //aqui se filtra al nivel seleccionado
            for(var i = 0; i < response.length; i++){
                if (response[i].id_nivel == $scope.select.levelId) 
                    $scope.level.push(response[i]);
            }
            

            for(var i=0; i<$scope.level.length; i++){
                tiempo_juego = tiempo_juego + $scope.level[i].tiempo_juego;
                num_try_prom = num_try_prom + $scope.level[i].intentos;
                n_wrong_prom = n_wrong_prom + $scope.level[i].incorrectas;
                n_right_prom = n_right_prom + $scope.level[i].correctas;

                t_play[i] = $scope.level[i].tiempo_juego;
                num_try[i] = $scope.level[i].intentos;
                n_wrong[i] = $scope.level[i].incorrectas;
                n_right[i] = $scope.level[i].correctas;
                //Solo se toma en cuenta los usuarios que competaron el nivel
                if ($scope.level[i].estado == "completado") {
                    intentos_ok = intentos_ok + $scope.level[i].intentos;
                    correctas_ok = correctas_ok + $scope.level[i].correctas;
                    respuestas_ok.push($scope.level[i].correctas)
                    incorrectas_ok = incorrectas_ok + $scope.level[i].incorrectas;
                    corrida_incorrectas_por_minutos.push($scope.level[i].incorrectas/($scope.level[i].tiempo_juego/60))
                    r_incorrectas_ok.push($scope.level[i].incorrectas)
                    corridas_por_minutos.push($scope.level[i].correctas/($scope.level[i].tiempo_juego/60))
                    tiempo_juego_ok = tiempo_juego_ok + $scope.level[i].tiempo_juego;
                    console.log($scope.level[i].incorrectas/($scope.level[i].tiempo_juego/60));
                    tiempo_juego_ok_list[i] = $scope.level[i].tiempo_juego;
                    n_user_complete++;
                    
                    // ingreso de valores para máximos y mínimos
                    
                    tiempo_meta_ok.push($scope.level[i].tiempo_juego);
					
				    // ingreso de valores para maximos y minimos
					intentos_efectividad.push($scope.level[i].intentos);
                    
                }
            }
            tiempo_juego = tiempo_juego / $scope.level.length;
            n_wrong_prom = n_wrong_prom / $scope.level.length;
            n_right_prom = n_right_prom / $scope.level.length;
            //q_mid = numbers.statistic.quantile(t_play, 2, 4);
            num_try_prom = num_try_prom / $scope.level.length;
            //q_mid = numbers.statistic.quantile(num_try, 2, 4);

            intentos_ok = intentos_ok / n_user_complete;
            correctas_ok = correctas_ok  / n_user_complete;
            incorrectas_ok = incorrectas_ok  / n_user_complete;
            tiempo_juego_ok = tiempo_juego_ok  / n_user_complete;

            //quartiles para el tiempo de usuarios que terminaron en nivel
            q_lower_time_ok = quartile(tiempo_meta_ok, 1, 4);
            q_upper_time_ok = quartile(tiempo_meta_ok, 3, 4);
            media=quartile(tiempo_meta_ok,2,4);
            rango_interquartil = q_upper_time_ok - q_lower_time_ok;
            var l_externo_inf = q_lower_time_ok - ( rango_interquartil * 3);
            var l_externo_sup = q_upper_time_ok + ( rango_interquartil * 3);

            $scope.caracteristicas = {
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
            
            for(var i=0; i<$scope.metricas.length; i++){
                $scope.resultados.push({
                    id: $scope.metricas[i].id,
                    nombre: $scope.metricas[i].nombre,
                    nombre_car: $scope.metricas[i].nombre_car,
                    proposito: $scope.metricas[i].proposito,
                    formula: $scope.metricas[i].formula,
                    interpretacion: $scope.metricas[i].interpretacion,
                    resultado: 0,
                    resultado_valor: 0
                });
                switch($scope.metricas[i].id){
                    //Eficiencia
                    case 1:
                        resultado = TiempoMeta(tiempo_juego_ok).toFixed(2);
                        $scope.resultados[i].resultado = resultado + " seg";
                        $scope.resultados[i].resultado_valor = resultado;
                        $scope.resultados[i].valoracion = fuzzification_variable(
                            resultado,
                            sets_eficiencia.tiempo_meta(
                                Math.min(...tiempo_meta_ok),
                                Math.max(...tiempo_meta_ok)
                            )
                        )
                        break;
                    case 2:
                        resultado = EficienciaMeta(correctas_ok, (tiempo_juego/60)).toFixed(2);
                        $scope.resultados[i].resultado = resultado + " corr/min";
                        $scope.resultados[i].resultado_valor = resultado;
                        $scope.resultados[i].valoracion = fuzzification_variable(
                            resultado,
                            sets_eficiencia.eficiencia_respuestas_correctas(
                                Math.min(...corridas_por_minutos),Math.max(...corridas_por_minutos)
                            )
                        )
                        break;
                    case 3:
                        resultado = EficienciaMetaPorIncorrectas(incorrectas_ok, (tiempo_juego/60)).toFixed(2);
                        $scope.resultados[i].resultado = resultado + " incorr/min";
                        $scope.resultados[i].resultado_valor = resultado;
                        $scope.resultados[i].valoracion = fuzzification_variable(
                            resultado,
                            sets_eficiencia.eficiencia_respuestas_incorrectas(
                                Math.min(...corrida_incorrectas_por_minutos),Math.max(...corrida_incorrectas_por_minutos)
                            )
                        )
                        console.log('Eficiencia de respuestas incorrectas\n\tMínimo:',Math.min(...corrida_incorrectas_por_minutos),"incorrectas por minutos\n\tMáximo: ",
									Math.max(...corrida_incorrectas_por_minutos)," incorrectas por minutos")
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
                        resultado = EficienciaRelativaUsuarioOK(cont_best_time, tiempo_meta_ok.length).toFixed(2);
                        $scope.resultados[i].resultado = resultado + "%";
                        $scope.resultados[i].resultado_valor = resultado;
                        $scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_eficiencia.relativa_mejores_resultados_jugadores)
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
                        
                        resultado = EficienciaRelativaUsuarioBAD(cont_worst_time,tiempo_meta_ok.length).toFixed(2);
                        $scope.resultados[i].resultado = resultado + "%";
                        $scope.resultados[i].resultado_valor = resultado;
                        $scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_eficiencia.relativa_jugadores_dificultades_en_nivel)
                        break;
                    //Efectividad
                    case 6:
                        resultado = EfectividadMeta(correctas_ok, incorrectas_ok).toFixed(2);
                        $scope.resultados[i].resultado = resultado + "% aciertos";
                        $scope.resultados[i].resultado_valor = resultado;
                        $scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_efectividad.efectividad_meta)
                        break;
                    case 7:
                        resultado = CompletitudMeta(n_user_complete, $scope.level.length).toFixed(2);
                        $scope.resultados[i].resultado = resultado + "% j. completaron";
                        $scope.resultados[i].resultado_valor = resultado;
                        $scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_efectividad.completitud_meta)
                        break;
                    case 8:
                        resultado = FrecuenciaIntentosMeta(intentos_ok, correctas_ok).toFixed(2);
                        $scope.resultados[i].resultado = resultado + " intentos";
                        $scope.resultados[i].resultado_valor = resultado;
                        $scope.resultados[i].valoracion = fuzzification_variable(
                            resultado,
                            sets_efectividad.frecuencia_intentos_meta(
                                Math.min(...intentos_efectividad),
                                Math.max(...intentos_efectividad)
                            )
                        )
                        break;
                    //Flexibilidad
                    case 9:
                        resultado = AccesibilidadPorMetas(escenario_default, escenario_rest, $scope.level, jugadores_room_default, jugadores_room_rest).toFixed(3);
                        if (isNaN(resultado)){
                            $scope.resultados[i].resultado = "No hay Jugadores en Escenario por Default";
                            $scope.resultados[i].resultado_valor = 0;
                            $scope.resultados[i].valoracion = {fuzzy: 0, description: 'No aplica'}
                        }
                        else{
                            $scope.resultados[i].resultado = resultado;
                            $scope.resultados[i].resultado_valor = resultado;
                            $scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_flexibilidad.accesibilidad_por_metas)
                        }
                        break;
                    case 10:
                        resultado = AccesibilidadPorTiempo(escenario_default, escenario_rest, $scope.level, jugadores_room_default, jugadores_room_rest).toFixed(3);
                        if (isNaN(resultado)){
                            $scope.resultados[i].resultado = "No hay Jugadores en Escenario por Default";
                            $scope.resultados[i].resultado_valor = 0;
                            $scope.resultados[i].valoracion = {fuzzy: 0, description: 'No aplica'}
                        }
                        else {
                            $scope.resultados[i].resultado = resultado;
                            $scope.resultados[i].resultado_valor = resultado;
                            $scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_flexibilidad.accesibilidad_por_tiempo)
                        }
                        break;
                    //Satisfaccion
                    case 11:
                        resultado = PreferenciaUso(n_user_complete, $scope.level, niveles, level_users).toFixed(3);
                        $scope.resultados[i].resultado = resultado + "%";
                        $scope.resultados[i].resultado_valor = resultado;
                        $scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_satisfaccion.preferencia_uso)
                        break;
                    default:
                        break;
                }
                switch($scope.metricas[i].nombre_car) {
                    case 'Eficiencia':
                        $scope.caracteristicas.eficiencia.sets.push($scope.resultados[i].valoracion);
                        break;
                    case 'Efectividad':
                        $scope.caracteristicas.efectividad.sets.push($scope.resultados[i].valoracion);
                        break;
                    case 'Flexibilidad':
                        $scope.caracteristicas.flexibilidad.sets.push($scope.resultados[i].valoracion);
                        break;
                    case 'Satisfacción':
                        $scope.caracteristicas.satisfaccion.sets.push($scope.resultados[i].valoracion);
                        break;
                    default:
                        break;
                }
            }

            let index_eficiencia = $scope.caracteristicas.eficiencia.sets.map(fuz_var=>fuz_var.fuzzy);
            $scope.caracteristicas.eficiencia.fuzzy = get_fuzzy_var_by_index(REGLAS_EFICIENCIA, index_eficiencia);
            let index_efectividad = $scope.caracteristicas.efectividad.sets.map(fuz_var=>fuz_var.fuzzy);
            $scope.caracteristicas.efectividad.fuzzy = get_fuzzy_var_by_index(REGLAS_EFECTIVIDAD, index_efectividad);
            let index_flexibilidad = $scope.caracteristicas.flexibilidad.sets.map(fuz_var=>fuz_var.fuzzy);
            $scope.caracteristicas.flexibilidad.fuzzy = get_fuzzy_var_by_index(REGLAS_FLEXIBILIDAD, index_flexibilidad);
            let index_satisfaccion = $scope.caracteristicas.satisfaccion.sets.map(fuz_var=>fuz_var.fuzzy);
            $scope.caracteristicas.satisfaccion.fuzzy = get_fuzzy_var_by_index(REGLAS_SATISFACCION, index_satisfaccion);
            $scope.caracteristicas.jugabilidad.fuzzy = get_fuzzy_var_by_index(
                REGLAS_JUGABILIDAD,
                    [
                        $scope.caracteristicas.eficiencia.fuzzy.resultado,
                        $scope.caracteristicas.efectividad.fuzzy.resultado,
                        $scope.caracteristicas.flexibilidad.fuzzy.resultado,
                        $scope.caracteristicas.satisfaccion.fuzzy.resultado
                    ]
                )

            $scope.get_assessment = (index) => {
                return ['Bajo', 'Medio', 'Alto', 'Inconsistente'][index]
            }
            // $scope.caracteristicas.eficiencia.valor = get_eficiencia($scope.caracteristicas.eficiencia.crisp_input);
            // $scope.caracteristicas.efectividad.valor = get_efectividad($scope.caracteristicas.efectividad.crisp_input);
            // $scope.caracteristicas.flexibilidad.valor = get_flexibilidad($scope.caracteristicas.flexibilidad.crisp_input);
            // $scope.caracteristicas.satisfaccion.valor = get_satisfaccion($scope.caracteristicas.satisfaccion.crisp_input);
            // $scope.caracteristicas.eficiencia.interpretacion = get_interpretacion($scope.caracteristicas.eficiencia.valor);
            // $scope.caracteristicas.efectividad.interpretacion = get_interpretacion($scope.caracteristicas.efectividad.valor);
            // $scope.caracteristicas.flexibilidad.interpretacion = get_interpretacion($scope.caracteristicas.flexibilidad.valor);
            // $scope.caracteristicas.satisfaccion.interpretacion = get_interpretacion($scope.caracteristicas.satisfaccion.valor);
            console.log($scope.caracteristicas);
        });
    }

}]);