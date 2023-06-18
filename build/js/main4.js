"use strict";
// Index Signatures
const todayTransaction = {
    Pizza: 200,
    Price: 1000,
    Job: 'Pizza boy',
};
// console.log(todayTransaction.Job);
// console.log(todayTransaction['Price']);
let prop = 'Pizza';
console.log(todayTransaction[prop]);
console.log(todayTransaction['newData']);
let transactionArrayData;
transactionArrayData = [100, 200, 300];
const addTransaction = function (array) {
    let sum = 0;
    for (let item in array) {
        sum += array[item];
    }
    return sum;
};
const auth = {
    name: 'Dheeraj',
    token: '12312312e1e2d12',
    isLogin: true,
};
for (let item in auth) {
    console.log(`${item} : ${auth[item]}`);
}
// for (let item in auth) {
//    console.log(`${item} : ${auth[item]}`);
// }
Object.keys(auth).map((el) => {
    console.log(auth[el]);
});
const getAuthValue = (auth, key) => {
    console.log(`Auth ${key} => ${auth[key]}`);
};
getAuthValue(auth, 'name');
const monthlyIncoms = {
    salary: 2000,
    bonus: 1000,
};
for (let item in monthlyIncoms) {
    console.log(`${item} => ${monthlyIncoms[item]}`);
}
//# sourceMappingURL=main4.js.map