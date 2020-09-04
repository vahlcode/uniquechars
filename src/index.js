/*
Author : Valentine Elum
For : Desyn Open Source
Twitter : @VahlCode
License : MIT License 
*/

let DEFAULT_STRING = "#@%&*!(){}[]=_+|/\/ABCDEFGHIJKLMOPQRSTUVWXYZ1234567890"
let DEFAULT_NUMBER = 1234567890

function UNIQUE_STRING(string = DEFAULT_STRING, strength = 16) {
    let string_length = string.length;
    let unique_string = '';
    for (let i = strength; i > 0; i--) {
        let unique_character = string[Math.floor(Math.random() * string_length)];
        unique_string += unique_character;
    }

    return unique_string;
}

function UNIQUE_NUMBER(number = DEFAULT_NUMBER, strength = 16) {
    number = number.toString()
    let number_length = number.length;
    let unique_number = '';
    for (let i = strength; i > 0; i--) {
        let unique_character = number[Math.floor(Math.random() * number_length)];
        unique_number += unique_character;
    }

    return parseInt(unique_number);
}

function UNIQUE_PASS(string = DEFAULT_STRING, strength = 16) {
    let string_length = string.length;
    let unique_string = '';
    for (let i = strength; i > 0; i--) {
        let unique_character = string[Math.floor(Math.random() * string_length)];
        unique_string += unique_character;
    }

    return unique_string;
}

export default {UNIQUE_STRING, UNIQUE_NUMBER, UNIQUE_PASS};