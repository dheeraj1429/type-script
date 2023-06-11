let isLoading: boolean;
let meaningOfLife: number;
let myName: string;
let album: any;
let balance: string | number;

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

const sumFn = function (a: number, b: number) {
   return a + b;
};

const addStr = function (a: number, b: string) {
   return a + b;
};

console.log(sumFn(1, 2));

let postId: string | number;
let isActive: number | boolean;

// arrays
let ar: string[] = ['one', 'two', 'three'];
let newAr: (number | string | boolean)[] = [12, 'dev', false];
let secondAr: (string | number)[] = ['12', 10];
let anyData: any = [];

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
let tuple: [string, number, boolean];
tuple = ['dev', 10, false];

console.log(tuple);

const mixed = [10, 'dev', false];

// objects
let myObj: object;
myObj = [];
myObj = mixed;
console.log(typeof myObj, myObj);

let example = {
   name: 'Dheeraj',
   place: 'New delhi',
   age: 23,
};

console.log(example);

// type
interface ObjectType {
   name: String;
   age: string | number;
   album: (string | boolean)[];
   active?: boolean;
}

let newObject: ObjectType = {
   name: 'Dheeraj',
   age: 21,
   album: ['dev', false],
   active: false,
};

console.log(newObject);

const greetFunction = function (object: ObjectType) {
   console.log(object, 'log from the array');
};

greetFunction({ name: 'dheeraj', age: 21, album: [false] });
