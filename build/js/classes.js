"use strict";
class Coder {
    constructor(name, age, music, lang) {
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const dev = new Coder('Deve', 21, 'lei', 'Eng');
// console.log(dev.getAge());
// console.log(dev.age);
// console.log(dev.lang);
class WebDev extends Coder {
    constructor(name, age, music, lang, computer) {
        super(name, age, music, lang);
        this.computer = computer;
        this.computer = computer;
    }
}
const secondObj = new WebDev('Deeraj', 12, 'peoplo', 'typescript', 'mac');
// console.log(secondObj);
// console.log(secondObj.getAge());
// console.log(secondObj.age);
// console.log(secondObj.lang);
////////////
class Component {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.dataStore = [];
    }
    getName() {
        return this.name;
    }
    get data() {
        return this.dataStore;
    }
    set setState(value) {
        console.log();
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataStore = value;
            return;
        }
        else
            throw new Error('Params is not an array of string');
    }
}
const newComponent = new Component('sidebarComponent');
console.log(newComponent.getName());
// console.log(newComponent.dataStore);
newComponent.setState = ['some new string'];
console.log(newComponent.data);
