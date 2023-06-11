// Index Signatures

// interface TransactionObj {
//    Pizza: number;
//    Price: number;
//    Job: string;
// }

interface TransactionObj {
   [index: string]: number | string;
}

const todayTransaction: TransactionObj = {
   Pizza: 200,
   Price: 1000,
   Job: 'Pizza boy',
};

// console.log(todayTransaction.Job);
// console.log(todayTransaction['Price']);

let prop: string = 'Pizza';
console.log(todayTransaction[prop]);
console.log(todayTransaction['newData']);

type transactionArray = number[];
let transactionArrayData: transactionArray;
transactionArrayData = [100, 200, 300];

const addTransaction = function (array: transactionArray): number {
   let sum: number = 0;
   for (let item in array) {
      sum += array[item];
   }
   return sum;
};

// console.log(addTransaction(transactionArrayData));

///////////////////////////

type Info = {
   //    [index: string]: string | number | boolean | number[] | undefined;
   name: string;
   token: string;
   isLogin: boolean;
   nums?: number[];
};

const auth: Info = {
   name: 'Dheeraj',
   token: '12312312e1e2d12',
   isLogin: true,
};

for (let item in auth) {
   console.log(`${item} : ${auth[item as keyof Info]}`);
}

// for (let item in auth) {
//    console.log(`${item} : ${auth[item]}`);
// }

Object.keys(auth).map((el) => {
   console.log(auth[el as keyof typeof auth]);
});

const getAuthValue = (auth: Info, key: keyof Info): void => {
   console.log(`Auth ${key} => ${auth[key]}`);
};
getAuthValue(auth, 'name');

///////////////////////////
type Streams = 'salary' | 'bonus';
type Income = Record<Streams, number | string>;

const monthlyIncoms: Income = {
   salary: 2000,
   bonus: 1000,
};

for (let item in monthlyIncoms) {
   console.log(`${item} => ${monthlyIncoms[item as keyof Income]}`);
}
