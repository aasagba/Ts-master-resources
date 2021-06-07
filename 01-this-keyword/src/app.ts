// // Function
// function myFunction() {
//   console.log('Function:::', this);
// }
// myFunction();

// // Object literal
// const myObj = {
//   myMethod() {
//     console.log('Object:::', this);
//   },
// };
// myObj.myMethod();

// // Classes
// class MyClass {
//   myMethod() {
//     console.log('Class:::', this);
//   }
// }

// const myInstance = new MyClass();
// myInstance.myMethod();

interface IEmployee {
  readonly empCode: number;
  empName: string;
}

let empObj:IEmployee = {
  empCode:1,
  empName:"Steve"
}

empObj.empCode = 100;