// Type Assertions
// alies
type one = string; // alies or string type
type two = boolean | number; // Union type
type thred = 'dev'; // Literal type

// convert to more or less specific
let a: one = 'this is string';
let b = <one>'hello';
let e = <string | number>2;

const addAndConcat = function (a: number, b: number, c: 'add' | 'concat'): number | string {
   if (c === 'add') return a + b;
   return '' + a + b;
};

const adNum: number = addAndConcat(2, 2, 'add') as number;
const myVal: string = addAndConcat(2, 2, 'concat') as string;
const myVal2: number = addAndConcat(2, 2, 'concat') as number; // number
console.log(myVal);
console.log(adNum);
console.log(myVal2); // string

let elem = document.querySelector('demo') as HTMLElement;
let elem2 = <HTMLElement>document.querySelector('demo');
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
const yearElem = document.getElementById('year') as HTMLElement;
const currentDate: string = new Date().getFullYear().toString();

yearElem.setAttribute('date', currentDate);
yearElem.textContent = 'this year';
