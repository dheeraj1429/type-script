"use strict";
// convert to more or less specific
let a = 'this is string';
let b = 'hello';
let e = 2;
const addAndConcat = function (a, b, c) {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
const adNum = addAndConcat(2, 2, 'add');
const myVal = addAndConcat(2, 2, 'concat');
const myVal2 = addAndConcat(2, 2, 'concat'); // number
console.log(myVal);
console.log(adNum);
console.log(myVal2); // string
let elem = document.querySelector('demo');
let elem2 = document.querySelector('demo');
let value = elem.textContent;
// 1
// let yearElem: HTMLElement | null;
// yearElem = document.getElementById('year');
// let currentDate: string;
// currentDate = new Date().getFullYear().toString();
// if (yearElem) {
//    yearElem.setAttribute('date', currentDate);
//    yearElem.textContent = 'this year';
// }
// 2
const yearElem = document.getElementById('year');
const currentDate = new Date().getFullYear().toString();
yearElem.setAttribute('date', currentDate);
yearElem.textContent = 'this year';
//# sourceMappingURL=main3.js.map