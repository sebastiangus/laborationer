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
