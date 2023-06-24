interface Named {
   readonly name?: string;
   info?: string;
}

interface Greet {
   greet(message: string): string;
   readData?(): string;
}

// interface Greet extends Named {
//    greet(message: string): string;
//    readData?(): string;
// }

class PersonNew implements Greet, Named {
   age = 20;
   info?: string | undefined;

   constructor(readonly name?: string) {
      this.name = name;
      this.info = 'some data';
   }

   greet(message: string): string {
      return `hello  ${message}`;
   }
}

// interface PersonNew {
//    name: string;
//    age: number;

//    greet(message: string): string;
// }

let user1: Greet;
user1 = new PersonNew('aman');
// console.log('the object is created with two interface', user1);

// create a type
type addNumber = (a: number, b: number) => number;
let addFn: addNumber;
addFn = (a: number, b: number) => a + b;

// with interface
interface Fn {
   (a: number, b: number): number;
}
let rnFn: Fn;
rnFn = (a: number, b: number) => a + b;

// intersection type;
type Admin = {
   name: string;
   privileges?: string[];
};

type Employee = {
   name: string;
   joinDate: Date;
};

type EvelatedEmployee = Admin & Employee; // intersection types.

const employee1: EvelatedEmployee = {
   name: 'Dheearj singh rawat',
   privileges: ['create_server'],
   joinDate: new Date('10-12-2000'),
};

const employee3: EvelatedEmployee = {
   name: 'Karan singh rawat',
   joinDate: new Date('10-12-2012'),
};

// console.log('employee3', employee3);

// console.log(employee1);

// if i want to create intersection type with interface then we can use interface like this.
interface AdminOne {
   name: string;
   privileges?: string[];
}

interface EmployeeInterface {
   name: string;
   joinDate: Date;
}

interface EvelatedEmployeeInterface extends AdminOne, EmployeeInterface {}

// type EvelatedEmployeeInterface = AdminOne & EmployeeInterface;

const employee2: EvelatedEmployeeInterface = {
   name: 'Dheearj singh',
   joinDate: new Date('10-12-2000'),
};

// console.log(employee2)
type Combiable = string | number;
type Numeric = number | boolean;

// function overload
// function addFnNew(a: number, b: number): number;
// function addFnNew(a: string, b: string): string;

function addFnNew(a: Combiable, b: Combiable): Combiable {
   // type guards
   if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
   } else {
      return +a + +b;
   }
}

console.log('result with string', addFnNew(10, '20'));
console.log('result with number', addFnNew(10, 20));

type UnKnownEmployee = Admin | Employee;

const printEmployee = function (emp: UnKnownEmployee) {
   console.log('employee name', emp.name);
   if ('privileges' in emp) {
      // we can use the in oprator in objects.
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

   loadData(value: string) {
      console.log(`${value} is loaded into the truck`);
   }
}

type Vehical = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehical = function (vehical: Vehical): void {
   vehical.drive();
   if (vehical instanceof Truck) {
      // instanceof is only used in the class.
      vehical.loadData('TNT');
   }
};

useVehical(v1);
useVehical(v2);

// discriminated unious
interface Bird {
   type: 'bird';
   flyingSpeed: number;
}

interface Hourse {
   type: 'hourse';
   runningSpeed: number;
}

type Animal = Bird | Hourse;

function checkAnimation(animal: Animal): number {
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
const paragraph = <HTMLElement>document.querySelector('.sv_div');
const inputElement = <HTMLInputElement>document.querySelector('input');

if (paragraph) {
   console.log(paragraph.textContent);
}

if (inputElement) {
   inputElement.value = 'some new data we want to set!';
}

// interface for the error class
// this is only allow whenever you want to create a key an values paires object which has kay or values both are string.
interface ErrorCapture {
   [key: string]: string;
}

const errorBag: ErrorCapture = {
   email: 'Not a valid email',
   password: 'Password must contains @ symbol',
};

// send custom error
interface CaptureErrorInterface {
   success: boolean;
   error: boolean;
   message: string;
}

type Message = string;

function genrateErrorObject(message: Message) {
   const errorObject: CaptureErrorInterface = {
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
const respose = fetchedData ?? 'DEFAULT_DATA'; // This operator is used if the value is null or undefined then the second value will be returned.
console.log(respose);
