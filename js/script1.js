(function (window) {
    var aliGreeter = {};
    aliGreeter.name = "Yaakov";
    var greeting = "Hello ";
    aliGreeter.sayHello = function () {
      console.log(greeting + aliGreeter.name);
    }
  
    window.aliGreeter = aliGreeter;
  
  })(window);