/**
 * Module for a couple of simple programming tasks
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * Returns the number 24
 * @returns {Number}
 */
exports.add = function() {

    // Pre-defined variables. Do not change this definitions
    var a = 12;
    var b = "12";

    // Your code here - change the code under to make the test go green
    return a + b;
};

/**
 * Returns the string "I'm going to learn programming in 10 weeks"
 * @returns {String}
 */
exports.concater = function() {

    // Pre-defined variables. Do not change this definitions
    var message = "I'm going to learn programming in";
    var time = 10;
    var weeks = "weeks";

    // Your code here

};

/**
 * Returns the rounded integer (avrundade heltalet) as sum of two decimal numbers
 * @returns {Number}
 */
exports.round = function() {

    // Pre-defined variables. Do not change this definitions
    var a = 12.24;
    var b = 12.27;

    // Your code here should return 25
    return a + b;

};

/**
 * This function takes a word and find the middle character or, if the word have a even length,
 * the two middle characters
 * @param {string} word - A word with 3 or more characters
 * @returns {string} - A string containing the middle character(s)
 */
exports.middleCharacter = function(word) {

    // your code here

};

/**
 * This function returns finds and return a hash tag in a string. If no hash-tag is provided
 * a empty string is returned. Ex. "Hello! #cheers" will return "cheers"
 * @param {string} tweet - The tweet that can include one (and only one) hash-tag
 * @returns {string} - The hashtag (excluding the #-caracter)
 */
exports.findHash = function(tweet) {

    // your code here

};

/**
 * This function returns a string holding all odd number from zero to the parameter "limit"
 * Ex. if limit is 10 it should return the string "13579"
 * @param {number} limit - A positive number
 * @returns {string}
 */
exports.getOdd = function(limit) {

    // Your code here

};

/**
 * Writes a greeting message to the console depending on what time
 * it is.
 * If hour is between 8 and 11 the message should be "Good morning!"
 * If hour is between 12 and 18 the message should be "Good afternoon!"
 * If hour is between 19 and 24 the message should be "Good evning!"
 * If hour is between 8 and 12 the message should be "Good morning!"
 *
 * @returns {Number}
 */
exports.greetings = function() {

    var message = "";

    // your code here

    // no tests to this. Run "node app.js" to se the console.log
    console.log(message);
};

/**
 * This function takes a string and replaces all "-" with " "
 * using a simple for-loop
 * @param {string} phrase - The phrase to control
 * @returns {string} - The string whit all "-"-characters replaced with " "
 */
exports.simpleReplaceWithForLoop = function(phrase) {

    // your code here

};

/**
 * This function takes a string and replaces all "-" with " "
 * using a simple while-loop
 * @param {string} phrase - The phrase to control
 * @returns {string} - The string whit all "-"-characters replaced with " "
 */
exports.simpleReplaceWithWhileLoop = function(phrase) {

    // your code here

};

/**
 * This function creates a string by using nested for-loops that is equal to
 * "11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53"
 * @returns {string} - That is 11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53
 */
exports.firstThree = function() {

    // Your code here
};

/**
 * The rövarspråket(robberlanguage) - https://sv.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket
 * is a simple crypt algorithm. This function takes a phrase and translates it to
 * an encrypted string by after every consonant adding a "o" and that consonant again.
 * The return string will always be lowercase!
 * The function uses a switch -statement.
 * Ex. "fint" becomes "fofinontot" and "rövarspråket" becomes "rorövovarorsospoproråkoketot"
 * @param {string} phrase
 * @returns {string} - The encrypted string - in lower case
 */
exports.robberLanguageEncrypter = function(phrase) {

    // your code here

};
