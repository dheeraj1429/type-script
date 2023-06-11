class Coder {
   constructor(public readonly name: string, private age: number, public music: string, protected lang: string) {
      this.name = name;
      this.age = age;
      this.music = music;
      this.lang = lang;
   }

   public getAge() {
      return this.age;
   }
}

const dev = new Coder('Deve', 21, 'lei', 'Eng');
// console.log(dev.getAge());
// console.log(dev.age);
// console.log(dev.lang);

class WebDev extends Coder {
   constructor(name: string, age: number, music: string, lang: string, public computer: string) {
      super(name, age, music, lang);
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
   private dataStore: string[];
   constructor(public name: string) {
      this.name = name;
      this.dataStore = [];
   }

   public getName(): string {
      return this.name;
   }

   public get data(): string[] {
      return this.dataStore;
   }

   public set setState(value: string[]) {
      console.log();
      if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
         this.dataStore = value;
         return;
      } else throw new Error('Params is not an array of string');
   }
}

const newComponent = new Component('sidebarComponent');
console.log(newComponent.getName());
// console.log(newComponent.dataStore);
newComponent.setState = ['some new string'];
console.log(newComponent.data);
