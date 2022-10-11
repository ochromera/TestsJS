'use strict';

const electronics = {
    Laptop: 1500,
    Mouse: 25,
    Keyboard: 100,
    HDMI: 10
}

for (const name of Object.keys(electronics)){
    const price = electronics[name];
    console.log(`Price of ${name} is ${price}`)
}