"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter youer first no:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "kindly enter youer second no:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "select Operator:"
    },
]);
var numberOne = answers.numberOne, numberTwo = answers.numberTwo, operator = answers.operator;
if (numberOne && numberTwo && operator) {
    var result = 0;
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    else if (operator === "+") {
        result = numberOne + numberTwo;
    }
    if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("your result is :", result);
}
else {
    console.log("kinndly etner your valid input");
}
