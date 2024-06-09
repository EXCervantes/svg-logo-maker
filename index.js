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
            if (answer.length > 0 && answer.length < 5) return true;
            return console.log("Please enter less than 5 characters for the TEXT.");
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

// Write question data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err
            ? console.log(colors.bgBrightRed(err))
            : console.log(colors.bgBrightGreen("Success! Shape and text written to file."))
    );
}

// Initialize app and create the shape file
function init() {
    let svgData = "";
    let svgFile = "logo.svg";


    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data)
            userTextColor = data.textcolor
            userShapeColor = data.shapecolor
            userShapeType = data.shape
            console.log(userTextColor, userShapeColor, userShapeType)
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
            // userShapeColor.setColor(questions.shapecolor);
            userShape.setColor(userShapeColor)

            const svgData = userShape.render()
            console.log(svgData)

            // writeToFile(svgFile, svgData)
        });
}

// const svg = new Svg();
// svg.setTextElement(questions.text, questions.textcolor);
// svg.setShapeElement(questions.shape);
// svgString = svg.render();
// return createSvgElement();

// Call the initialization function
init();
