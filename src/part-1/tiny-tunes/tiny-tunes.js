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

    // Your code here
    return a + Number(b);
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
    return message + " " + time + " " + weeks;
};

/**
 * Returns the rounded (avrundade) result of an sum
 * @returns {Number}
 */
exports.round = function() {

    // Pre-defined variables. Do not change this definitions
    var a = 12.24;
    var b = 12.27;

    // Your code here
    return Math.round(a + b);
};

/**
 * This function takes a word and find the middle character or, if the word have a even length,
 * the two middle characters
 * @param {string} word - A word with 3 or more characters
 * @returns {string} - A string containing the middle character(s)
 */
exports.middleCharacter = function(word) {
    var length = word.length;

    var result = word.charAt(length / 2);
    if (length % 2 === 0) {
        result = word.charAt((length / 2) - 1) + result;
    }

    return result;
};

/**
 * This function returns finds and return a hash tag in a string. If no hash-tag is provided
 * a empty string is returned. Ex. "Hello! #cheers" will return "cheers"
 * @param {string} tweet - The tweet that can include one (and only one) hash-tag
 * @returns {string} - The hashtag (excluding the #-caracter)
 */
exports.findHash = function(tweet) {
    var index = tweet.indexOf("#");
    if (index > -1) {
        return tweet.slice(index + 1);
    }

    return "";
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
    var hour = new Date().hour;

    var message = "";

    if (hour >= 8 && hour < 12) {
        message = "Good morning!";
    } else if (hour >= 12 && hour <= 18) {
        message = "Good afternoon!";
    }else if (hour > 18 && hour <= 24) {
        message = "Good evening!";
    } else {
        message = "Good night!";
    }

    console.log(message);
};

/**
 * This function takes a string and replaces all "-" with " "
 * using a simple for-loop
 * @param {string} phrase - The phrase to control
 * @returns {string} - The string whit all "-"-characters replaced with " "
 */
exports.simpleReplaceWithForLoop = function(phrase) {
    var length = phrase.length;
    var result = "";
    for (var i = 0; i < length; i++) {
        var char = phrase.charAt(i);
        if (char === "-") {
            result += " ";
            continue;
        }

        result += char;
    }

    return result;
};

/**
 * This function takes a string and replaces all "-" with " "
 * using a simple while-loop
 * @param {string} phrase - The phrase to control
 * @returns {string} - The string whit all "-"-characters replaced with " "
 */
exports.simpleReplaceWithWhileLoop = function(phrase) {
    var length = phrase.length;
    var result = "";
    var i = 0;
    while (i < length) {
        var char = phrase.charAt(i);
        i++;
        if (char === "-") {
            result += " ";
            continue;
        }

        result += char;

    }

    return result;
};

/**
 * The rövarspråket(robberlanguage) - https://sv.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket
 * is a simple crypt algorithm. This function takes a phrase and translates it to
 * an encrypted string by after every consonant adding a "o" and that consonant again.
 * The function uses a switch -statement.
 * Ex. "fint" becomes "fofinontot"
 * @param {string} phrase
 * @returns {string}
 */
exports.robberLanguageEncrypter = function(phrase) {
    phrase = phrase.toLowerCase();
    var length = phrase.length;
    var result = "";
    for (var i = 0; i < length; i++) {
        var char = phrase.charAt(i);
        switch (char) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "å":
            case "ä":
            case "ö":
                result += char;
                break;
            default:
                result += char + "o" + char;
                break;
        }
    }

    return result;
};
