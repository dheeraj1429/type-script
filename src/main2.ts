interface ParamTypes {
   a?: number;
   b: number;
}

const smFn = function (data: ParamTypes) {
   if (data?.a) {
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
enum Greed {
   name,
}

enum Day {
   mon = 'mon',
   tue = 'tue',
}

const whichDay = function (day: Day) {
   return day;
};

console.log(whichDay(Day.mon));

// Type Aliases
type stringOrNumber = string | number;
type stringOrBoolen = string | boolean;

type Gi = {
   name: string;
   age: stringOrNumber;
   isActive: stringOrBoolen;
};

type UserId = string | number;

let id: UserId = 20;
console.log(id);

// Literal type
let myNewName: 'Dheeraj' | 'aman' | 'karan';
myNewName = 'karan';

const add = function (a: number, b: number): number {
   return a + b;
};

const concatStr = function (a: number, b: string): string {
   return a + b;
};

const logMessage = function (message: any): void {
   console.log(message);
};

console.log(add(10, 20));
console.log(add(+'20', 20));
logMessage('some new message');

// type MathFunction = (a: number, b: number) => number;
interface MathFunction {
   (a: number, b: number): number;
}

let multiFn: MathFunction = (c, d) => c * d;

console.log(multiFn(2, 10));

// optinal parameters
const addAll = function (a: number, b: number, c?: number): number {
   if (!!c && c !== undefined) {
      return a + b + c;
   }
   return a + b;
};

// default parameters
const sumAll = function (a: number, b: number, c: number = 2): number {
   return a + b + c;
};

console.log(addAll(2, 3));
console.log(sumAll(2, 3));

const addNumbers = function (...nums: number[]): number {
   return nums.reduce((acc, crv) => acc + crv);
};

console.log(addNumbers(1, 2, 3));

const throwError = function (error: string): never {
   throw new Error(error);
};

const checkNumber = (num: any): boolean => {
   if (typeof num === 'number') return true;
   return false;
};

console.log(checkNumber('10'));
console.log(checkNumber(10));
