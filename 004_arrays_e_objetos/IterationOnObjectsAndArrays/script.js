const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
    console.log(number);
});

const person = {
    name: 'John',
    age: 30,
    city: 'London'
};

const keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(key + ': ' + person[key]);
}
