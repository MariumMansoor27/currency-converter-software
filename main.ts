#! /usr/bin/env node
import inquirer from "inquirer"

const currency : any = {  // currency rate dated 09-04-2024
    USD: 1,             //US Dollar
    PKR: 277.98,        // Pakistani Rs
    EUR : 0.92,        //Eurporoen
    SRL : 3.75,      //Saudi Riyal
    PON :0.79,    //PONDsTERLING
    QRL: 3.62,       //Qatri Riyal
    INR: 83.28          // Indian Rs
}

let user_input = await inquirer.prompt(
    [
        {
            name: "from",
            type : "list",
            message: "please select from currency in a given list",
            choices: ['USD', 'PKR', 'EUR', 'SRL','PON','QRL','INR']

        },
        {
            name: "to",
            type : "list",
            message: "please select to currency in a given list",
            choices: ['USD', 'PKR', 'EUR', 'SRL','PON','QRL','INR']

        },
        {
            name: "amount",
            type : "number",
            message: "please enter amount"
        }
    ]
)

let toamount = currency[user_input.to]
let fromamount = currency[user_input.from]
let amount = user_input.amount
let baseamount = amount/fromamount
let convertedamount = (baseamount * toamount).toFixed(2)
console.log(convertedamount) 