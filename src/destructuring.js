const number = [1, 2, 3, 4, 5];

const [a,b,... rest] =number;

console.log(a);
console.log(b);
console.log(rest);

const person ={
    name:'quan',
    age:20,
    city: 'danang'
};
const {name, age, city} =person;
console.log(name);
console.log(age);
console.log(city);