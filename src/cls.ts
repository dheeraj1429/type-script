abstract class Department {
   public user: string[] = [];
   constructor(public readonly name: string, protected key: string) {
      this.name = name;
      this.key = key;
   }

   get keyInfo(): string {
      return this.key;
   }

   set keyInfo(value: string) {
      this.key = value;
   }

   pushUsers(value: string) {
      this.user.push(value);
   }

   abstract describe(): void;

   printUserInfo(): string {
      let str: string = '';
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
   private constructor(name: string, key: string, public place: string) {
      super(name, key);
      this.place = place;
   }

   setKey(key: string) {
      this.key = key;
   }

   static getData() {
      return { message: ['data which is only access inside the sub class'] };
   }

   static createNewSaleDepartment(name: string, key: string, place: string) {
      return new SaleDepartment(name, key, place);
   }

   describe(): void {
      console.log('this is the update function');
   }
}

const saleNewDepartment = SaleDepartment.createNewSaleDepartment('Sale', 'Sale_department', 'new delhi 110015');
// console.log(saleNewDepartment.name);
// console.log(saleNewDepartment.keyInfo);
saleNewDepartment.describe();
