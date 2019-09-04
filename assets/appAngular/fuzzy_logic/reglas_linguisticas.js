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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    //posición 12 en el excel
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA    
                    //posición 13 en el excel
                    {
                        resultado: 0,
                        conclusion: eficiencia_erroneas.cbim
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion:eficiencia_erroneas.cbim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: eficiencia_erroneas.cbim
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
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
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio usaron muy poco tiempo para completar el nivel, con esto, el sistema arroja una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Sin embargo, la eficiencia de respuestas correctas tambien es baja y la eficiencia de usuarios con dificultad en el nivel es alta, que lo que trata de decir que a pesar de responder de usar poco tiempo para responder, las respuestas no fueron las correctas.Una razón puede ser porque la mayoría de juagdores respondieron de manera rapida sin analaizar y pensar la pregunta.'
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwb
                    },
                    // MEDIA
                    {
                        resultado: 1,
                        conclusion: 'Los niños en promedio usaron muy poco tiempo para completar el nivel, que esta perfecto o es lo que se esperaría que pasara. Sin embargo, la eficiencia de respuestas correctas tambien es baja mientras que la eficiencia de usuarios con dificultad en el nivel es media, que lo que trata de decir que a pesar de responder de usar poco tiempo para responder, las respuestas no fueron las correctas. La razón por la que se da podría ser porque la mayoría de juagdores respondieron de manera rapida sin analaizar y pensar la pregunta ó tambien porque el nivel de dificultad en las preguntas es media.'
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwa
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion:'Resultado inconsistente debido a que si se obtuvo una eficiencia baja en cuanto respuestas correctas, no tendría sentido que el porcentaje de jugadores que completaron el nivel sin dificultad sea alto.'
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawm
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawa
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio usaron poco tiempo para completar el nivel, esto me arrojo una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Además, la eficiencia de respuesta correcta es media y la eficiencia relativa a la dificultad en el nivel es alta, se puede concluir que  el promedio de preguntas respondidas por minutos correctamente no llego a ser en un porcentaje alto por la difucltad presentada en las preguntas'
                    }
                ],
                // MEDIA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwb
                    },
                    // MEDIA
                    {
                        resultado: 1,
                        conclusion: 'Los niños en promedio usaron poco tiempo para completar el nivel, esto me arrojo una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Además, la eficiencia de respuesta correcta es media y la eficiencia relativa a la dificultad en el nivel tambien es media, se puede concluir que  el promedio de preguntas respondidas por minutos correctamente es proporcional a el nivel de  difucultad presentada en las preguntas.'
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwa
                    }
                ],
                // ALTA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio usaron poco tiempo para completar el nivel, esto me arrojo una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Además, la eficiencia de respuesta correcta es media y la eficiencia relativa a la dificultad en el nivel es baja, se puede concluir que  el promedio de preguntas respondidas por minutos incorrectamente se debió a que el estudiante se apresuró por responder, y esto provocó los errores.'
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawm
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawa
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
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA
                    {
                        resultado: 2,
                        conclusion: 'El nivel a pesar de presentar una eficiencia alta con respecto a la dificultad, en promedio los niños usaron un tiempo relativamente corto para culminar el nivel. Además de los niveles completados la eficiencia obtenidas respondiendo correctamente las preguntas es bastante alto, lo cuál deja bien parado a este nivel.'
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwb
                    },
                    // MEDIA
                    {
                        resultado: 1,
                        conclusion: 'El nivel a pesar de presentar una eficiencia media con respecto a la dificultad, en promedio los niños usaron un tiempo relativamente corto para culminar el nivel. Además de los niveles completados la eficiencia obtenidas respondiendo correctamente las preguntas es bastante alto,dejando a jugadores con buenos puntajes.'
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwa
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 2,
                        conclusion: 'La eficiencia de respuestas correctas medida en este nivel arrojan resultados altos, lo cual indica que los niños respondieron un buen número de preguntas por mínuto. Esto se puede ver tambien en la eficiencia de  tiempo de meta, a pesar de que es baja, es el valor al cual todo juego debería aspirar a obtener ya que lo que esta diciendo es que en promedio los niños usaron muy poco tiempo para completar el nivel. Asi mismo, esto me permite obeter un porcentaje alto en jugadores con buenos puntajes y disminuyen los estudiantes que pudieran tener dificultad en el nivel '
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawm
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawa
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
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
                    //posición 11 en el excel
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    //posición 12 en el excel
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA    
                    //posición 13 en el excel
                    {
                        resultado: 0,
                        conclusion: eficiencia_erroneas.cbim
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion:eficiencia_erroneas.cbim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: eficiencia_erroneas.cbim
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
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
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio usaron muy poco tiempo para completar el nivel, con esto, el sistema arroja una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Sin embargo, la eficiencia de respuestas correctas tambien es baja y la eficiencia de usuarios con dificultad en el nivel es alta, que lo que trata de decir que a pesar de responder de usar poco tiempo para responder, las respuestas no fueron las correctas.Una razón puede ser porque la mayoría de juagdores respondieron de manera rapida sin analaizar y pensar la pregunta.'
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwb
                    },
                    // MEDIA
                    {
                        resultado: 1,
                        conclusion: 'Los niños en promedio usaron muy poco tiempo para completar el nivel, que esta perfecto o es lo que se esperaría que pasara. Sin embargo, la eficiencia de respuestas correctas tambien es baja mientras que la eficiencia de usuarios con dificultad en el nivel es media, que lo que trata de decir que a pesar de responder de usar poco tiempo para responder, las respuestas no fueron las correctas. La razón por la que se da podría ser porque la mayoría de juagdores respondieron de manera rapida sin analaizar y pensar la pregunta ó tambien porque el nivel de dificultad en las preguntas es media.'
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwa
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion:'Resultado inconsistente debido a que si se obtuvo una eficiencia baja en cuanto respuestas correctas, no tendría sentido que el porcentaje de jugadores que completaron el nivel sin dificultad sea alto.'
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawm
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawa
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio usaron poco tiempo para completar el nivel, esto me arrojo una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Además, la eficiencia de respuesta correcta es media y la eficiencia relativa a la dificultad en el nivel es alta, se puede concluir que  el promedio de preguntas respondidas por minutos correctamente no llego a ser en un porcentaje alto por la difucltad presentada en las preguntas'
                    }
                ],
                // MEDIA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwb
                    },
                    // MEDIA
                    {
                        resultado: 1,
                        conclusion: 'Los niños en promedio usaron un tiempo que no esta ni muy alto ni muy bajo para completar el nivel. Además, la eficiencia de respuesta correcta es media y la eficiencia relativa a la dificultad en el nivel tambien es media; Bajo estas características se puede concluir que  el promedio de preguntas respondidas por minutos correctamente es proporcional a el nivel de  difucultad presentada en las preguntas y por tal razón solo una media tuvieron buenos resultados y la otra media dificultad para terminarlo'
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwa
                    }
                ],
                // ALTA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio usaron poco tiempo para completar el nivel, esto me arrojo una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Además, la eficiencia de respuesta correcta es media y la eficiencia relativa a la dificultad en el nivel es baja, se puede concluir que  el promedio de preguntas respondidas por minutos incorrectamente se debió a que el estudiante se apresuró por responder, y esto provocó los errores.'
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawm
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawa
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
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA
                    {
                        resultado: 2,
                        conclusion: 'El nivel a pesar de presentar una eficiencia alta con respecto a la dificultad, en promedio los niños usaron un tiempo relativamente corto para culminar el nivel. Además de los niveles completados la eficiencia obtenidas respondiendo correctamente las preguntas es bastante alto, lo cuál deja bien parado a este nivel.'
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwb
                    },
                    // MEDIA
                    {
                        resultado: 1,
                        conclusion: 'El nivel a pesar de presentar una eficiencia media con respecto a la dificultad, en promedio los niños usaron un tiempo relativamente corto para culminar el nivel. Además de los niveles completados la eficiencia obtenidas respondiendo correctamente las preguntas es bastante alto,dejando a jugadores con buenos puntajes.'
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwa
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 2,
                        conclusion: 'La eficiencia de respuestas correctas medida en este nivel arrojan resultados altos, lo cual indica que los niños respondieron un buen número de preguntas en 1 mínuto. Esto se puede ver tambien en la eficiencia de  tiempo de meta, a pesar de que es baja, es el valor al cual todo juego debería aspirar a obtener ya que lo que esta diciendo es que en promedio los niños usaron muy poco tiempo para completar el nivel. Asi mismo, esto me permite obeter un porcentaje alto en jugadores con buenos puntajes y disminuyen los estudiantes que pudieran tener dificultad en el nivel '
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawm
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawa
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
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
    //ALTA
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    //posición 12 en el excel
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA    
                    //posición 13 en el excel
                    {
                        resultado: 0,
                        conclusion: eficiencia_erroneas.cbim
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion:eficiencia_erroneas.cbim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: eficiencia_erroneas.cbim
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cbim
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
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio usaron tiempos prolongados para completar el nivel, con esto, el sistema arroja una eficiencia alta con respecto al tiempo de meta, que no es preferible que pase. Por otro lado, la eficiencia de respuestas correctas es baja y la eficiencia de usuarios con dificultad en el nivel es alta, que al final lo que trata de decir que a pesar de usar mucho tiempo para responder, las respuestas no fueron las correctas.La razón puede ser porque el nivel de dificultad de las preguntas eran complejas.'
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwb
                    },
                    // MEDIA
                    {
                        resultado: 1,
                        conclusion: 'Los niños en promedio usaron tiempos prolongados para completar el nivel, con esto, el sistema arroja una eficiencia alta con respecto al tiempo de meta, que no es preferible que pase. Por otro lado, la eficiencia de respuestas correctas es media y la eficiencia de usuarios con dificultad en el nivel es alta, que al final lo que trata de decir que a pesar de usar mucho tiempo para responder, las respuestas no fueron las correctas.La razón puede ser porque el nivel de dificultad de las preguntas eran medianamente complejas..'
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwa
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion:'Resultado inconsistente debido a que si se obtuvo una eficiencia baja en cuanto respuestas correctas, no tendría sentido que el porcentaje de jugadores que completaron el nivel sin dificultad sea alto.'
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawm
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawa
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmib
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio usaron poco tiempo para completar el nivel, esto me arrojo una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Además, la eficiencia de respuesta correcta es media y la eficiencia relativa a la dificultad en el nivel es alta, se puede concluir que  el promedio de preguntas respondidas por minutos correctamente no llego a ser en un porcentaje alto por la difucltad presentada en las preguntas'
                    }
                ],
                // MEDIA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwb
                    },
                    // MEDIA
                    {
                        resultado: 1,
                        conclusion: 'Los niños en promedio usaron poco tiempo para completar el nivel, esto me arrojo una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Además, la eficiencia de respuesta correcta es media y la eficiencia relativa a la dificultad en el nivel tambien es media, se puede concluir que  el promedio de preguntas respondidas por minutos correctamente es proporcional a el nivel de  difucultad presentada en las preguntas.'
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwa
                    }
                ],
                // ALTA
                [
                    // EFICIENCIA RELATIVA A LOS JUGADORES CON DIFICULTADES EN EL NIVEL
                    // BAJA
                    {
                        resultado: 0,
                        conclusion: 'Los niños en promedio usaron poco tiempo para completar el nivel, esto me arrojo una eficiencia baja con respecto al tiempo de meta, que esta perfecto o es lo que se esperaría que pasara. Además, la eficiencia de respuesta correcta es media y la eficiencia relativa a la dificultad en el nivel es baja, se puede concluir que  el promedio de preguntas respondidas por minutos incorrectamente se debió a que el estudiante se apresuró por responder, y esto provocó los errores.'
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawm
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawa
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
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.cmia
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwb
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bbwm
                    },
                    // ALTA
                    {
                        resultado: 1,
                        conclusion: 'El nivel presenta una eficiencia alta con respecto a la dificultad y en promedio los niños usaron un tiempo prolongado para culminar el nivel. Además tomando  los niveles completados la eficiencia obtenida con respecto a responder correctamente varias oreguntas por minutos es bastante alto, lo cuál compensa un poco el tiempo usado.'
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwb
                    },
                    // MEDIA
                    {
                        resultado: 1,
                        conclusion: 'El nivel presenta una eficiencia media con respecto a la dificultad y en promedio los niños usaron un tiempo prolongado para culminar el nivel. Además de los niveles completados la eficiencia obtenidas respondiendo varias preguntas correctamente por minuto es bastante alto, lo cual compensa el tiempo empleado.'
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bmwa
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 2,
                        conclusion: 'La eficiencia de respuestas correctas medida en este nivel arrojan resultados altos, lo cual indica que los niños respondieron un buen número de preguntas en 1 mínuto. Esto se puede ver tambien en la eficiencia de  tiempo de meta, a pesar de que es baja, es el valor al cual todo juego debería aspirar a obtener ya que lo que esta diciendo es que en promedio los niños usaron muy poco tiempo para completar el nivel. Asi mismo, esto me permite obeter un porcentaje alto en jugadores con buenos puntajes y disminuyen los estudiantes que pudieran tener dificultad en el nivel '
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawm
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.bawa
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
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    }
                ],
                // MEDIA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    }
                ],
                // ALTA
                [
                    // BAJA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // MEDIA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
                    },
                    // ALTA
                    {
                        resultado: 3,
                        conclusion: eficiencia_erroneas.caim
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
                conclusion: 'El numero de niños que completaron el nivel fue muy bajo, lo que quiere decir que hubo muchos abandonos. De los que completaron el nivel, al menos un intento tambien fueron muy pocos los que contestaron correctamente.'
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: 'El numero de niños que completaron el nivel fue muy bajo, lo que quiere decir que hubo muchos abandonos. De los que completaron el nivel, realizando mas de un intento, muchos respondieron incorrectamente.'
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
                conclusion: 'El numero de niños que completaron ronda mas o menos la mitad del total. De los que completaron el nivel, realizando al menos un intento, respondieron mayormente inncorrecto.'
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: 'El numero de niños que completaron ronda mas o menos la mitad del total. De los que completaron el nivel, realizando mas de un intento, respondieron mayormente inncorrecto.'
            },
            // ALTA
            {
                resultado: 0,
                conclusion: 'El numero de niños que completaron ronda mas o menos la mitad del total. De los que completaron el nivel, realizando muchos intentos, respondieron mayormente inncorrecto.'
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
                conclusion: 'El número de niños que completaron el nivel fue casi total o total. Estos, realizando por lo mucho 1 intento, respondieron medianamente correcta las preguntas. '
            },
            // MEDIA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel fue casi total o total. De estos, realizando mas de 1 intento, respondieron medianamente correcta las preguntas. '
            },
            // ALTA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel fue casi, o  total. De estos, realizando muchos intento, respondieron medianamente correcta las preguntas. '
            }
        ]
    ],
    //ALTA
    [
        // COMPLETITUD DE LA META
        // BAJA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 0,
                conclusion: 'El número de niños que completaron el nivel es muy poco con respecto al total. De los que completaron el nivel, realizando muy pocos intentos, respondieron en un gran porcentaje correctamente las preguntas. '
            },
            // MEDIA
            {
                resultado: 0,
                conclusion: 'El número de niños que completaron el nivel fue muy poco con respecto al total. Sin embargo, estos que completaron el nivel, realizando  mas de un intento, respondieron en  gran porcentaje correctamente las preguntas. '
            },
            // ALTA
            {
                resultado: 0,
                conclusion: 'El número de niños que completaron el nivel fue muy poco con respecto al total. Sin embargo, estos que completaron el nivel, realizando muchos intento, respondieron en un gran porcentaje correctamente las preguntas. '
            }
        ],
        // MEDIA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 2,
                conclusion: 'El número de niños que completaron el nivel ronda mas o menos por la mitad del total. De estos que completaron el nivel, realizando por lo mucho un intento, respondieron en un  porcentaje medio, correctamente las preguntas. '
            },
            // MEDIA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel ronda mas o menos por la mitad del total. De estos que completaron el nivel, realizando mas de un INTENTO, respondieron en un  porcentaje medio, correctamente las preguntas. '
            },
            // ALTA
            {
                resultado: 1,
                conclusion: 'El número de niños que completaron el nivel ronda mas o menos por la mitad del total. De estos que completaron el nivel, realizando muchos intento, respondieron en un  porcentaje medio, correctamente las preguntas. '
            }
        ],
        // ALTA
        [
            // FRECUENCIA DE INTENTOS PARA LLEGAR A LA META
            // BAJA
            {
                resultado: 2,
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
            resultado: 1,
            conclusion: 'Usando el escenario actual, se puede constatar que que los niños en promedio contestan menos preguntas por minutos que si es estuvieran en los otros escenarios, a pesar de que usaron menos tiempos en total que en los demas.'
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
                    conclusion: 'Bajo todas las reglas anteriores se determinó que este nivel, no cumple con la métrica de jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esteste nivel, no cumple con la metrica de jugabilidad'
                },
                // ALTA
                {
                    resultado: 0,
                    conclusion: 'Bajo todas las reglas anteriores se determinó que esteste nivel, no cumple con la metrica de jugabilidad'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ]
        ],
        // INCONSISTENTE
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                    conclusion: 'Bajo todas las reglas anteriores se determinó que este nivel, no cumple con la metrica de jugabilidad'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ]
        ],
        // INCONSISTENTE
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, no cumple con la metrica de Jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, no cumple con la metrica de Jugabilidad'
                },
                // ALTA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente con la metrica de Jugabilidad'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 0,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, no cumple con la metrica de Jugabilidad'
                },
                // MEDIA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente con la metrica de Jugabilidad'
                },
                // ALTA
                {
                    resultado: 2,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple con la metrica de Jugabilidad'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente con la metrica de Jugabilidad'
                },
                // MEDIA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente con la metrica de Jugabilidad'
                },
                // ALTA
                {
                    resultado: 2,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple con la metrica de Jugabilidad'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente con la metrica de Jugabilidad'
                },
                // MEDIA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente con la metrica de Jugabilidad'
                },
                // ALTA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente con la metrica de Jugabilidad'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente con la metrica de Jugabilidad'
                },
                // MEDIA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente con la metrica de Jugabilidad'
                },
                // ALTA
                {
                    resultado: 2,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple con la metrica de Jugabilidad'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente la metrica de Jugabilidad'
                },
                // MEDIA
                {
                    resultado: 2,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple con la metrica de Jugabilidad'
                },
                // ALTA
                {
                    resultado: 2,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple con la metrica de Jugabilidad'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, no cumple la metrica de Jugabilidad'
                },
                // MEDIA
                {
                    resultado: 0,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, no cumple la metrica de Jugabilidad'
                },
                // ALTA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente la metrica de Jugabilidad'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente la metrica de Jugabilidad'
                },
                // MEDIA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente la metrica de Jugabilidad'
                },
                // ALTA
                {
                    resultado: 2,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple con las metrica de Jugabilidad'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 1,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple medianamente la metrica de Jugabilidad'
                },
                // MEDIA
                {
                    resultado: 2,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple con las metrica de Jugabilidad'
                },
                // ALTA
                {
                    resultado: 2,
                    conclusion: 'Bajo todos los parametros anteriores, se concluye que el nivel actual, cumple con las metrica de Jugabilidad'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ]
        ],
        // INCONSISTENTE
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
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
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
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
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
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
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                },
                // INCOSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar una valoración si existen incosistencias'
                }
            ]
        ],
        // INCONSISTENTE
        [
            // FLEXIBILIDAD
            // BAJA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // MEDIA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // ALTA
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ],
            // INCONSISTENTE
            [
                // SATISFACCION
                // BAJA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // MEDIA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // ALTA
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                },
                // INCONSISTENTE
                {
                    resultado: 3,
                    conclusion: 'No se puede dar un valoración si hay inconsistencias'
                }
            ]
        ]
    ]
]


// const fs = require('fs');



// REGLAS_JUGABILIDAD.forEach(
//     (meta, x) => {
//         meta.forEach(
//             (e_res_corr, y) => {
//                 e_res_corr.forEach(
//                     (e_res_incorr, z) => {
//                         e_res_incorr.forEach(
//                             (e_rel_jug, a) => {
//                                 fs.appendFileSync(
//                                     'jugabilidad.txt',
//                                     `
// INSERT INTO regla (
// valoracion,
// conclusion,
// codigo,
// id_caracteristica
// )
// VALUES (
// ${e_rel_jug.resultado},
// '${e_rel_jug.conclusion}',
// '${x}${y}${z}${a}',
// 6
// );
//                                     `
//                                 )
//                             }
//                         )
//                     }
//                 )
//             }
//         )
//     }
// )