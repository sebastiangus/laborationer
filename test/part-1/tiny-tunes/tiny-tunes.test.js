"use strict";

var t = require("../../../src/part-1/tiny-tunes/tiny-tunes");
var expect = require("chai").expect;

describe("Test add()", function() {
    it("add(); should return 24", function(done) {
        expect(t.add()).to.eql(24);
        done();
    });
});

describe("Test concater()", function() {
    it("concater(); should return \"I'm going to learn programming in 10 weeks\"", function(done) {
        expect(t.concater()).to.eql("I'm going to learn programming in 10 weeks");
        done();
    });
});

describe("Test round()", function() {
    it("round(); should return 25", function(done) {
        expect(t.round()).to.eql(25);
        done();
    });

});


describe("Test greetings()", function() {
    it("greetings(); should return right message", function(done) {
        // no test for this one
        done();
    });
});

describe("Test findHash()", function() {
    it("findHash(\"Hello World!#starting\"); should return \"starting\"", function(done) {
        expect(t.findHash("Hello World!#starting")).to.eql("starting");
        done();
    });

    it("findHash(\"#starting\"); should return \"starting\"", function(done) {
        expect(t.findHash("#starting")).to.eql("starting");
        done();
    });

    it("findHash(\"starting\"); should return \"starting\"", function(done) {
        expect(t.findHash("starting")).to.eql("");
        done();
    });

    it("findHash(\"empty hash in this tweet#\"); should return \"\"", function(done) {
        expect(t.findHash("empty hash in this tweet#")).to.eql("");
        done();
    });

    it("findHash(\"\"); should return \"\"", function(done) {
        expect(t.findHash("")).to.eql("");
        done();
    });

});

describe("Test middleCharacter()", function() {
    it("middleCharacter(\"car\"); should return \"a\"", function(done) {
        expect(t.middleCharacter("car")).to.eql("a");
        done();
    });

    it("middleCharacter(\"stuff\"); should return \"u\"", function(done) {
        expect(t.middleCharacter("stuff")).to.eql("u");
        done();
    });

    it("middleCharacter(\"rhinos\"); should return \"in\"", function(done) {
        expect(t.middleCharacter("rhinos")).to.eql("in");
        done();
    });

    it("middleCharacter(\"longstring\"); should return \"st\"", function(done) {
        expect(t.middleCharacter("longstring")).to.eql("st");
        done();
    });
});
