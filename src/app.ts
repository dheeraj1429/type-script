function ProcessData(x: number, y: number): number {
   return x + y;
}

ProcessData(10, 20);

// User-Defined DataType
type ArrayNum = Array<number>;
// type ArrayNum = number[];

// Touple
type touple = [string, number];
// type Info = (string | number)[];
let list: touple = ['120', 20];

list.push(1);
list.push('2');
// list.push(false);
// console.log(list);

interface Cls {
   add(a: number, b: number): number;
}

let Calc: Cls = {
   add(a, b) {
      return a + b;
   },
};

const result = Calc.add(10, 20);
// console.log(result);

type NumType = Array<number>;
const subtractFn = function (...args: NumType): number {
   return args.reduce((acc, crv) => acc + crv);
};

// console.log(subtractFn(2, 3));

class Person {
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }

   getInfo(): string {
      return `hello my name is ${this.name} my age is ${this.age}`;
   }

   set info(value: string) {
      this.name = value;
   }
}

// const student = new Person('Dheeraj', 20);
// console.log(student);
// student.info = 'rohan';
// console.log(student.getInfo());

let someNewVariable: string = '12';
const element = document.querySelector('.sv_div') as HTMLElement;
// console.log(element.textContent);

const addTwoNumbers = function (num1: number, num2: number): number {
   return num1 + num2;
};

// console.log(addTwoNumbers(2, 1));

// object type // array types.
interface User {
   name: string;
   age: number;
   place: string;
   data: string[];
}

const user: User = {
   name: 'Dheeraj',
   age: 23,
   place: 'New Delhi',
   data: ['new Delhi', 'Some data'],
};

// console.log(user);

// user.data = '20';
// array types.
let favoriteData: string[] = [];
// favoriteData.push('data');
// favoriteData.push(1);

for (const item of favoriteData) {
   // console.log(item.toLowerCase());
}

// tuples
type tuplesType = [string, number];
let fixedData: tuplesType = ['data', 1];
// fixedData[0] = 'data';
// fixedData[1] = 1;
// fixedData[2] = 3;

// enums
enum Data {
   first,
   second,
   thred,
}

// console.log(Data.first);

// union type
let newValue: string | number;
// newValue = 10;
// console.log(newValue);
// newValue = 'this is me';
// console.log(newValue);

function combine(input1: string | number, input2: string | number): string | number {
   if (typeof input1 === 'number' && typeof input2 === 'number') {
      return input1 + input2;
   } else {
      return (+input1 + +input2).toString();
   }
}

// console.log(combine(10, 20));
// console.log(combine('10', '20'));

// Literal type
const morgan = function (input: 'dev' | 'prod'): void {
   console.log(input);
};

// morgan('dev');

// Aliases type
type Int = number;
let inputValue: Int = 10;
// console.log(inputValue);

type Combinable = number | string;

// function type
interface CheckValueType {
   value: number;
}

const checkIsValid = function (isTrue: boolean): boolean | CheckValueType {
   if (isTrue) {
      return {
         value: 10,
      };
   }

   return false;
};

// console.log(checkIsValid(true));

// void
const runFn = function (): void {
   console.log('done');
};

// runFn();

const addFunction = function (n: number, x: number): number {
   return n + x;
};

// console.log(addFunction(1, 2));

let combineValue: (a: number, b: number) => number;
combineValue = addFunction;
// combineValue = runFn;
// combineValue = 10;
// console.log(combineValue(2, 3));
// console.log(combineValue);

// callback function type
function addAndHandler(a: number, b: number, cb: (input: number) => void) {
   const result = a + b;
   cb(result);
}

const callback = function (input: number): void {
   console.log(input);
};

// addAndHandler(2, 3, callback);

// unknown type
let userInput: unknown;
let userName: string;

// userInput = 10;
// userInput = 20;
// userName = userInput;

// never
function genrateError(message: string, code: number): never {
   throw { message, errorCode: code };
}

// genrateError('oops', 500);

const button = document.querySelector('button')!;

button.addEventListener('click', function () {
   console.log('done');
});
