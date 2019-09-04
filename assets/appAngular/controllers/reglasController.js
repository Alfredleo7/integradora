app.controller('reglasController', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
    
    $scope.valoraciones = ['Baja', 'Media', 'Alta', 'Inconsistente']

    $scope.metricas_eficiencia = [
        'Tiempo de meta',
        'Eficiencia de meta por respuestas correctas',
        'Eficiencia de metas por respuestas incorrectas',
        'Eficiencia relativa a los mejores resultados de los jugadores',
        'Eficiencia relativa a los jugadores con dificultades en el nivel'
    ]
    $scope.metricas_efectividad = [
        'Efectividad en la meta',
        'Completitud en la meta',
        'Frecuencia de intentos para llegar a la meta'
    ];
    $scope.metricas_flexibilidad = [
        'Flexibilidad por metas',
        'Flexibilidad por tiempo'
    ];
    $scope.metricas_satisfaccion = [
        'Preferencias de uso con respecto del nivel vs el resto de niveles'
    ];
    $scope.metricas_jugabilidad = [
        'Eficiencia',
        'Efectividad',
        'Flexibilidad',
        'Satisfacción'
    ]

    TodoService.getReglasLinguisticas(1).then(function(response) {
        $scope.reglas_eficiencia = response;
        $scope.reglas_eficiencia.forEach(
            regla => {
                regla.codigo = regla.codigo.split('').map(caracter=> Number(caracter))
                regla.valoracion_descrip = $scope.valoraciones[regla.valoracion];
                regla.valoracion_descrip_prev = $scope.valoraciones[regla.valoracion];
                regla.conclusion_prev = regla.conclusion;
                regla.editing = false;
            }
            
        )
    });
    TodoService.getReglasLinguisticas(2).then(function(response) {
        $scope.reglas_efectividad = response;
        $scope.reglas_efectividad.forEach(
            regla => {
                regla.codigo = regla.codigo.split('').map(caracter=> Number(caracter))
                regla.valoracion_descrip = $scope.valoraciones[regla.valoracion];
                regla.valoracion_descrip_prev = $scope.valoraciones[regla.valoracion];
                regla.conclusion_prev = regla.conclusion;
                regla.editing = false;
            }
            
        )
    });
    TodoService.getReglasLinguisticas(3).then(function(response) {
        $scope.reglas_flexibilidad = response;
        $scope.reglas_flexibilidad.forEach(
            regla => {
                regla.codigo = regla.codigo.split('').map(caracter=> Number(caracter))
                regla.valoracion_descrip = $scope.valoraciones[regla.valoracion];
                regla.valoracion_descrip_prev = $scope.valoraciones[regla.valoracion];
                regla.conclusion_prev = regla.conclusion;
                regla.editing = false;
            }
            
        )
    });
    TodoService.getReglasLinguisticas(4).then(function(response) {
        $scope.reglas_satisfaccion = response;
        $scope.reglas_satisfaccion.forEach(
            regla => {
                regla.codigo = regla.codigo.split('').map(caracter=> Number(caracter))
                regla.valoracion_descrip = $scope.valoraciones[regla.valoracion];
                regla.valoracion_descrip_prev = $scope.valoraciones[regla.valoracion];
                regla.conclusion_prev = regla.conclusion;
                regla.editing = false;
            }
            
        )
    });
    TodoService.getReglasLinguisticas(6).then(function(response) {
        $scope.reglas_jugabilidad = response;
        $scope.reglas_jugabilidad.forEach(
            regla => {
                regla.codigo = regla.codigo.split('').map(caracter=> Number(caracter))
                regla.valoracion_descrip = $scope.valoraciones[regla.valoracion];
                regla.valoracion_descrip_prev = $scope.valoraciones[regla.valoracion];
                regla.conclusion_prev = regla.conclusion;
                regla.editing = false;
            }
            
        )
    });

    $scope.actualizar_regla = (regla) => {
        TodoService.actualizar_regla(regla.id, $scope.valoraciones.indexOf(regla.valoracion_descrip_prev), regla.conclusion_prev).then(function(response) {
            regla.valoracion_descrip = regla.valoracion_descrip_prev;
            regla.conclusion = regla.conclusion_prev
            regla.editing = false;
        })
    }


}])