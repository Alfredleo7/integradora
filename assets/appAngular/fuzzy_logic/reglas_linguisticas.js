eficiencia_erroneas = {
    //correcta baja-incorrecta baja (Resultado inconsistente)
        cbib: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es baja por ende la eficiencia por respuestas incorrectas debería ser alta y no baja',
        //correcta baja-incorrecta media (Resultado que no se puede dar)
        cbim: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es baja por ende la eficiencia por respuestas incorrectas debería ser alta y no media',
        //correcta media-incorrecta baja (Resultado que no se puede dar)
        cmib: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es medio por ende la eficiencia por respuestas incorrectas tambien debería ser media y no baja',
        //correcta media-incorrecta baja (Resultado que no se puede dar)
        cmia: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es medio por ende la eficiencia por respuestas incorrectas tambien debería ser media y no alta',
        //correcta alta-incorrecta alta (Resultado que no se puede dar)
        caia: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es alta por ende la eficiencia por respuestas incorrectas debería ser baja y no alta',
        //correcta alta-incorrecta alta (Resultado que no se puede dar)
        caim: 'Resultado incoherente debido a que si la eficiencia de meta por respuestas correctas es alta por ende la eficiencia por respuestas incorrectas debería ser baja y no media',
        
        //EFICIENCIA POR MEJORES RESULTADOS Y PEORES RESULTADOS (COMBINACIONES NO CONSISTENTES)
        //eficiencia relativa a mejores resultados eficiencia con dificultad en el nivel baja (Resultado inconsistente)
        bbwb: 'Resultado incoherente debido a que si la eficiencia relativa a los mejores resultados de los jugadores es baja por ende la eficiencia relativa a los jugadores con dificultades en el nivel debería ser alta y no baja',
        //eficiencia relativa a mejores resultados baja-eficiencia con dificultad en el nivel media (Resultado inconsistente)
        bbwm: 'Resultado incoherente debido a que si la eficiencia relativa a los mejores resultados de los jugadores es baja por ende la eficiencia relativa a los jugadores con dificultades en el nivel debería ser alta y no media',
        
        //eficiencia relativa a mejores resultados media-eficiencia con dificultad en el nivel baja (Resultado inconsistente)
        bmwb: 'Resultado incoherente debido a que si la eficiencia relativa a los mejores resultados de los jugadores es media por ende la eficiencia relativa a los jugadores con dificultades en el nivel tambien debería ser media y no bajo',
        //eficiencia relativa a mejores resultados media-eficiencia con dificultad en el nivel alta (Resultado inconsistente)
        bmwa: 'Resultado incoherente debido a que si la eficiencia relativa a los mejores resultados de los jugadores es media por ende la eficiencia relativa a los jugadores con dificultades en el nivel tambien debería ser media y no alta',
        //eficiencia relativa a mejores resultados alta-eficiencia con dificultad en el nivel media (Resultado inconsistente)
        bawa: 'Resultado incoherente debido a que si la eficiencia relativa a los mejores resultados de los jugadores es alta por ende la eficiencia relativa a los jugadores con dificultades en el nivel debería ser baja y no alta',
        //eficiencia relativa a mejores resultados alta-eficiencia con dificultad en el nivel media (Resultado inconsistente)
        bawm: 'Resultado incoherente debido a que si la eficiencia relativa a los mejores resultados de los jugadores es alta por ende la eficiencia relativa a los jugadores con dificultades en el nivel debería ser baja y no media',
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
                    //posición 11 en el excel
                    {
                        resultado: 0,
                        conclusion: bbwb
                    },
                    // MEDIA
                    //posición 12 en el excel
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio contestaron bastante rapido, esto me arrojo una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Sin embargo, la eficiencia de respuestas correctas tambien es baja y la eficiencia de usuarios con dificultad en el nivel es alta, que lo que trata de decir que a pesar de responder de manera rapida, lo hicieron mal y eso provoco que no hayan jugadores con buen puntaje.'
                    },
                    // ALTA    
                    //posición 13 en el excel
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio contestaron bastante rapido, esto arrojó una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Sin embargo, la eficiencia de respuestas correctas tambien es baja y la eficiencia de usuarios con dificultad en el nivel es baja; Esto trata de decir, que a pesar de responder de manera rapida, lo hicieron mal y se debe a la dificultad que hay en el nivel lo cual provoco que no hayan jugadores con buen puntaje. También pueder ser que el niño por hacerlo rápido no analizó las preguntas y respondió al azar.'
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio contestaron bastante rapido, esto arrojó una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Sin embargo, la eficiencia de respuestas correctas tambien es baja y la eficiencia de usuarios con dificultad en el nivel es baja; Esto trata de decir, que a pesar de responder de manera rapida, lo hicieron mal y que no se debe a la dificultad que hay en el nivel. De los que completaron, hay una media rescatable de jugadores que hicieron un buen trabajo. También pueder ser que el niño por hacerlo rápido no analizó las preguntas y respondió al azar.'
                    },
                    // MEDIA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio contestaron bastante rapido, esto arrojó una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Sin embargo, la eficiencia de respuestas correctas tambien es baja y la eficiencia de usuarios con dificultad en el nivel es media;Con esto, se puede deducir, que a pesar de responder de manera rapida, lo hicieron mayormente de manera incorrecta. Ademas, que la difcultad en el nivel es proporcional a los jugadores que obtuvieron un buen resultado. Cabe recalcar que las eficiencias se esta midiendo con los juegos que niveles que fueron completados.'
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio contestaron bastante rapido, esto arrojó una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Sin embargo, la eficiencia de respuestas correctas tambien es baja y la eficiencia de usuarios con dificultad en el nivel es ALTA;Con esto, se puede deducir, que a pesar de responder de manera rapida, lo hicieron mayormente de manera incorrecta. Cabe recalcar que las eficiencias se esta midiendo con los juegos que niveles que fueron completados.'
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
                conclusion: 'El numero de niños que completaron el nivel fue muy bajo, lo que quiere decir que hubo muchos abandonos. De los que completaron el nivel, al menos un intento tambien fueron pocos los que contestaron correctamente.'
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: 'El numero de niños que completaron el nivel fue muy bajo, lo que quiere decir que hubo muchos abandonos. De los que completaron el nivel, realizando mas de un intento, respondieron incorrectamente.'
            },
            // ALTA
            {
                resultado: 0,
                conclusion: 'El numero de niños que completaron el nivel fue muy bajo, lo que quiere decir que hubo muchos abandonos. De los que completaron el nivel, realizando muchos intentos, respondieron incorrectamente. Esto puede dar a entender que el nivel de las preguntas estan complejas.'
            }
        ],
        // MEDIA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: 'El numero de niños que completaron el nivel fue muy bajo, lo que quiere decir que hubo muchos abandonos. De los que completaron el nivel, realizando al menos un intento, respondieron medianamente correcto.'
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: 'El numero de niños que completaron el nivel fue bajo, lo que quiere decir que hubo muchos abandonos. De los que completaron el nivel, realizando mas de un intento, respondieron medianamente correcto.'
            },
            // ALTA
            {
                resultado: 0,
                conclusion: 'El numero de niños que completaron el nivel fue muy bajo, lo que quiere decir que hubo muchos abandonos. De los que completaron el nivel, realizando muchos intentos, respondieron medianamente correcto. Esto da indicios de que el nivel presenta cierta dificultad en las preguntas.'
            }
        ],
        // ALTA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 1,
                conclusion: 'El numero de niños que completaron el nivel fue muy bajo, lo que quiere decir que hubo muchos abandonos.Sin embargo,de los que completaron el nivel, realizando al menos un intento, respondieron correctamente.'
            },
            // MEDIA
            {
                resultado: 1,
                conclusion: 'El numero de niños que completaron el nivel fue bajo, lo que quiere decir que hubo muchos abandonos. De los que completaron el nivel, realizando mas de un intentos, respondieron correcto. Esto da indicios de que el nivel presenta cierta dificultad para enteder a la primera.'
            },
            // ALTA
            {
                resultado: 0,
                conclusion: 'El numero de niños que completaron el nivel fue muy bajo, lo que quiere decir que hubo muchos abandonos. De los que completaron el nivel, realizando muchos intentos, respondieron correctamente las preguntas. Esto da indicios de que el nivel presenta cierta dificultad en las preguntas.'
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
                conclusion: 'El número de niños que completaron el nivel fue casi, o mas de la mitad del total, lo que quiere decir que hubo el mismo porcentaje de abandonos. De los que completaron el nivel, realizando al menos un intento, respondieron incorrectamente las preguntas. '
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: 'El número de niños que completaron el nivel fue casi, o mas de la mitad del total, lo que quiere decir que hubo el mismo porcentaje de abandonos. De los que completaron el nivel, realizando al menos un intento, respondieron incorrectamente las preguntas. '
            },
            // ALTA
            {
                resultado: 0,
                conclusion: 'El número de niños que completaron el nivel fue casi, o mas de la mitad del total, lo que quiere decir que hubo el mismo porcentaje de abandonos. De los que completaron el nivel, realizando al menos un intento, respondieron incorrectamente las preguntas. '
            }
        ],
        // MEDIA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel fue casi, o mas de la mitad del total, lo que quiere decir que hubo el mismo porcentaje de abandonos. De los que completaron el nivel, realizando al menos un intento, respondieron medianamente correctas las preguntas. '
            },
            // MEDIA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel fue casi, o mas de la mitad del total, lo que quiere decir que hubo el mismo porcentaje de abandonos. De los que completaron el nivel, realizandomas de un intento, respondieron medianamente correctas las preguntas. '
            },
            // ALTA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel fue casi, o mas de la mitad del total, lo que quiere decir que hubo el mismo porcentaje de abandonos. De los que completaron el nivel, realizando varios intento, respondieron medianamente correctas las preguntas. '
            }
        ],
        // ALTA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 2,
                conclusion: 'El número de niños que completaron el nivel fue casi, o mas de la mitad del total, lo que quiere decir que hubo el mismo porcentaje de abandonos. De los que completaron el nivel, realizando por lo mucho 1 intento, respondieron mayormente correcta las preguntas. '
            },
            // MEDIA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel fue casi, o mas de la mitad del total, lo que quiere decir que hubo el mismo porcentaje de abandonos. De los que completaron el nivel, realizando mas de 1 intento, respondieron mayormente correcta las preguntas. '
            },
            // ALTA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel fue casi, o mas de la mitad del total, lo que quiere decir que hubo el mismo porcentaje de abandonos. De los que completaron el nivel, realizando muchos intento, respondieron correctamente las preguntas. '
            }
        ]
    ],
    //EFECTIVIDAD EN LA MENTA 
    //ALTA
    [
        // COMPLETITUD DE LA META
        // BAJA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: 'El número de niños que completaron el nivel fue casi total. Sin embargo, estos que completaron el nivel realizando por lo menos un intento, respondieron en un gran porcentaje Incorrectamente las preguntas. '
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: 'El número de niños que completaron el nivel fue casi total. Sin embargo, estos que completaron el nivel realizando  mas de un intento, respondieron en  gran porcentaje incorrectamente las preguntas. '
            },
            // ALTA
            {
                resultado: 0,
                conclusion: 'El número de niños que completaron el nivel fue casi total. Sin embargo, estos que completaron el nivel realizando muchos intento, respondieron en un gran porcentaje incorrectamente las preguntas. '
            }
        ],
        // MEDIA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 2,
                conclusion: 'El número de niños que completaron el nivel fue casi total. De estos que completaron el nivel, realizando por lo mucho un intento, respondieron en un  porcentaje medio, correctamente las preguntas. '
            },
            // MEDIA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel fue casi total. De estos que completaron el nivel, realizando mas de un INTENTO, respondieron en un  porcentaje medio, correctamente las preguntas. '
            },
            // ALTA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel fue casi total. De estos que completaron el nivel, realizando muchos intento, respondieron en un  porcentaje medio, correctamente las preguntas. '
            }
        ],
        // ALTA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel fue casi total. De estos que completaron el nivel, realizando por lo mucho un intento, respondieron en un  porcentaje casi total, correctamente las preguntas. '
            },
            // MEDIA
            {
                resultado: 2,
                conclusion: 'El número de niños que completaron el nivel fue casi total. De estos que completaron el nivel, realizando mas de un INTENTO, respondieron en un  porcentaje casi total, correctamente las preguntas. '
            },
            // ALTA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel fue casi total. De estos que completaron el nivel, realizando muchos intento, respondieron en un  porcentaje casi total, correctamente las preguntas. '
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
            conclusion: 'Usando una historia previa, el niño obtiene una eficiencia de meta baja en los niveles completados, lo que indica que el porcentaje de respuestas correctas  es bajo con respecto al total de preguntas en el nivel. Ademas de eso, se obtiene un rendimiento bajo en eficiencia de meta, que en otras palabras es cuantas preguntas respondes por minuto.'
        },
        // MEDIA
        {
            resultado: 0,
            conclusion: 'Usando una historia previa, el niño una eficiencia de meta baja en los niveles completados, lo que indica que el porcentaje de respuestas correctas  es bajo con respecto al total de preguntas en el nivel. Sin embargo, obtiene un porcentaje medio favorable en eficiencia de meta, que en otras palabras es cuantas preguntas respondes por minuto.'
        },
        // ALTA
        {
            resultado: 1,
            conclusion: 'Usando una historia previa, el niño una eficiencia de meta baja en los niveles completados, lo que indica que el porcentaje de respuestas correctas  es bajo con respecto al total de preguntas en el nivel. Sin embargo, obtiene un porcentaje alto en eficiencia de meta, que en otras palabras responde varias preguntas por minutos.'
        }
    ],
    // MEDIA
    [
        // ACCESIBILIDAD POR TIEMPO
        // BAJA
        {
            resultado: 0,
            conclusion: 'Usando una historia previa, el niño obtiene una eficiencia de meta media en los niveles completados, lo que indica que el porcentaje de respuestas correctas esta rondando a la mitad con respecto al total de preguntas en el nivel. Sin embargo, obtiene un porcentaje bajo en eficiencia de meta, lo que indica que respondió muy pocas preguntas por minutos.'
        },
        // MEDIA
        {
            resultado: 1,
            conclusion: 'Usando una historia previa, el niño obtiene una eficiencia de meta media en los niveles completados, lo que indica que el porcentaje de respuestas correctas esta rondando a la mitad con respecto al total de preguntas en el nivel. Además, obtiene un porcentaje medio en eficiencia de meta, lo que indica que respondió mas o menos la mitad o mas preguntas por minutos.'
        },
        // ALTA
        {
            resultado: 2,
            conclusion: 'Usando una historia previa, el niño obtiene una eficiencia de meta media en los niveles completados, lo que indica que el porcentaje de respuestas correctas esta rondando a la mitad con respecto al total de preguntas en el nivel.Además, obtiene un porcentaje alto en eficiencia de meta, lo que indica que respondió muchas preguntas por minutos.'
        }
    ],
    // ALTA
    [
        // ACCESIBILIDAD POR TIEMPO
        // BAJA
        {
            resultado: 1,
            conclusion: 'Usando una historia previa, el niño obtiene una eficiencia de meta alta en los niveles completados, lo que indica que el porcentaje de respuestas correctas es mas de la mitad con respecto al total de preguntas en el nivel. Sin embargo, obtiene un porcentaje bajo en eficiencia de meta, lo que indica que respondió muy pocas preguntas por minutos.'
        },
        // MEDIA
        {
            resultado: 2,
            conclusion: 'Usando una historia previa, el niño obtiene una eficiencia de meta alta en los niveles completados, lo que indica que el porcentaje de respuestas correctas es mas de la mitad con respecto al total de preguntas en el nivel. Además, obtiene un porcentaje medio en eficiencia de meta, lo que indica que respondió casi la mitad o mas de preguntas por minutos.'
        },
        // ALTA
        {
            resultado: 2,
            conclusion: 'Usando una historia previa, el niño obtiene una eficiencia de meta alta en los niveles completados, lo que indica que el porcentaje de respuestas correctas es mas de la mitad con respecto al total de preguntas en el nivel. Además, obtiene un porcentaje alto en eficiencia de meta, lo que indica que respondió muchas preguntas por minutos.'
        }
    ]
]

REGLAS_SATISFACCION = [
    // PREFERENCIAS DE USO CON RESPECTO AL NIVEL VS EL RESTO DE NIVELES
    // BAJA
    {
        resultado: 0,
        conclusion: 'Los niños no prefieren este nivel, como prueba de ello, muchos de ellos lo abandonaron, no lo completaron'
    },
    // MEDIA
    {
        resultado: 1,
        conclusion: 'Los niños no tienen preferencia mayoritaria por otros niveles, es practicamente igual al de este nivel,  la prueba esta en que muchos de ellos lo abandonaron no lo completaron al igual que los otros.'
    },
    // ALTA
    {
        resultado: 2,
        conclusion: 'Los niños prefieren este nivel,sobre los otros, como prueba de ello, muchos de ellos lo completaron..'
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
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la métrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
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
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
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
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
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
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
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
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
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
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, cumple medianamente con la metrica de jugabilidad, por que el factor de Efectividad es medio'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esta videojuego, no cumple con la metrica de jugabilidad'
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