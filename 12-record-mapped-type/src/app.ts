// (function() {
//   function addMember(member) {
//     var members = [];
//     function printMembers() {
//       for (var i = 0; i < members.length; i++) {
//         console.log(members[i]);
//       }
//     }

//     return function (member) {
//       console.log('member: ', member);
      
//       members[members.length] = member;
//       console.log('in array: ', members[members.length]);
      
//       printMembers();
//     }
//   }

//   var newMember = addMember('john');
//   newMember("Anth");
//   newMember('Dan');
// })();


// 2)
// var fruit = 'apple';

// var lunch = {
//   fruit: 'banana',
//   getFruit: function() {
//     return this.fruit;
//   }
// }

// var getFruit = lunch.getFruit;

// console.log(lunch.getFruit());
// console.log(getFruit());

// 3)


class Person {
  
 constructor(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
 }

 getName() {
  return this.firstName + " " + this.lastName;
 }

}
var person = new Person("Anna", "Prosser", 29);

var Workers = function (name, lastname, age, wage) {
  Person.call(this, name,lastname, age);
  this.wage = wage;
}

var worker = new Workers('w', 1, 1, 2000);

console.log(worker instanceof Person) 