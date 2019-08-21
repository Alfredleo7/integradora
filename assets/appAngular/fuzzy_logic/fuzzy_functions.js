var construct_variable = (set) => {
    var obv = [],
        i;

    for (i = set.length - 1; i >= 0; i -= 1) {
        obv[i] = {
            a: set[i],
            firstPoint: (set[i][0] === set[i][1]) ? 1 : 0,
            lastPoint: (set[i][2] === set[i][3]) ? 1 : 0,
            mUp: (1 / (set[i][1] - set[i][0])),
            mDown: (1 / (set[i][3] - set[i][2]))
        };
    }
    return obv;
}

var fuzzification_function = (x, set) => {
    var f = 0;

    if (x <= set.a[0]) {
        f = set.firstPoint;
    } else {
        if (x < set.a[1]) {
            f = set.mUp * (x - set.a[0]);
        } else {
            if (x <= set.a[2]) {
                f = 1;
            } else {
                if (x < set.a[3]) {
                    f = 1 - set.mDown * (x - set.a[2]);
                } else {
                    if (x >= set.a[3]) {
                        f = set.lastPoint;
                    }
                }
            }
        }
    }

    return f;
}

var fuzzification_variable = (x, sets) => {
    var valori = [],
        i;
    let SET_FUZZYS = ['Baja', 'Media', 'Alta', 'Inconsistente']
    sets_constructed = construct_variable(sets);
    for (i = sets.length - 1; i >= 0; i -= 1) {
        valori[i] = fuzzification_function(x, sets_constructed[i]);
    }
    let index_max = valori.indexOf(Math.max(...valori))
    return { fuzzy: index_max, description: SET_FUZZYS[index_max]}
}




var get_value_of_set = (max, min, value_porc) => {
    return (max - min) * value_porc + min;
}


// EFICIENCIA MAX MIN
var tiempo_meta_range = {
    max: 110,
    min: 70
}

let eficiencia_respuestas_correctas = {
    max: 7,
    min: 1
}

let eficiencia_respuestas_incorrectas = {
    max: 7,
    min: 1
}

let relativa_mejores_resultados_jugadores = {
    max: 100,
    min: 0
}

let relativa_jugadores_dificultades_en_nivel = {
    max: 100,
    min: 0
}
/*
var set_efi = (max, min) => {
    var arreglo=[];
    console.log('max y min ',max,min);
    arreglo.push(get_value_of_set(max, min, 0));
    arreglo.push(get_value_of_set(max,min,  0));
    arreglo.push(get_value_of_set(max,min, 0.1));
    arreglo.push(get_value_of_set(max, min, 0.5));
    return arreglo;
}*/
// EFICIENCIA SETS
let sets_eficiencia = {
    tiempo_meta: (min, max) => {
        return [
                    [
                        get_value_of_set(max, min, 0),
                        get_value_of_set(max, min, 0),
                        get_value_of_set(max, min, 0.1),
                        get_value_of_set(max, min, 0.5)
                    ],
                    [
                        get_value_of_set(max, min, 0.1),
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.9)
                    ],
                    [
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.9),
                        get_value_of_set(max, min, 1),
                        get_value_of_set(max, min, 1)
                    ]
                ]
    },
    eficiencia_respuestas_correctas: (min, max) => {
        return [
                    [
                        get_value_of_set(max, min, 0),
                        get_value_of_set(max, min, 0),
                        get_value_of_set(max, min, 0.1),
                        get_value_of_set(max, min, 0.5)
                    ],
                    [
                        get_value_of_set(max, min, 0.1),
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.9)
                    ],
                    [
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.9),
                        get_value_of_set(max, min, 1),
                        get_value_of_set(max, min, 1)
                    ]
                ]
    },
    eficiencia_respuestas_incorrectas: (min, max) => {
        return [
                    [
                        get_value_of_set(max, min, 0),
                        get_value_of_set(max, min, 0),
                        get_value_of_set(max, min, 0.1),
                        get_value_of_set(max, min, 0.5)
                    ],
                    [
                        get_value_of_set(max, min, 0.1),
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.9)
                    ],
                    [
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.9),
                        get_value_of_set(max, min, 1),
                        get_value_of_set(max, min, 1)
                    ]
                ]
    },
    relativa_mejores_resultados_jugadores: [
        [
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 0),
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 0),
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 0.1),
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 0.5)
        ],
        [
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 0.1),
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 0.5),
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 0.5),
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 0.9)
        ],
        [
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 0.5),
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 0.9),
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 1),
            get_value_of_set(relativa_mejores_resultados_jugadores.max, relativa_mejores_resultados_jugadores.min, 1)
        ]
    ],
    relativa_jugadores_dificultades_en_nivel: [
        [
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 0),
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 0),
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 0.1),
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 0.5)
        ],
        [
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 0.1),
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 0.5),
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 0.5),
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 0.9)
        ],
        [
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 0.5),
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 0.9),
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 1),
            get_value_of_set(relativa_jugadores_dificultades_en_nivel.max, relativa_jugadores_dificultades_en_nivel.min, 1)
        ]
    ]
}

