(function() {

  this.Hello = (function() {

    function Hello() {}

    Hello.prototype.hello = function() {
      return "Hello world!";
    };

    return Hello;

  })();

}).call(this);
