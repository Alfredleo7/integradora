eficiencia_erroneas = {
        //correcta baja-incorrecta baja (Resultado inconsistente)
        cbib: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es baja por ende la eficiencia por respuestas incorrectas debería ser alta y no baja como se ve',
        //correcta baja-incorrecta media (Resultado que no se puede dar)
        cbim: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es baja por ende la eficiencia por respuestas incorrectas debería ser alta y no media',
        //correcta media-incorrecta baja (Resultado que no se puede dar)
        cmib: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es medio por ende la eficiencia por respuestas incorrectas tambien debería ser media y no baja',
        //correcta alta-incorrecta alta (Resultado que no se puede dar)
        caia: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es alta por ende la eficiencia por respuestas incorrectas debería ser baja y no alta',
        //correcta alta-incorrecta alta (Resultado que no se puede dar)
        caim: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es alta por ende la eficiencia por respuestas incorrectas debería ser baja y no alta',
        //correcta media-incorrecta baja (Resultado que no se puede dar)
        cmib: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es medio por ende la eficiencia por respuestas incorrectas tambien debería ser media y no baja',
        //eficiencia relativa a mejores resultados baja-eficiencia con dificultad en el nivel baja (Resultado inconsistente)
        bbwb: 'Resultado Incoherente debido a que si la eficiencia relativa a los mejores resultados de los jugadores es media por ende la eficiencia relativa a los jugadores con dificultades en el nivel tambien debería ser media',
        //eficiencia relativa a mejores resultados baja-eficiencia con dificultad en el nivel baja (Resultado inconsistente)
        //eficiencia relativa a mejores resultados baja-eficiencia con dificultad en el nivel baja (Resultado inconsistente)
        //eficiencia relativa a mejores resultados baja-eficiencia con dificultad en el nivel baja (Resultado inconsistente)
        bawm: 'Resultado Incoherente debido a que si la  la eficiencia relativa a los jugadores con dificultades es media por ende la eficiencia relativa a los mejores resultados de los jugadores tambien debería ser media',
        //eficiencia relativa a mejores resultados baja-eficiencia con dificultad en el nivel baja (Resultado inconsistente)
        bmwa: 'Resultado Incoherente debido a que si la eficiencia relativa a los mejores resultados de los jugadores es media por ende la eficiencia relativa a los jugadores con dificultades en el nivel tambien debería ser media',
    }

REGLAS_EFICIENCIA = [
    // TIEMPO META
    // BAJA
    [
        // EFICIENCIA DE META POR RESPUESTAS CORRECTAS
        // BAJA
        [
            // EFICIENCIA DE META POR RESPUESTAS INCORRECTAS
            // BAJA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: eficiencia_erroneas.cbib
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo por ende la eficiencia por respuestas incorrectas debería ser alta'
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo por ende la eficiencia por respuestas incorrectas debería ser alta'
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo por ende la eficiencia por respuestas incorrectas debería ser alta'
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo por ende la eficiencia por respuestas incorrectas debería ser alta'
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo por ende la eficiencia por respuestas incorrectas debería ser alta'
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo por ende la eficiencia por respuestas incorrectas debería ser alta'
                    }
                ]
            ],
            // MEDIA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo por ende la eficiencia por respuestas incorrectas debería ser alta'
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo por ende la eficiencia por respuestas incorrectas debería ser alta'
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo por ende la eficiencia por respuestas incorrectas debería ser alta'
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo, por lo contrario, la eficiencia por respuestas incorrectas debería ser alta'
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo, por lo contrario, la eficiencia por respuestas incorrectas debería ser alta'
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo, por lo contrario, la eficiencia por respuestas incorrectas debería ser alta'
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo, por lo contrario, la eficiencia por respuestas incorrectas debería ser alta'
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es bajo, por lo contrario, la eficiencia por respuestas incorrectas debería ser alta'
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es baja, por lo contrario, la eficiencia por respuestas incorrectas debería ser alta'
                    }
                ]
            ],
            // ALTA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ]
        ],
        // MEDIA
        [
            // EFICIENCIA DE META POR RESPUESTAS INCORRECTAS
            // BAJA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // MEDIA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // ALTA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ]
        ],
        // ALTA
        [
            // EFICIENCIA DE META POR RESPUESTAS INCORRECTAS
            // BAJA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // MEDIA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // ALTA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    }
                ]
            ]
        ]
    ],
    // MEDIA
    [
        // EFICIENCIA DE META POR RESPUESTAS CORRECTAS
        // BAJA
        [
            // EFICIENCIA DE META POR RESPUESTAS INCORRECTAS
            // BAJA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    }
                ]
            ],
            // MEDIA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // ALTA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ]
        ],
        // MEDIA
        [
            // EFICIENCIA DE META POR RESPUESTAS INCORRECTAS
            // BAJA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // MEDIA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // ALTA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ]
        ],
        // ALTA
        [
            // EFICIENCIA DE META POR RESPUESTAS INCORRECTAS
            // BAJA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // MEDIA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // ALTA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    }
                ]
            ]
        ]
    ],
    // ALTA
    [
        // EFICIENCIA DE META POR RESPUESTAS CORRECTAS
        // BAJA
        [
            // EFICIENCIA DE META POR RESPUESTAS INCORRECTAS
            // BAJA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbib
                    }
                ]
            ],
            // MEDIA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // ALTA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ]
        ],
        // MEDIA
        [
            // EFICIENCIA DE META POR RESPUESTAS INCORRECTAS
            // BAJA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // MEDIA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // ALTA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ]
        ],
        // ALTA
        [
            // EFICIENCIA DE META POR RESPUESTAS INCORRECTAS
            // BAJA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // MEDIA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 1,
                        conclusion: 'En promedio se obtuvieron buenos resultados con respecto a las preguntas contestadas, sin embargo esto se lo logro en un tiempo basntante alto, lo que hace que mi eficiencia con respecto a los mejores jugadores concluyendo con esto que los niños tuvieron dificultades en los diferentes niveles de este juego'
                    
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: ''
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: ''
                    }
                ]
            ],
            // ALTA
            [
                // EFICIENCIA RELATIVA A LOS MEJORES RESULTADOS DE LOS JUGADORES
                // BAJA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caia
                    }
                ]
            ]
        ]
    ]
]

