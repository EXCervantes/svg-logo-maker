// Necessary packages and modules
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");
const { Circle, Square, Triangle } = ('./shapes.js');

// text
// color
// shape

// Questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your TEXT to be shown in the shape:",
        name: "text",
        validate: function (answer) {
            if (answer.length < 5) return true;
            return console.log("Please enter less than 5 characters for the TEXT.");
        }
    },
    {
        type: "input",
        message: "Enter the color name or a hexadecimal number value for the TEXT:",
        name: "text-color",
        validate: function (answer) {
            if (answer.length > 2) return true;
            return console.log("Please enter a valid color or hexadecimal number.");
        }
    },
    {
        type: "input",
        message: "Enter the color name or a hexadecimal number value for the SHAPE:",
        name: "shape-color",
        validate: function (answer) {
            if (answer.length > 2) return true;
            return console.log("Please enter a valid color or hexadecimal number.");
        }
    },
    {
        type: "list",
        message: "Choose a the shape you would like:",
        name: "shape",
        choices: [
            "Circle",
            "Square",
            "Triangle",
        ],
    },
];

// Write question data to file
function writeToFile(fileName, data) {
    const logoShape = generateMarkdown(data);

    fs.writeFile(fileName, logoShape, (err) =>
        err
            ? console.log(colors.bgBrightRed(err))
            : console.log(colors.bgBrightGreen("Success! Enjoy your shiny new README."))
    );
}

// Initialize app and create the shape file
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("logo.svg", data)
        });
}

// Call the initialization function
init();
