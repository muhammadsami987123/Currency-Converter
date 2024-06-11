#! /usr/bin/env node

import inquirer from "inquirer";
let currencies ={
    'PKR':{
        "PKR": 1,
        "USD": 0.013,
        "AED": 0.0036,
    },
    'USD':{
        "USD": 1,
        "PKR": 277.54,
        "AED": 3.67,
    },
    'AED':{
        "AED": 1,
        "USD": 0.27,
        "PKR": 75.69,
    }
}
type answer={
    from: "PKR" | "USD" | "AED",
    to: "PKR" | "USD" | "AED",
    amount: number
}
let message: answer= await inquirer.prompt([
    {
        name: "amount",
        message: "Enter your amount:",
        type: "number",
    },
    {
        name: "from",
        message: "Select your currency:",
        type: "list",
        choices: ["PKR" , "USD" , "AED"]   
    },
    {
        name: "to",
        message: "Select your conversion currency:",
        type: "list",
        choices: ["PKR" , "USD" , "AED"]   
    }
]);
let {from , to , amount}= message
if(from && to && amount){
    let result = currencies[from][to]*amount;
    console.log(`Your result from ${from} to ${to} is ${result}`)
}
else{
    console.log("Invalid Input");
}