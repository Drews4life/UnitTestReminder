const expect = require("expect");
const rewire = require("rewire");

//used as require, it has own two methods
var app = rewire("./app.js");

describe("App", () => {

    var db = {
        saveUser: expect.createSpy()
    };

    //replacing var from app.js with db created here
    app.__set__("db", db);

    it("Should call spy", (done) => {

        var spy = expect.createSpy();

        spy("Drews", 21);

        expect(spy).toHaveBeenCalledWith("Drews", 21);

        done();
    });

    it("Should call save user with user object", (done) => {

        var email = "smth@gg.com";
        var password = "getpranked";

        app.handleSignUp();
        expect(db.saveUser).toHaveBeenCalled({email, password});
        done();

    });
});