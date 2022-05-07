"use strict";

module.exports = {isVowel};

/**
 * @param {character} is a character
 * @returns {Boolean} true if character is Vowel, else false
 */


 function isVowel(str) {
    const Vowels = ['a','e','i','o','u'];
    for (let i = 0; i <= str.length - 1; i++) {
        if (str == Vowels[i]) {
            return true;
        }
    }

    return false;
}