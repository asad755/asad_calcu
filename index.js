import inquirer from "inquirer";
const answers = await inquirer.prompt([
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
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
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
