let names = ['Bogdan', 'Katja', 'Anton'];
//
// names.forEach(function (name) {
//     console.log('For Each', name)
// })
//
// names.forEach((name) => console.log('arrow', name));


// let returnMe = (name) => name + '!';
// console.log(returnMe('Bogdan'));
//
// let person = {
//     name: 'Bogdan',
//     greet() {
//         names.forEach((name) => {
//             console.log(this.name + ' say hi to ' + name);
//         })
//     }
// };
//
// person.greet();

function add(a, b) {
 return a + b;
}

let addStatement = (a, b) =>  {
  return a + b;
};

let addExpression = (a, b) => a + b;


console.log(add(1, 3));
console.log(add(9, 0));

console.log(addStatement(1, 3));
console.log(addStatement(9, 0));

console.log(addExpression(1, 3));
console.log(add(9, 0));

