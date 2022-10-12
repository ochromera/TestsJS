'use strict';

const calculateTotal = (order) => {
    const expenses = new Map();
    let total = 0;
    for (const groupName in order ) {
        const goods = order[groupName];
        const amount = calculateTotal(goods);
        total += amount;
        expenses.set(groupName, amount);
    }
    return {total, expenses}
};