"use strict";
const smFn = function (data) {
    if (data === null || data === void 0 ? void 0 : data.a) {
        return data.a + data.b;
    }
};
let data = {
    a: 10,
    b: 20,
};
// const result = smFn(data);
// console.log(result);
// Enums
var Greed;
(function (Greed) {
    Greed[Greed["name"] = 0] = "name";
})(Greed || (Greed = {}));
var Day;
(function (Day) {
    Day["mon"] = "mon";
    Day["tue"] = "tue";
})(Day || (Day = {}));
const whichDay = function (day) {
    return day;
};
console.log(whichDay(Day.mon));
let id = 20;
console.log(id);
// Literal type
let myNewName;
myNewName = 'karan';
const add = function (a, b) {
    return a + b;
};
const concatStr = function (a, b) {
    return a + b;
};
const logMessage = function (message) {
    console.log(message);
};
console.log(add(10, 20));
console.log(add(+'20', 20));
logMessage('some new message');
let multiFn = (c, d) => c * d;
console.log(multiFn(2, 10));
// optinal parameters
const addAll = function (a, b, c) {
    if (!!c && c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
// default parameters
const sumAll = function (a, b, c = 2) {
    return a + b + c;
};
console.log(addAll(2, 3));
console.log(sumAll(2, 3));
const addNumbers = function (...nums) {
    return nums.reduce((acc, crv) => acc + crv);
};
console.log(addNumbers(1, 2, 3));
const throwError = function (error) {
    throw new Error(error);
};
const checkNumber = (num) => {
    if (typeof num === 'number')
        return true;
    return false;
};
console.log(checkNumber('10'));
console.log(checkNumber(10));
