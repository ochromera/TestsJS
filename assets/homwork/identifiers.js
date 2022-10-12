'use strict';


const welcome = person => {
    console.log(`Hello,${person.name}!`);
};

const persons = [
    {
        name: "Nik",
        age: 20
    }
]

for (const person of persons) {
    welcome(person)
}