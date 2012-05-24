(function() {

  describe("EventReceiver", function() {
    beforeEach(function() {
      return this.hello = new Hello();
    });
    return it("should return HelloWorld!", function() {
      return expect(this.hello.hello()).toBe("Hello world!");
    });
  });

}).call(this);
