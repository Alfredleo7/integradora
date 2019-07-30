var get_eficiencia = (crisp_input) => {
    let fl = new FuzzyLogic();
    let tiempo_meta = 200;
    let eficiencia_respuestas_correctas = 5;
    let eficiencia_respuestas_incorrectas = 4;
    let relativa_mejores_resultados_jugadores = 100;
    let relativa_jugadores_dificultades_en_nivel = 100;

    return fl.getResult({
        crisp_input: crisp_input,
        variables_input: [
            {
                name: "Tiempo de meta",
                setsName: ["Bajo", "Medio", "Alto"],
                sets: [
                    [tiempo_meta * 0, 0, tiempo_meta * 0.1, tiempo_meta * 0.5],
                    [tiempo_meta * 0.1, tiempo_meta * 0.5, tiempo_meta * 0.5, tiempo_meta * 0.9],
                    [tiempo_meta * 0.5, tiempo_meta * 0.9, tiempo_meta * 1, tiempo_meta * 1]
                ]
            },
            {
                name: "Eficiencia de meta por respuestas correctas",
                setsName: ["Bajo", "Medio", "Alto"],
                sets: [
                    [eficiencia_respuestas_correctas * 0, eficiencia_respuestas_correctas * 0, eficiencia_respuestas_correctas * 0.1, eficiencia_respuestas_correctas * 0.5],
                    [eficiencia_respuestas_correctas * 0.1, eficiencia_respuestas_correctas * 0.5, eficiencia_respuestas_correctas * 0.5, eficiencia_respuestas_correctas * 0.9],
                    [eficiencia_respuestas_correctas * 0.5, eficiencia_respuestas_correctas * 0.9, eficiencia_respuestas_correctas * 1, eficiencia_respuestas_correctas * 1]
                ]
            },
            {
                name: "Eficiencia de meta por respuestas incorrectas",
                setsName: ["Bajo", "Medio", "Alto"],
                sets: [
                    [eficiencia_respuestas_incorrectas * 0, eficiencia_respuestas_incorrectas * 0, eficiencia_respuestas_incorrectas * 0.1, eficiencia_respuestas_incorrectas * 0.5],
                    [eficiencia_respuestas_incorrectas * 0.1, eficiencia_respuestas_incorrectas * 0.5, eficiencia_respuestas_incorrectas * 0.5, eficiencia_respuestas_incorrectas * 0.9],
                    [eficiencia_respuestas_incorrectas * 0.5, eficiencia_respuestas_incorrectas * 0.9, eficiencia_respuestas_incorrectas * 1, eficiencia_respuestas_incorrectas * 1]
                ]
            },
            {
                name: "Eficiencia relativa a los mejores resultados de jugadores",
                setsName: ["Bajo", "Medio", "Alto"],
                sets: [
                    [relativa_mejores_resultados_jugadores * 0, relativa_mejores_resultados_jugadores * 0, relativa_mejores_resultados_jugadores * 0.1, relativa_mejores_resultados_jugadores * 0.5],
                    [relativa_mejores_resultados_jugadores * 0.1, relativa_mejores_resultados_jugadores * 0.5, relativa_mejores_resultados_jugadores * 0.5, relativa_mejores_resultados_jugadores * 0.9],
                    [relativa_mejores_resultados_jugadores * 0.5, relativa_mejores_resultados_jugadores * 0.9, relativa_mejores_resultados_jugadores * 1, relativa_mejores_resultados_jugadores * 1]
                ]
            },
            {
                name: "Eficiencia relativa a los jugadores con dificultades en el nivel",
                setsName: ["Bajo", "Medio", "Alto"],
                sets: [
                    [relativa_jugadores_dificultades_en_nivel * 0, relativa_jugadores_dificultades_en_nivel * 0, relativa_jugadores_dificultades_en_nivel * 0.1, relativa_jugadores_dificultades_en_nivel * 0.5],
                    [relativa_jugadores_dificultades_en_nivel * 0.1, relativa_jugadores_dificultades_en_nivel * 0.5, relativa_jugadores_dificultades_en_nivel * 0.5, relativa_jugadores_dificultades_en_nivel * 0.9],
                    [relativa_jugadores_dificultades_en_nivel * 0.5, relativa_jugadores_dificultades_en_nivel * 0.9, relativa_jugadores_dificultades_en_nivel * 1, relativa_jugadores_dificultades_en_nivel * 1]
                ]
            }
        ],
        variable_output: {
            name: "Eficiencia",
            setsName: ["Baja", "Media", "Alta"],
            sets: [
                [0, 0, 0.1, 0.5],
                [0.1, 0.5, 0.5, 0.9],
                [0.5, 0.9, 1, 1]
            ]
        },
        inferences: [
            [0, 2, 0],
            [0, 1, 2],
            [2, 1, 0],
            [0, 1, 2],
            [2, 1, 0]
        ]
    })
}

