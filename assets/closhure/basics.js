'use strict'

// Constant

const SALUTATION = 'Ave';

const COLORS = [
    "black",
    "red",
    "green",
    "yellow",
    "cyan",
    "white"
];


const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;
const colorize = name => {
    let res = "";
    const letters = name.split('');
    let color = 1;
    for (const letter of letters) {
        res += colorer(letter, color++);
        if (color > COLORS.length) color = 1;
    }
    return res;
};

const greetings = name => (
    name.includes("Augustus") ?
        `${SALUTATION}, ${colorize(name)}!` :
        `Hello, ${name}!`
);

//Usage
const fullName = "Markus Aurelius Antonius Augustus";
console.log(greetings(fullName));

const shortName = 'Markus Aurelius';
console.log(greetings(shortName));
