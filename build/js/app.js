"use strict";
function ProcessData(x, y) {
    return x + y;
}
ProcessData(10, 20);
// type Info = (string | number)[];
let list = ['120', 20];
list.push(1);
list.push('2');
let Calc = {
    add(a, b) {
        return a + b;
    },
};
const result = Calc.add(10, 20);
const subtractFn = function (...args) {
    return args.reduce((acc, crv) => acc + crv);
};
// console.log(subtractFn(2, 3));
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `hello my name is ${this.name} my age is ${this.age}`;
    }
    set info(value) {
        this.name = value;
    }
}
// const student = new Person('Dheeraj', 20);
// console.log(student);
// student.info = 'rohan';
// console.log(student.getInfo());
let someNewVariable = '12';
const element = document.querySelector('.sv_div');
// console.log(element.textContent);
const addTwoNumbers = function (num1, num2) {
    return num1 + num2;
};
const user = {
    name: 'Dheeraj',
    age: 23,
    place: 'New Delhi',
    data: ['new Delhi', 'Some data'],
};
// console.log(user);
// user.data = '20';
// array types.
let favoriteData = [];
// favoriteData.push('data');
// favoriteData.push(1);
for (const item of favoriteData) {
    // console.log(item.toLowerCase());
}
let fixedData = ['data', 1];
// fixedData[0] = 'data';
// fixedData[1] = 1;
// fixedData[2] = 3;
// enums
var Data;
(function (Data) {
    Data[Data["first"] = 0] = "first";
    Data[Data["second"] = 1] = "second";
    Data[Data["thred"] = 2] = "thred";
})(Data || (Data = {}));
// console.log(Data.first);
// union type
let newValue;
// newValue = 10;
// console.log(newValue);
// newValue = 'this is me';
// console.log(newValue);
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return (+input1 + +input2).toString();
    }
}
// console.log(combine(10, 20));
// console.log(combine('10', '20'));
// Literal type
const morgan = function (input) {
    console.log(input);
};
let inputValue = 10;
const checkIsValid = function (isTrue) {
    if (isTrue) {
        return {
            value: 10,
        };
    }
    return false;
};
// console.log(checkIsValid(true));
// void
const runFn = function () {
    console.log('done');
};
// runFn();
const addFunction = function (n, x) {
    return n + x;
};
// console.log(addFunction(1, 2));
let combineValue;
combineValue = addFunction;
// combineValue = runFn;
// combineValue = 10;
// console.log(combineValue(2, 3));
// console.log(combineValue);
// callback function type
function addAndHandler(a, b, cb) {
    const result = a + b;
    cb(result);
}
const callback = function (input) {
    console.log(input);
};
// addAndHandler(2, 3, callback);
// unknown type
let userInput;
let userName;
// userInput = 10;
// userInput = 20;
// userName = userInput;
// never
function genrateError(message, code) {
    throw { message, errorCode: code };
}
// genrateError('oops', 500);
const button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log('done');
});
//# sourceMappingURL=app.js.map