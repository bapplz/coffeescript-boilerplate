(function() {

  this.Hello = (function() {

    function Hello() {}

    Hello.prototype.hello = function() {
      return "Hello World!";
    };

    return Hello;

  })();

}).call(this);
