// Function
function myFunction() {
    console.log('Function:::', this);
}
myFunction();
// Object literal
var myObj = {
    myMethod: function () {
        console.log('Object:::', this);
    },
};
myObj.myMethod();
// Classes
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myMethod = function () {
        console.log('Class:::', this);
    };
    return MyClass;
}());
var myInstance = new MyClass();
myInstance.myMethod();
