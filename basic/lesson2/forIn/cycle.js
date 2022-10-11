'use strict';

const basket = {
    Laptop: 1500,
    Mouse:25,
    Keyboard: 100,
    HDMI:10,
};

for (const key in basket) {
    const price = basket[key];
    console.log(`Price of ${key} is ${price}`);
}