var get_efectividad = (crisp_input) => {
    let fl = new FuzzyLogic();
    let efectividad_en_la_meta = 100;
    let completitud_en_la_meta = 100;
    let frecuencia_intentos_por_meta = 10;

    return fl.getResult({
        crisp_input: crisp_input,
        variables_input: [
            {
                name: "Efectividad en la meta",
                setsName: ["Bajo", "Medio", "Alto"],
                sets: [
                    [efectividad_en_la_meta * 0, efectividad_en_la_meta * 0, efectividad_en_la_meta * 0.1, efectividad_en_la_meta * 0.5],
                    [efectividad_en_la_meta * 0.1, efectividad_en_la_meta * 0.5, efectividad_en_la_meta * 0.5, efectividad_en_la_meta * 0.9],
                    [efectividad_en_la_meta * 0.5, efectividad_en_la_meta * 0.9, efectividad_en_la_meta * 1, efectividad_en_la_meta * 1]
                ]
            },
            {
                name: "Completitud de la meta",
                setsName: ["Bajo", "Medio", "Alto"],
                sets: [
                    [completitud_en_la_meta * 0, completitud_en_la_meta * 0, completitud_en_la_meta * 0.1, completitud_en_la_meta * 0.5],
                    [completitud_en_la_meta * 0.1, completitud_en_la_meta * 0.5, completitud_en_la_meta * 0.5, completitud_en_la_meta * 0.9],
                    [completitud_en_la_meta * 0.5, completitud_en_la_meta * 0.9, completitud_en_la_meta * 1, completitud_en_la_meta * 1]
                ]
            },
            {
                name: "Frecuencia de intentos por meta",
                setsName: ["Bajo", "Medio", "Alto"],
                sets: [
                    [frecuencia_intentos_por_meta * 0, frecuencia_intentos_por_meta * 0, frecuencia_intentos_por_meta * 0.1, frecuencia_intentos_por_meta * 0.5],
                    [frecuencia_intentos_por_meta * 0.1, frecuencia_intentos_por_meta * 0.5, frecuencia_intentos_por_meta * 0.5, frecuencia_intentos_por_meta * 0.9],
                    [frecuencia_intentos_por_meta * 0.5, frecuencia_intentos_por_meta * 0.9, frecuencia_intentos_por_meta * 1, frecuencia_intentos_por_meta * 1]
                ]
            }
        ],
        variable_output: {
            name: "Efectividad",
            setsName: ["Baja", "Media", "Alta"],
            sets: [
                [0, 0, 0.1, 0.5],
                [0.1, 0.5, 0.5, 0.9],
                [0.5, 0.9, 1, 1]
            ]
        },
        inferences: [
            [0, 2, 0],
            [0, 1, 2],
            [2, 1, 0]
        ]
    })
}

