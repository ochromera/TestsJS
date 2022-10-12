'use strict';
const calculateSubtotal = (goods) => {
    let amount = 0;
    for (const item of goods) {
        if (item.price < 0) throw "Negative price ";
        amount += item.price ;
            }
    return amount;
};