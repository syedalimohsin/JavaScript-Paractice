(function (window) {
    var ALiGreeter = {};
    ALiGreeter.name = "Yaakov";
    var greeting = "Hello ";
    ALiGreeter.sayHello = function () {
      console.log(greeting + ALiGreeter.name);
    }
  
    window.AliGreeter = ALiGreeter;
  
  })(window);