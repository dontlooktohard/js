const people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
people.shift('Greg')
people.pop('james')
people.unshift(`matt`)
people.push('franco')
console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}
const copy = people.slice(0, people.indexOf("Mary")).concat(people.slice(people.indexOf("Mary") + 1, people.length));

people.indexOf("Mary");
people.indexOf("Foo");
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(people.indexOf("Devon"), 1);
// for (let i = 1 ; i <= 50 ; i++){
//     console.log(`Voter number ${i} is currently voting`);
// }