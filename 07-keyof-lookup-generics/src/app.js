var person = {
    name: 'Todd',
    age: 27
};
function getProperty(obj, key) {
    return obj[key];
}
var personName = getProperty(person, 'age');
console.log(personName);
var anotherPerson = {
    name: 'John',
    age: 30
};