// EFECTIVIDAD MAX MIN
let efectividad_meta = {
    max: 100,
    min: 0
}
let completitud_meta = {
    max: 100,
    min: 0
}
let frecuencia_intentos_meta = {
    max: 3,
    min: 1
}

// EFECTIVIDAD SETS
let sets_efectividad = {
    efectividad_meta: [
        [
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 0),
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 0),
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 0.1),
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 0.5)
        ],
        [
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 0.1),
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 0.5),
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 0.5),
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 0.9)
        ],
        [
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 0.5),
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 0.9),
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 1),
            get_value_of_set(efectividad_meta.max, efectividad_meta.min, 1)
        ]
    ],
    completitud_meta: [
        [
            get_value_of_set(completitud_meta.max, completitud_meta.min, 0),
            get_value_of_set(completitud_meta.max, completitud_meta.min, 0),
            get_value_of_set(completitud_meta.max, completitud_meta.min, 0.1),
            get_value_of_set(completitud_meta.max, completitud_meta.min, 0.5)
        ],
        [
            get_value_of_set(completitud_meta.max, completitud_meta.min, 0.1),
            get_value_of_set(completitud_meta.max, completitud_meta.min, 0.5),
            get_value_of_set(completitud_meta.max, completitud_meta.min, 0.5),
            get_value_of_set(completitud_meta.max, completitud_meta.min, 0.9)
        ],
        [
            get_value_of_set(completitud_meta.max, completitud_meta.min, 0.5),
            get_value_of_set(completitud_meta.max, completitud_meta.min, 0.9),
            get_value_of_set(completitud_meta.max, completitud_meta.min, 1),
            get_value_of_set(completitud_meta.max, completitud_meta.min, 1)
        ]
    ],
    frecuencia_intentos_meta: (min, max) => {
        return [
                    [
                        get_value_of_set(max, min, 0),
                        get_value_of_set(max, min, 0),
                        get_value_of_set(max, min, 0.1),
                        get_value_of_set(max, min, 0.5)
                    ],
                    [
                        get_value_of_set(max, min, 0.1),
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.9)
                    ],
                    [
                        get_value_of_set(max, min, 0.5),
                        get_value_of_set(max, min, 0.9),
                        get_value_of_set(max, min, 1),
                        get_value_of_set(max, min, 1)
                    ]
                ]
    } 
}

// FLEXIBILIDAD MAX MIN
let accesibilidad_por_metas = {
    max: 100,
    min: 0
}
let accesibilidad_por_tiempo = {
    max: 100,
    min: 0
}

// FLEXIBILIDAD SETS
let sets_flexibilidad = {
    accesibilidad_por_metas: [
        [
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 0),
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 0),
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 0.1),
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 0.5)
        ],
        [
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 0.1),
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 0.5),
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 0.5),
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 0.9)
        ],
        [
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 0.5),
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 0.9),
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 1),
            get_value_of_set(accesibilidad_por_metas.max, accesibilidad_por_metas.min, 1)
        ]
    ],
    accesibilidad_por_tiempo: [
        [
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 0),
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 0),
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 0.1),
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 0.5)
        ],
        [
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 0.1),
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 0.5),
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 0.5),
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 0.9)
        ],
        [
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 0.5),
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 0.9),
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 1),
            get_value_of_set(accesibilidad_por_tiempo.max, accesibilidad_por_tiempo.min, 1)
        ]
    ]
}

// SATISFACCION MAX MIN
let preferencia_uso = {
    max: 100,
    min: 0
}

// SATISFACCION SETS
let sets_satisfaccion = {
    preferencia_uso: [
        [
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 0),
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 0),
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 0.1),
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 0.5)
        ],
        [
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 0.1),
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 0.5),
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 0.5),
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 0.9)
        ],
        [
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 0.5),
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 0.9),
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 1),
            get_value_of_set(preferencia_uso.max, preferencia_uso.min, 1)
        ]
    ]
}

let get_fuzzy_var_by_index = (obj, indexs) => {
    let fuzzy_var;
    if(indexs.length) {
        fuzzy_var = obj;
        indexs.forEach(
            index => {
                fuzzy_var = fuzzy_var[index]
            }
        )
    }
    return fuzzy_var;
}