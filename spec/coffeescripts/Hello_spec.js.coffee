describe "EventReceiver", ->
  beforeEach ->
    @hello = new Hello()

  it "should return HelloWorld!", ->
    expect(@hello.hello()).toBe("Hello world!")
