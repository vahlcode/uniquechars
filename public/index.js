"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
Author : Valentine Elum
For : Desyn Open Source
Twitter : @VahlCode
License : MIT License 
*/
var DEFAULT_STRING = "#@%&*!(){}[]=_+|/\/ABCDEFGHIJKLMOPQRSTUVWXYZ1234567890";
var DEFAULT_NUMBER = 1234567890;

function UNIQUE_STRING() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STRING;
  var strength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  var string_length = string.length;
  var unique_string = '';

  for (var i = strength; i > 0; i--) {
    var unique_character = string[Math.floor(Math.random() * string_length)];
    unique_string += unique_character;
  }

  return unique_string;
}

function UNIQUE_NUMBER() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_NUMBER;
  var strength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  number = number.toString();
  var number_length = number.length;
  var unique_number = '';

  for (var i = strength; i > 0; i--) {
    var unique_character = number[Math.floor(Math.random() * number_length)];
    unique_number += unique_character;
  }

  return parseInt(unique_number);
}

function UNIQUE_PASS() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STRING;
  var strength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  var string_length = string.length;
  var unique_string = '';

  for (var i = strength; i > 0; i--) {
    var unique_character = string[Math.floor(Math.random() * string_length)];
    unique_string += unique_character;
  }

  return unique_string;
}

var _default = {
  UNIQUE_STRING: UNIQUE_STRING,
  UNIQUE_NUMBER: UNIQUE_NUMBER,
  UNIQUE_PASS: UNIQUE_PASS
};
exports["default"] = _default;
module.exports = exports.default;