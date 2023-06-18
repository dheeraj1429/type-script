"use strict";
class Department {
    constructor(name, key) {
        this.name = name;
        this.key = key;
        this.user = [];
        this.name = name;
        this.key = key;
    }
    get keyInfo() {
        return this.key;
    }
    set keyInfo(value) {
        this.key = value;
    }
    pushUsers(value) {
        this.user.push(value);
    }
    printUserInfo() {
        let str = '';
        for (let i = 0; i < this.user.length; i++) {
            str += this.user[i] + ' ';
        }
        return str;
    }
}
// const newObj = { describe: itDepartment.describe };
// itDepartment.pushUsers('some random name');
// itDepartment.pushUsers('some new name');
// itDepartment.pushUsers('hhwww');
// console.log(itDepartment.name);
// console.log(itDepartment.printUserInfo());
// newObj.describe();
// console.log(itDepartment.key);
// console.log(itDepartment.keyInfo);
// console.log(itDepartment.user);
// itDepartment.describe();
// const saleDepartment = new Department('Sale', 'sale_department');
// saleDepartment.describe();
class SaleDepartment extends Department {
    constructor(name, key, place) {
        super(name, key);
        this.place = place;
        this.place = place;
    }
    setKey(key) {
        this.key = key;
    }
    static getData() {
        return { message: ['data which is only access inside the sub class'] };
    }
    static createNewSaleDepartment(name, key, place) {
        return new SaleDepartment(name, key, place);
    }
    describe() {
        console.log('this is the update function');
    }
}
const saleNewDepartment = SaleDepartment.createNewSaleDepartment('Sale', 'Sale_department', 'new delhi 110015');
// console.log(saleNewDepartment.name);
// console.log(saleNewDepartment.keyInfo);
saleNewDepartment.describe();
//# sourceMappingURL=cls.js.map