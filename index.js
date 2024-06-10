// Necessary packages and modules
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");
const { Circle, Square, Triangle } = require('./lib/shapes.js');

// Questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your TEXT to be shown in the shape:",
        name: "text",
        validate: function (answer) {
            if (answer.length > 0 && answer.length < 4) return true;
            return console.log("Please enter less than 5 characters and more than 1 letter for the TEXT.");
        }
    },
    {
        type: "input",
        message: "Enter the color name or a hexadecimal number value for the TEXT:",
        name: "textcolor",
        validate: function (answer) {
            if (answer.length > 2) return true;
            return console.log("Please enter a valid color or hexadecimal number.");
        }
    },
    {
        type: "input",
        message: "Enter the color name or a hexadecimal number value for the SHAPE:",
        name: "shapecolor",
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

// Write questions data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err
            ? console.log(colors.bgBrightRed(err))
            : console.log(colors.bgBrightGreen("Generated logo.svg"))
    );
}

// Initialize app questions and create the shape file
function init() {
    let svgData = "";
    let svgFile = "logo.svg";


    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data)
            userText = data.text
            userTextColor = data.textcolor
            userShapeColor = data.shapecolor
            userShapeType = data.shape
            let userShape;
            if (userShapeType === "Triangle") {
                userShape = new Triangle();
            }
            if (userShapeType === "Circle") {
                userShape = new Circle();
            }
            if (userShapeType === "Square") {
                userShape = new Square();
            }
            userShape.setColor(userShapeColor)
            userShape.setText(userText, userTextColor)

            const svgData = userShape.render()
            console.log(svgData)

            writeToFile(svgFile, svgData)
        });
}

// Call the initialization function
init();
