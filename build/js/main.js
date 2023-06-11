"use strict";
let isLoading;
let meaningOfLife;
let myName;
let album;
let balance;
isLoading = false;
meaningOfLife = 20;
myName = 'Dheeraj';
album = 'this is string';
balance = 20;
balance = '30';
console.log({
    isLoading,
    meaningOfLife,
    myName,
    album,
    balance,
});
const sumFn = function (a, b) {
    return a + b;
};
const addStr = function (a, b) {
    return a + b;
};
console.log(sumFn(1, 2));
let postId;
let isActive;
// arrays
let ar = ['one', 'two', 'three'];
let newAr = [12, 'dev', false];
let secondAr = ['12', 10];
let anyData = [];
ar.push('20');
newAr.push('some');
secondAr.push('str');
anyData.push(false);
anyData.push(10);
console.log({
    ar,
    newAr,
    secondAr,
    anyData,
});
// tuple
let tuple;
tuple = ['dev', 10, false];
console.log(tuple);
const mixed = [10, 'dev', false];
// objects
let myObj;
myObj = [];
myObj = mixed;
console.log(typeof myObj, myObj);
let example = {
    name: 'Dheeraj',
    place: 'New delhi',
    age: 23,
};
console.log(example);
let newObject = {
    name: 'Dheeraj',
    age: 21,
    album: ['dev', false],
    active: false,
};
console.log(newObject);
const greetFunction = function (object) {
    console.log(object, 'log from the array');
};
greetFunction({ name: 'dheeraj', age: 21, album: [false] });
