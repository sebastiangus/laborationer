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

describe("Test simpleReplaceWithForLoop()", function() {
    it("simpleReplaceWithForLoop(\"Hello-World!\") should return \"Hello World!\"", function(done) {
        expect(t.simpleReplaceWithForLoop("Hello-World!")).to.eql("Hello World!");
        done();
    });

    it("simpleReplaceWithForLoop(\"Hello-JavaScript-World!\") should return \"Hello Javascript World!\"", function(done) {
        expect(t.simpleReplaceWithForLoop("Hello-JavaScript-World!")).to.eql("Hello JavaScript World!");
        done();
    });

    it("simpleReplaceWithForLoop(\"Hello World!\") should return \"Hello World!\"", function(done) {
        expect(t.simpleReplaceWithForLoop("Hello World!")).to.eql("Hello World!");
        done();
    });
});

describe("Test simpleReplaceWithWhileLoop()", function() {
    it("simpleReplaceWithWhileLoop(\"Hello-World!\") should return \"Hello World!\"", function(done) {
        expect(t.simpleReplaceWithWhileLoop("Hello-World!")).to.eql("Hello World!");
        done();
    });

    it("simpleReplaceWithWhileLoop(\"Hello-JavaScript-World!\") should return \"Hello Javascript World!\"", function(done) {
        expect(t.simpleReplaceWithWhileLoop("Hello-JavaScript-World!")).to.eql("Hello JavaScript World!");
        done();
    });

    it("simpleReplaceWithWhileLoop(\"Hello World!\") should return \"Hello World!\"", function(done) {
        expect(t.simpleReplaceWithWhileLoop("Hello World!")).to.eql("Hello World!");
        done();
    });

    it("simpleReplaceWithWhileLoop(\"-Hello-World-!-\") should return \" Hello World ! \"", function(done) {
        expect(t.simpleReplaceWithWhileLoop("-Hello-World-!-")).to.eql(" Hello World ! ");
        done();
    });
});

describe("Test robberLanguageEncrypter()", function() {
    it("robberLanguageEncrypter(\"fint!\") should return \"fofinontot\"", function(done) {
        expect(t.robberLanguageEncrypter("fint")).to.eql("fofinontot");
        done();
    });

    it("robberLanguageEncrypter(\"Rövarspråket\") should return \"rorövovarorsospoproråkoketot\"", function(done) {
        expect(t.robberLanguageEncrypter("Rövarspråket")).to.eql("rorövovarorsospoproråkoketot");
        done();
    });

    it("robberLanguageEncrypter(\"aeiouåäö!\") should return \"aeiouåäö\"", function(done) {
        expect(t.robberLanguageEncrypter("aeiouåäö")).to.eql("aeiouåäö");
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
