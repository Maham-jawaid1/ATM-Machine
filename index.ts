#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
//initialize user balance and pin code 
let mybalance = 5000;
let mypin = 5656;


console.log (chalk.yellowBright("\n\tWelcome To Maham ATM-Machine\n\t"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin:",
    }
])
if (pinAnswer.pin===mypin){
console.log(chalk.greenBright("\n\tPin is correct,Login Successfull!\n"));


let operationAnswer = await inquirer.prompt([
    {
        name: "operation",
        type:"list",
        message : "Select an operation",
        choices: ["Withdraw Amount","Check Balance" ]
    }
])
if (operationAnswer.operation==="Withdraw Amount"){

    let  WithdrawAns = await inquirer.prompt([
        {
            name : "WithdrawMethod",
            type: "list",
            message : "Select a Withdraw Method",
            choices: ["Fast Cash","Enter Amount"]
        }
    ])
if(WithdrawAns.WithdrawMethod==="Fast Cash"){
    let FastCashAnswer = await inquirer.prompt([
        {
            name: "FastCash",
            type: "list",
            message: "Select Amount:",
            choices: [1000,2000,5000,10000,20000,50000]
        }
    ])
    if (FastCashAnswer.FastCash >mybalance){

        console.log(chalk.redBright("\n\tInsufficient Balance\n"));
    }
else {
    mybalance -=FastCashAnswer.FastCash
    console.log(chalk.greenBright(`\n\t${FastCashAnswer.FastCash} Withdraw Successfully\n`));
    console.log(chalk.yellowBright(`\tYour Remaining Balance is${mybalance}`));

}

}

     else if (WithdrawAns.WithdrawMethod==="Enter Amount"){
    let amountAnswer = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to withdraw:",
        }
    ])
    if (amountAnswer.amount>mybalance){
        console.log(chalk.redBright("\n\tInsufficient Balance\n"));
    }
    else {
        mybalance-=amountAnswer.amount;
        console.log(chalk.greenBright(`\n\t${amountAnswer.amount} Withdraw Successfuly\n`));
        console.log(chalk.yellowBright(`\tyour remaining balance: ${mybalance}`));
    }
    }

}
else if (operationAnswer.operation==="Check Balance"){
    console.log(chalk.greenBright(`\n\tyour account balance is: ${mybalance}\n\t`));
}

}
else {
    console.log(chalk.redBright("\n\tPin is Incorrect, Try Again!\n"));
}