var vc = require("../../../src/part-1/value-checker/value-checker.js");
var expect = require("chai").expect;

describe("Test the module", function() {
    "use strict";

    it("Should return a string 'You send me an object' " +
        "when check is called with an array", function(done) {
        var result = vc.check([]);
        expect(result).eql("You send me an object");
        done();
    });

    it("Should return a string 'You send me an object' " +
        "when check is called with an object", function(done) {
        var result = vc.check({});
        expect(result).eql("You send me an object");
        done();
    });

    it("Should return a string 'You send me a primitive' " +
        "when check is called with a number", function(done) {
        var result = vc.check(12);
        expect(result).eql("You send me a primitive");
        done();
    });

    it("Should return a string 'You send me a primitive' " +
        "when check is called with a booleean", function(done) {
        var result = vc.check(true);
        expect(result).eql("You send me a primitive");
        done();
    });

    it("Should return a string 'You send me a primitive' " +
        "when check is called with a string", function(done) {
        var result = vc.check("this is a string");
        expect(result).eql("You send me a primitive");
        done();
    });

    it("Should return a string 'You send me an undefined value' " +
        "when check is called with no parameter", function(done) {
        var result = vc.check();
        expect(result).eql("You send me an undefined value");
        done();
    });

    it("Should return a string 'You send me a function' " +
        "when check is called with a function", function(done) {
        var result = vc.check(function() {});
        expect(result).eql("You send me a function");
        done();
    });

    it("Should return a string 'You send me an object' " +
        "when check is called with null", function(done) {
        var result = vc.check(null);
        expect(result).eql("You send me an object");
        done();
    });

});
