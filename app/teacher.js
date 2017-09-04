angular.module("Teacher", [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/teachers', {
			templateUrl: 'views/professores.html',
			controller: 'TeacherController',
			controllerAs: 'Teacher'
		})
	}])
	.controller("TeacherController", TeacherController);

function TeacherController() {
  var vm = this;
  var date = new Date("October 13, 2014 11:13:00");
  vm.titulo = "Professores";
  vm.aulas = [
	{
	  aula: 1,
	  horario: date,
	  sala: "26"
	},
	{
	  aula: 2,
	  horario: date,
	  sala: "24"
	},
	{
	  aula: 3,
	  horario: date,
	  sala: "25"
	}
  ];
}
