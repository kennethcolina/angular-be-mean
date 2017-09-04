angular.module("Curso", [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/cursos', {
			templateUrl: 'views/cursos.html',
			controller: 'CursoController',
			controllerAs: 'Curso'
		})
	}])
	.controller("CursoController", CursoController);

function CursoController() {
  var vm = this;
  vm.titulo = "Be MEAN - CURSOS";
  vm.cursos = [{
	  name: "NODE JS",
	  teacher: "Kenneth Colina",
	  carga: 20
	},
	{
	  name: "RAILS",
	  teacher: "Kenneth Santos",
	  carga: 15
	},
	{
	  name: "VUE.JS",
	  teacher: "Matheus Ferreira",
	  carga: 25
	}
  ];

  vm.addCurso = function() {
	vm.cursos.push({
	  name: "AngularJS",
	  teacher: "Renan",
	  carga: 30
	});
  };
}
