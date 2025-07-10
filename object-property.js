const students = [
    {id : 23, name : 'Alex', age : 20},
    {id : 45, name : 'Bob', age : 22},
    {id : 67, name : 'Charlie', age : 21},
    {id : 89, name : 'David', age : 23},
    {id : 12, name : 'Eve', age : 20},
    {id : 34, name : 'Frank', age : 22},
];
const names = students.map(student => student.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);
const biggerthan20 = students.filter(s => s.age > 20);
console.log(biggerthan20);
const bigger20 = students.find(s => s.age > 20);
console.log(bigger20);

