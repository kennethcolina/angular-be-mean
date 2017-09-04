angular
  .module("User", [])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
        .when("/users", {
          templateUrl: "views/users.html",
          controller: "UserController",
          controllerAs: "User"
        })
        .when("/users/:id", {
          templateUrl: "views/users-details.html",
          controller: "UserDetailsController",
          controllerAs: "UserDetailsController"
        })
        .when("users-email/:email", {
          templateUrl: "views/users-details-email.html",
          controller: "UserDetailsController",
          controllerAs: "UserDetails"
        });
    }
  ])
  .controller("UserController", UserController)
  .controller("UserDetailsController", UserDetailsController);

function UserController() {
  var vm = this;
  vm.titulo = "Be MEAN";
  vm.editing = false;

  vm.users = [
    {
      name: "Kenneth",
      email: "kcolina@sistemas.ufla.br",
      idade: 21
    },
    {
      name: "AKenneth Santos",
      email: "kenneth.santos@gt4w.com.br",
      idade: 19
    },
    {
      name: "BKenneth Colina",
      email: "kennethcolina@gmail.com",
      idade: 23
    }
  ];

  vm.addUser = function(user) {
    vm.users.push(user);
    vm.form = {};
  };

  vm.userOrderBy = function(th) {
    vm.predicate = th;
  };

  vm.removeSplice = function(users) {
    var selecionados = [];
    var removidos = 0;

    users.forEach(function(el, index) {
      if (el.selecionado) selecionados.push(index);
    });

    var removidos = 0;

    selecionados.forEach(function(index) {
      vm.users.splice(index - removidos++, 1);
    });
  };

  vm.remove = function(users) {
    vm.users = users.filter(el => {
      return !el.selecionado;
    });
  };

  vm.edit = function(user, index) {
    vm.form = angular.copy(user);
    vm.form.index = index;
    vm.editing = true;
  };

  vm.save = function(user) {
    var users = vm.users.map(function(el, i) {
      if (i === user.index) {
        delete user.index;
        console.log(user, "aqui");
        return user;
      }
      return el;
    });
    vm.users = users;
    vm.editing = false;
  };
}

function UserDetailsController($routeParams) {
  var vm = this;
  vm.routeParams = $routeParams;

  vm.titulo = "Be MEAN";
  vm.editing = false;

  vm.users = [
    {
      name: "Kenneth",
      email: "kcolina@sistemas.ufla.br",
      idade: 21
    },
    {
      name: "AKenneth Santos",
      email: "kenneth.santos@gt4w.com.br",
      idade: 19
    },
    {
      name: "BKenneth Colina",
      email: "kennethcolina@gmail.com",
      idade: 23
    }
  ];

  vm.addUser = function(user) {
    vm.users.push(user);
    vm.form = {};
  };

  vm.getUserByEmail = function() {
    return vm.users.filter(el => {
      return el.email === vm.routeParams.email;
    });
  };

  vm.userOrderBy = function(th) {
    vm.predicate = th;
  };

  vm.removeSplice = function(users) {
    var selecionados = [];
    var removidos = 0;

    users.forEach(function(el, index) {
      if (el.selecionado) selecionados.push(index);
    });

    var removidos = 0;

    selecionados.forEach(function(index) {
      vm.users.splice(index - removidos++, 1);
    });
  };

  vm.remove = function(users) {
    vm.users = users.filter(el => {
      return !el.selecionado;
    });
  };

  vm.edit = function(user, index) {
    vm.form = angular.copy(user);
    vm.form.index = index;
    vm.editing = true;
  };

  vm.save = function(user) {
    var users = vm.users.map(function(el, i) {
      if (i === user.index) {
        delete user.index;
        return user;
      }
      return el;
    });
    vm.users = users;
    vm.editing = false;
  };
}
