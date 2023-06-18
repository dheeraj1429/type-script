"use strict";
class PersonNew {
    constructor(name) {
        this.name = name;
        this.age = 20;
        this.name = name;
        this.info = 'some data';
    }
    greet(message) {
        return `hello  ${message}`;
    }
}
// interface PersonNew {
//    name: string;
//    age: number;
//    greet(message: string): string;
// }
let user1;
user1 = new PersonNew('aman');
let addFn;
addFn = (a, b) => a + b;
let rnFn;
rnFn = (a, b) => a + b;
const employee1 = {
    name: 'Dheearj singh rawat',
    privileges: ['create_server'],
    joinDate: new Date('10-12-2000'),
};
const employee2 = {
    name: 'Dheearj singh',
    joinDate: new Date('10-12-2000'),
};
// function overload
// function addFnNew(a: number, b: number): number;
// function addFnNew(a: string, b: string): string;
function addFnNew(a, b) {
    // type guards
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return +a + +b;
    }
}
console.log('result with string', addFnNew(10, '20'));
console.log('result with number', addFnNew(10, 20));
const printEmployee = function (emp) {
    console.log('employee name', emp.name);
    if ('privileges' in emp) {
        console.log('privileges', emp.privileges);
    }
};
printEmployee(employee1);
printEmployee(employee2);
class Car {
    drive() {
        console.log('Car driving');
    }
}
class Truck {
    drive() {
        console.log('Truck driving');
    }
    loadData(value) {
        console.log(`${value} is loaded into the truck`);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehical = function (vehical) {
    vehical.drive();
    if (vehical instanceof Truck) {
        vehical.loadData('TNT');
    }
};
useVehical(v1);
useVehical(v2);
function checkAnimation(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'hourse':
            speed = animal.runningSpeed;
            break;
    }
    return speed;
}
const resultData = checkAnimation({
    type: 'bird',
    flyingSpeed: 20,
});
console.log(resultData);
// type casting
const paragraph = document.querySelector('.sv_div');
const inputElement = document.querySelector('input');
if (paragraph) {
    console.log(paragraph.textContent);
}
if (inputElement) {
    inputElement.value = 'some new data we want to set!';
}
const errorBag = {
    email: 'Not a valid email',
    password: 'Password must contains @ symbol',
};
function genrateErrorObject(message) {
    const errorObject = {
        success: false,
        error: true,
        message,
    };
    return errorObject;
}
const errorRespose = genrateErrorObject('Item no found');
console.log(errorRespose);
const fetchedData = null;
// const respose = fetchedData || 'DEFAULT_DATA';
const respose = fetchedData !== null && fetchedData !== void 0 ? fetchedData : 'DEFAULT_DATA'; // This operator is used if the value is null or undefined then the second value will be returned.
console.log(respose);
//# sourceMappingURL=interface.js.map