REGLAS_EFECTIVIDAD = [
    // EFECTIVIDAD EN LA META
    // BAJA
    [
        // COMPLETITUD DE LA META
        // BAJA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: ''
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: ''
            },
            // ALTA
            {
                resultado: 0,
                conclusion: ''
            }
        ],
        // MEDIA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: ''
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: ''
            },
            // ALTA
            {
                resultado: 0,
                conclusion: ''
            }
        ],
        // ALTA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: ''
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: ''
            },
            // ALTA
            {
                resultado: 0,
                conclusion: ''
            }
        ]
    ],
    // MEDIA
    [
        // COMPLETITUD DE LA META
        // BAJA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: ''
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: ''
            },
            // ALTA
            {
                resultado: 0,
                conclusion: ''
            }
        ],
        // MEDIA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: ''
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: ''
            },
            // ALTA
            {
                resultado: 0,
                conclusion: ''
            }
        ],
        // ALTA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: ''
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: ''
            },
            // ALTA
            {
                resultado: 0,
                conclusion: ''
            }
        ]
    ],
    // ALTA
    [
        // COMPLETITUD DE LA META
        // BAJA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: ''
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: ''
            },
            // ALTA
            {
                resultado: 0,
                conclusion: ''
            }
        ],
        // MEDIA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: ''
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: ''
            },
            // ALTA
            {
                resultado: 0,
                conclusion: ''
            }
        ],
        // ALTA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: ''
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: ''
            },
            // ALTA
            {
                resultado: 2,
                conclusion: 'Los resultados de efectividad son altas'
            }
        ]
    ]
]

REGLAS_FLEXIBILIDAD = [
    // ACCESIBILIDAD POR METAS
    // BAJA
    [
        // ACCESIBILIDAD POR TIEMPO
        // BAJA
        {
            resultado: 0,
            conclusion: 'No existe información suficiente'
        },
        // MEDIA
        {
            resultado: 0,
            conclusion: ''
        },
        // ALTA
        {
            resultado: 0,
            conclusion: ''
        }
    ],
    // MEDIA
    [
        // ACCESIBILIDAD POR TIEMPO
        // BAJA
        {
            resultado: 1,
            conclusion: 'A pesar que la flexibildad por tiempo es baja, se considera que la flexibilidad es media ya que pesa más la flexibilidad por metas'
        },
        // MEDIA
        {
            resultado: 0,
            conclusion: ''
        },
        // ALTA
        {
            resultado: 0,
            conclusion: ''
        }
    ],
    // ALTA
    [
        // ACCESIBILIDAD POR TIEMPO
        // BAJA
        {
            resultado: 1,
            conclusion: 'Con respecto a la flexibilidad, la flexibilidad total es media'
        },
        // MEDIA
        {
            resultado: 0,
            conclusion: ''
        },
        // ALTA
        {
            resultado: 0,
            conclusion: ''
        }
    ]
]

REGLAS_SATISFACCION = [
    // PREFERENCIAS DE USO CON RESPECTO AL NIVEL VS EL RESTO DE NIVELES
    // BAJA
    {
        resultado: 0,
        conclusion: 'No existe información suficiente'
    },
    // MEDIA
    {
        resultado: 0,
        conclusion: ''
    },
    // ALTA
    {
        resultado: 0,
        conclusion: ''
    }
]

REGLAS_JUGABILIDAD = [
    // EFICIENCIA
    // BAJA
    [
        // EFECTIVIDAD
        // BAJA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ],
        // MEDIA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ],
        // ALTA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ]
    ],
    // MEDIA
    [
        // EFECTIVIDAD
        // BAJA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ],
        // MEDIA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ],
        // ALTA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 1,
                    conclusion: 'En conclusión la usabilidad es media'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 1,
                    conclusion: 'A pesar de que la efectividad es alta y la satisfacción es baja, la usabilidad total se establece en la media'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ]
    ],
    // ALTA
    [
        // EFECTIVIDAD
        // BAJA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ],
        // MEDIA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ],
        // ALTA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ]
    ],
    // INCONSISTENTE
    [
        // EFECTIVIDAD
        // BAJA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ],
        // MEDIA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ],
        // ALTA
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'La métrica eficiencia es inconsistente, no se puede dar una valoración de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: ''
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: ''
                }
            ]
        ]
    ]
]