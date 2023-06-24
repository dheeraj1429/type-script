// Generic function
const usersData: Array<string | number> = [];
usersData.push('some new data');
usersData.push(2);

// console.log(usersData);

interface ApiResponse {
   success: boolean;
   error: boolean;
}

interface ErrorResponse extends ApiResponse {
   message: string;
}

interface SuccessResponse extends ApiResponse {
   item: {
      name: string;
      email: string;
   };
}

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

const promise: Promise<ErrorResponse | SuccessResponse> = new Promise((reslove, reject) => {
   setTimeout(() => {
      reslove(resloveResponse);
   }, 10);
});

// promise.then((res) => console.log(res)).catch((err) => console.log(err));

const mergeObject = function <T extends object, U extends object>(objA: T, objB: U) {
   return Object.assign(objA, objB);
};

const mergedObj = mergeObject({ name: 'dheeraj' }, { lastName: 'rawat' });
// console.log(mergedObj.name);
// console.log(mergedObj.lastName);

interface lengthy {
   length: number;
}

const countAndPrint = function <T extends lengthy>(elem: T): [T, number] {
   return [elem, elem.length];
};

// console.log(countAndPrint('this is me'));

const findElemFromObject = function <T extends object, K extends keyof T>(obj: T, key: K) {
   return obj[key];
};

// console.log(findElemFromObject({ name: 'dheeraj' }, 'name'));

// Generic classes
class DataStorage<T extends string | number | boolean> {
   private data: T[] = [];

   setItems(item: T) {
      this.data.push(item);
   }

   getItem(index: number) {
      return this.data[index];
   }

   removeItem(index: T) {
      this.data.splice(this.data.indexOf(index), 1);
   }
}

// const textStorage = new DataStorage<string>();
// textStorage.setItems('this is me');
// textStorage.setItems('this');
// textStorage.removeItem('this');

// const objectStoregate = new DataStorage<object>();
// objectStoregate.setItems({ name: 'Dheeraj' });
// objectStoregate.setItems({ name: 'karan' });
// objectStoregate.removeItem({ name: 'Dheeraj' });
// console.log(objectStoregate);

// Partial type;
interface CourseGole {
   title: string;
   description: string;
   completeUntil: Date;
}

function createCourseGole(title: string, description: string, completeUntil: Date): CourseGole {
   const courseGoleObj: Partial<CourseGole> = {};
   courseGoleObj.title = title;
   courseGoleObj.description = description;
   courseGoleObj.completeUntil = completeUntil;
   return courseGoleObj as CourseGole;
}

// read only type;
const userData: Readonly<Array<string>> = ['Mac', 'Window'];
