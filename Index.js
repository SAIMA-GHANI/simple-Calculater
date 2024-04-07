#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the opraters to perform action",
        type: "list",
        name: "oprater",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statment
if (answer.oprater === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.oprater === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.oprater === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.oprater === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid oprater");
}
