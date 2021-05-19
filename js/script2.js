(function (window) {
    var mohsinGreeter = {};
    mohsinGreeter.name = "John";
    var greeting = "Hi ";
    mohsinGreeter.sayHi = function () {
      console.log(greeting + mohsinGreeter.name);
    }
  
    window.mohsinGreeter = mohsinGreeter;
  
  })(window);