app.controller('reglasController', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
    
    $scope.valoraciones = ['Baja', 'Media', 'Alta', 'Inconsistente']

    $scope.reglas_eficiencia;
    $scope.reglas_efectividad;
    $scope.reglas_flexibilidad;

    
    // for(let x = 0; x <= 2; x++) {
    //     for(let y = 0; y <= 2; y++) {
    //         for(let z = 0; z <= 2; z++) {
    //             for(let a = 0; a <= 2; a++) {
    //                 for(let b = 0; b <= 2; b++) {
    //                     $scope.reglas_eficiencia_indexs.push([x,y,z,a,b]);
    //                 }
    //             }
    //         }
    //     }
    // }

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