(function (window) {
    var MohsinGreeter = {};
    MohsinGreeter.name = "John";
    var greeting = "Hi ";
    MohsinGreeter.sayHi = function () {
      console.log(greeting + MohsinGreeter.name);
    }
  
    window.MohsinGreeter = MohsinGreeter;
  
  })(window);