"use strict";
// Generic function
const usersData = [];
usersData.push('some new data');
usersData.push(2);
// api response
const resloveResponse = {
    success: true,
    error: false,
    item: {
        name: 'dheeraj singh rawat',
        email: 'someData@gmail.com',
    },
};
const rejectResponse = {
    success: false,
    error: true,
    message: 'Internal server errror',
};
const promise = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove(resloveResponse);
    }, 10);
});
// promise.then((res) => console.log(res)).catch((err) => console.log(err));
const mergeObject = function (objA, objB) {
    return Object.assign(objA, objB);
};
const mergedObj = mergeObject({ name: 'dheeraj' }, { lastName: 'rawat' });
const countAndPrint = function (elem) {
    return [elem, elem.length];
};
// console.log(countAndPrint('this is me'));
const findElemFromObject = function (obj, key) {
    return obj[key];
};
// console.log(findElemFromObject({ name: 'dheeraj' }, 'name'));
// Generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    setItems(item) {
        this.data.push(item);
    }
    getItem(index) {
        return this.data[index];
    }
    removeItem(index) {
        this.data.splice(this.data.indexOf(index), 1);
    }
}
function createCourseGole(title, description, completeUntil) {
    const courseGoleObj = {};
    courseGoleObj.title = title;
    courseGoleObj.description = description;
    courseGoleObj.completeUntil = completeUntil;
    return courseGoleObj;
}
// read only type;
const userData = ['Mac', 'Window'];
//# sourceMappingURL=generic.js.map