var get_flexibilidad = (crisp_input) => {
    let fl = new FuzzyLogic();
    let flexibilidad_por_metas = 10;
    let flexibilidad_por_tiempo = 200;

    return fl.getResult({
        crisp_input: crisp_input,
        variables_input: [
            {
                name: "Flexibilidad por metas",
                setsName: ["Bajo", "Medio", "Alto"],
                sets: [
                    [flexibilidad_por_metas * 0, flexibilidad_por_metas * 0, flexibilidad_por_metas * 0.1, flexibilidad_por_metas * 0.5],
                    [flexibilidad_por_metas * 0.1, flexibilidad_por_metas * 0.5, flexibilidad_por_metas * 0.5, flexibilidad_por_metas * 0.9],
                    [flexibilidad_por_metas * 0.5, flexibilidad_por_metas * 0.9, flexibilidad_por_metas * 1, flexibilidad_por_metas * 1]
                ]
            },
            {
                name: "Flexibilidad por tiempo",
                setsName: ["Bajo", "Medio", "Alto"],
                sets: [
                    [flexibilidad_por_tiempo * 0, flexibilidad_por_tiempo * 0, flexibilidad_por_tiempo * 0.1, flexibilidad_por_tiempo * 0.5],
                    [flexibilidad_por_tiempo * 0.1, flexibilidad_por_tiempo * 0.5, flexibilidad_por_tiempo * 0.5, flexibilidad_por_tiempo * 0.9],
                    [flexibilidad_por_tiempo * 0.5, flexibilidad_por_tiempo * 0.9, flexibilidad_por_tiempo * 1, flexibilidad_por_tiempo * 1]
                ]
            }
        ],
        variable_output: {
            name: "Flexibilidad",
            setsName: ["Baja", "Media", "Alta"],
            sets: [
                [0, 0, 0.1, 0.5],
                [0.1, 0.5, 0.5, 0.9],
                [0.5, 0.9, 1, 1]
            ]
        },
        inferences: [
            [0, 2, 0],
            [0, 1, 2]
        ]
    })
}

var get_satisfaccion = (crisp_input) => {
    let fl = new FuzzyLogic();
    let preferencias_uso_respecto_del_nivel_vs_resto_niveles = 100;

    return fl.getResult({
        crisp_input: crisp_input,
        variables_input: [
            {
                name: "Preferencias de uso con respecto del nivel vs el resto de niveles",
                setsName: ["Bajo", "Medio", "Alto"],
                sets: [
                    [preferencias_uso_respecto_del_nivel_vs_resto_niveles * 0, preferencias_uso_respecto_del_nivel_vs_resto_niveles * 0, preferencias_uso_respecto_del_nivel_vs_resto_niveles * 0.1, preferencias_uso_respecto_del_nivel_vs_resto_niveles * 0.5],
                    [preferencias_uso_respecto_del_nivel_vs_resto_niveles * 0.1, preferencias_uso_respecto_del_nivel_vs_resto_niveles * 0.5, preferencias_uso_respecto_del_nivel_vs_resto_niveles * 0.5, preferencias_uso_respecto_del_nivel_vs_resto_niveles * 0.9],
                    [preferencias_uso_respecto_del_nivel_vs_resto_niveles * 0.5, preferencias_uso_respecto_del_nivel_vs_resto_niveles * 0.9, preferencias_uso_respecto_del_nivel_vs_resto_niveles * 1, preferencias_uso_respecto_del_nivel_vs_resto_niveles * 1]
                ]
            }
        ],
        variable_output: {
            name: "Satisfacción",
            setsName: ["Baja", "Media", "Alta"],
            sets: [
                [0, 0, 0.1, 0.5],
                [0.1, 0.5, 0.5, 0.9],
                [0.5, 0.9, 1, 1]
            ]
        },
        inferences: [
            [0, 2, 0]
        ]
    })
}

var get_interpretacion = (valor) => {
    if( valor >= 0.3334 ) return 'Alto';
    if( valor >= 0.1666 ) return 'Medio';
    return 'Bajo'
}