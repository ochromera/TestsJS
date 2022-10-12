'use strict';

const basket = {
    Laptop: 1500,
    Mouse: 25,
    Keyboard: 100,
    HDMI: 10
};

for (const [name, price] of Object.entries(basket)){
    console.log(`Price of ${name} is ${price}`);
}