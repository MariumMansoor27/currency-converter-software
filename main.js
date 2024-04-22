#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 277.98,
    EUR: 0.92,
    SRL: 3.75,
    PON: 0.79,
    QRL: 3.62,
    INR: 83.28 // Indian Rs
};
let user_input = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "please select from currency in a given list",
        choices: ['USD', 'PKR', 'EUR', 'SRL', 'PON', 'QRL', 'INR']
    },
    {
        name: "to",
        type: "list",
        message: "please select to currency in a given list",
        choices: ['USD', 'PKR', 'EUR', 'SRL', 'PON', 'QRL', 'INR']
    },
    {
        name: "amount",
        type: "number",
        message: "please enter amount"
    }
]);
let toamount = currency[user_input.to];
let fromamount = currency[user_input.from];
let amount = user_input.amount;
let baseamount = amount / fromamount;
let convertedamount = (baseamount * toamount).toFixed(2);
console.log(convertedamount);
