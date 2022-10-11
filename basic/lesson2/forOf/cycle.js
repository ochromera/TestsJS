'use strict';


const basket = [
    {price: 1500},
    {price: 25},
    {price: 100},
    {price:10},
];

for ( const item of basket ){
    console.log(`Price: ${item.price}`)
}