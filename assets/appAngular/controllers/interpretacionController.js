app.controller('interpretacionController', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
	$scope.metricas = [];
	$scope.resultados = [];
	$scope.levels = [];
	$scope.level = [];
	$scope.learning = [];
	$scope.rooms_level = [];
	$scope.jugadores = [];	
	$scope.games = [];
	var tiempo_meta_ok=[]
	var efectividad_default = 0;
	var niveles = [], level_users = [];
	var idGameActual;

	//se obtiene todos los niveles
	TodoService.getLevels().then(function(response) {
		$scope.levels = response;
		
	    //$scope.temporal = response;
	});

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

	//se obtiene todos los niveles
	TodoService.getGames().then(function(response) {
	    $scope.games = response;
	    //$scope.temporal = response;
	});

	TodoService.getLevels().then(function(response) {
		niveles = response;
	});
	TodoService.getLevelUser().then(function(response) {
		level_users = response;
	});

	$scope.nivelesGame = function(){
        idGameActual = $scope.select.gameId;
        TodoService.getLevelsByGame(idGameActual).then(function(response) {
            $scope.levels = response;
        });
    }

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

		var rooms_default = [];
		var rooms_rest = [];
		var jugadores_room_default = [], jugadores_room_rest = [];
		//Maximos y minimos
		var intentos_efectividad=[];
		var tiempo_meta_ok=[];
		var respuestas_ok=[]
		
		TodoService.getLearnUserByLevel($scope.select.levelId).then(function(response) {
			$scope.learning = response;
		});

		//Obtener 
		TodoService.getEscenariosByLevel($scope.select.levelId).then(function(response) {
			$scope.rooms_level = response;
			var id_room = -100;
			for(var j=0; j < $scope.rooms_level.length; j++){
				if ($scope.rooms_level[j].nombre == 'escenario-con-historia-guia') {
					//Alamacena solo los escenarios con historia-guía
					rooms_default.push($scope.rooms_level[j]);
					id_room = rooms_default[0].id;

				} else{
					//Alamcena el resto de escenarios en este caso solo 
					//Aula virtual libre
					//Escenario sin historia y sin guía en los juegos
					//Escenario sin historia y con guía en los juegos
					rooms_rest.push($scope.rooms_level[j]);
				}
			}
			//Aquí se guardan los jugadores del room por defecto y del resto
			TodoService.getJugadoresByEscenario(id_room).then(function(response) {
	            jugadores_room_default = response;
	            TodoService.getJugadoresExceptAnEscenario(id_room).then(function(response) {
		            jugadores_room_rest = response;
		            TodoService.getLevelUserByLevel($scope.select.levelId).then(function(response) {
			      		$scope.resultados = [];
			      		$scope.level = response;
						  //console.log('jugadores en el nivel',$scope.level)
						  //console.log('romms_default',rooms_default)
						  //console.log('jugadores_rooms_default',jugadores_room_default)
						  //console.log('rest_player',jugadores_room_rest)
						  //console.log('romms_default',rooms_rest)
			      		for(var i=0; i<$scope.level.length; i++){
							  //Tiempo de juego de todos los jugadores en el nivel sin importar si jugaron o no
							tiempo_juego = tiempo_juego + $scope.level[i].tiempo_juego;
							//Total de intentos de todos los jugadores sin importar si completaron o no el nivel
							num_try_prom = num_try_prom + $scope.level[i].intentos;
							//Total de respuestas incorrectas de todos los jugadores sin importar si culminaron o no el nivel
							n_wrong_prom = n_wrong_prom + $scope.level[i].incorrectas;
							//Total de respuestas correctas de todos los jugadores sin importar si culminaron o no el nivel
							n_right_prom = n_right_prom + $scope.level[i].correctas;
							//Guarda en un array todos los tiempos de cada jugaros
							t_play[i] = $scope.level[i].tiempo_juego;
							//Guarda en un array todos los intentos de cada jugaros
							num_try[i] = $scope.level[i].intentos;
							//Guarda en un array todos desaciertos de cada jugaros
							n_wrong[i] = $scope.level[i].incorrectas;
							//Guarda en un array todos respuestas correctas de cada jugaros
							n_right[i] = $scope.level[i].correctas;

							//Solo se toma en cuenta los usuarios que competaron el nivel
							if ($scope.level[i].estado == "completado") {

								intentos_ok = intentos_ok + $scope.level[i].intentos;
								intentos_efectividad.push($scope.level[i].intentos);
								correctas_ok = correctas_ok + $scope.level[i].correctas;
								respuestas_ok.push($scope.level[i].correctas);
								incorrectas_ok = incorrectas_ok + $scope.level[i].incorrectas;
								tiempo_juego_ok = tiempo_juego_ok + $scope.level[i].tiempo_juego;
								//console.log("intentos_ok",$scope.level[i].intentos,"correctas ",$scope.level[i].correctas," incorrectas",$scope.level[i].incorrectas," tiempo de juego actual",$scope.level[i].tiempo_juego)
								tiempo_juego_ok_list[i] = Number($scope.level[i].tiempo_juego);
								tiempo_meta_ok.push($scope.level[i].tiempo_juego);
								n_user_complete++;
							}
						}
						
						
						

						//tiempo de juego = tiempo total de todos los juegos / cuantos juegos hay
						//console.log(tiempo_juego, '# de juegos: ',n_user_complete);
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
						q_lower_time_ok = (tiempo_meta_ok, 1, 4);
						q_upper_time_ok = quartile(tiempo_meta_ok, 3, 4);
						var media = quartile(tiempo_meta_ok, 2, 4);
						rango_interquartil = q_upper_time_ok - q_lower_time_ok;
						var l_externo_inf = q_lower_time_ok - ( rango_interquartil * 3);
						var l_externo_sup = q_upper_time_ok + ( rango_interquartil * 3);
						//console.log('qlower',q_lower_time_ok,'qoper',q_upper_time_ok,'rango in',rango_interquartil,'l_ext',l_externo_inf,'l_sup',l_externo_sup);
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
						    });
				        	switch($scope.metricas[i].id){
				        		//Eficiencia
				        		case 1:
									//console.log('Maximo',tiempo_meta_range.max);
									//console.log('Minimo',tiempo_meta_range.min);
									tiempo_meta_range.max=Math.max(...tiempo_meta_ok);
									tiempo_meta_range.min=Math.min(...tiempo_meta_ok);
									resultado = TiempoMeta(tiempo_juego_ok).toFixed(2); 
									$scope.resultados[i].resultado = resultado + " seg";									
									$scope.resultados[i].resultado_valor = resultado;
									$scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_eficiencia.tiempo_meta);
									//console.log($scope.resultados[i].valoracion)
				        			break;
				        		case 2:
									eficiencia_respuestas_correctas.max=(correctas_ok+incorrectas_ok)/(tiempo_meta_range.min/60);
									eficiencia_respuestas_correctas.min=0;
									resultado = EficienciaMeta(correctas_ok, (tiempo_juego_ok/60)).toFixed(2);
				        			$scope.resultados[i].resultado = resultado + " corr/min";
									$scope.resultados[i].resultado_valor = resultado;
									//console.log(eficiencia_respuestas_correctas.max, eficiencia_respuestas_correctas.min);
									$scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_eficiencia.eficiencia_respuestas_correctas)
				        			break;
				        		case 3:
									eficiencia_respuestas_incorrectas.max= (correctas_ok+incorrectas_ok)/(tiempo_meta_range.min/60);
									eficiencia_respuestas_incorrectas.min=0;
					        		resultado = EficienciaMetaPorIncorrectas(incorrectas_ok, (tiempo_juego/60)).toFixed(2);
					        		$scope.resultados[i].resultado = resultado + " incorr/min";
									$scope.resultados[i].resultado_valor = resultado;
									//console.log(eficiencia_respuestas_incorrectas.max, eficiencia_respuestas_incorrectas.min);
									$scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_eficiencia.eficiencia_respuestas_incorrectas)
				        			break;
								case 4:
									var best_time = 0, cont_best_time = 0;
									for(var j=0; j < tiempo_juego_ok_list.length; j++){
										console.log('media',media);
										if (tiempo_juego_ok_list[j] > media) {
											best_time = best_time + tiempo_juego_ok_list[j];
											cont_best_time++;
										}
										
									}
									if (cont_best_time != 0)
										best_time = best_time / cont_best_time;
									else
										best_time = 1;
									console.log(best_time, cont_best_time,  $scope.level.length)
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
									if (cont_worst_time != 0)
										worst_time = worst_time / cont_worst_time;
									else
										worst_time = 1;
									console.log(worst_time, cont_worst_time,  $scope.level.length)
									resultado = EficienciaRelativaUsuarioBAD(cont_worst_time, tiempo_meta_ok.length).toFixed(2);
									$scope.resultados[i].resultado = resultado + "%";
									$scope.resultados[i].resultado_valor = resultado;
									$scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_eficiencia.relativa_jugadores_dificultades_en_nivel);
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
									$scope.resultados[i].resultado = resultado + "% jugadores completaron";
									$scope.resultados[i].resultado_valor = resultado;
									$scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_efectividad.completitud_meta)
									break;
								case 8:
									//Maximo de las frecuencias de intentos
									frecuencia_intentos_meta.max = Math.max(...intentos_efectividad);
									frecuencia_intentos_meta.min = 1;
									resultado = FrecuenciaIntentosMeta(intentos_ok, correctas_ok).toFixed(2);
									$scope.resultados[i].resultado = resultado + " intentos";
									$scope.resultados[i].resultado_valor = resultado;
									$scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_efectividad.frecuencia_intentos_meta)
									break;
								//Flexibilidad
								case 9:
									//roms_default = 4, rooms_rest = 3  scope.level=37  jugadores_room_default, jugadores_room_rest=4,   jugadores_room_default=6
									resultado = AccesibilidadPorMetas(rooms_default, rooms_rest, $scope.level, jugadores_room_default, jugadores_room_rest).toFixed(3);
									if (isNaN(resultado)) {
										$scope.resultados[i].resultado = "No hay Jugadores en Escenario por Default";
										$scope.resultados[i].resultado_valor = 0;
										$scope.resultados[i].valoracion = fuzzification_variable(0, sets_flexibilidad.accesibilidad_por_metas);
									}
									else {
										$scope.resultados[i].resultado = resultado;
										$scope.resultados[i].resultado_valor = resultado;
                            			$scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_flexibilidad.accesibilidad_por_metas)
									}
									break;
								case 10:
									resultado = AccesibilidadPorTiempo(rooms_default, rooms_rest, $scope.level, jugadores_room_default, jugadores_room_rest).toFixed(3);
									if (isNaN(resultado)) { 
										$scope.resultados[i].resultado = "No hay Jugadores en Escenario por Default";$scope.resultados[i].resultado_valor = 0;
										$scope.resultados[i].valoracion = fuzzification_variable(0, sets_flexibilidad.accesibilidad_por_tiempo)
									}
									else {
										$scope.resultados[i].resultado = resultado;
										$scope.resultados[i].resultado_valor = resultado;
										$scope.resultados[i].valoracion = fuzzification_variable(resultado, sets_flexibilidad.accesibilidad_por_tiempo);
									}
									break;
								//Satisfaccion
								case 11:
									resultado = PreferenciaUso(n_user_complete, $scope.level, niveles, level_users).toFixed(3);
									$scope.resultados[i].resultado = resultado / 100;
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
							return ['Bajo', 'Medio', 'Alto'][index]
						}
			      	});

		        });
	        });
	        

	      	
		});
	}

}]);