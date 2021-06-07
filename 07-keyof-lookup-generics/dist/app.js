var person = {
    name: 'Todd',
    age: 27,
};
function getProperty(obj, key) {
    return obj[key];
}
var personName = getProperty(person, 'age');
var anotherPerson = {
    name: 'John',
    age: 30,
};
