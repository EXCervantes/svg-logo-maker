# Svg Logo Maker

## Description

This is an application for generating a logo in the format of a SVG. It uses prompts with questions for a user. This utilizes the packages "Inquirer", "File System (FS)", and "Colors". In addition, uses those packages with the Node language manager to generate the SVG file using the collected data from the questions posed to the user.

TODO: Describe testing
  
## Installation

First to use this application head to the [SVG Logo Maker](https://github.com/EXCervantes/svg-logo-maker) and clone the repository. To learn how to clone a repository checkout this guide [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

You must have `node` installed on your system. Go [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) for instructions on how to do so.

Then in the Terminal run `npm install` to install both the `inquirer@8.2.4` and `colors` packages. For help on these click [here](https://www.npmjs.com/package/inquirer/v/8.2.4) for `inquirer` or [here](https://www.npmjs.com/package/colors) for `colors`. Finally to initialize this application run `node index.js` in the Terminal.

TODO: Installing Jest
  
## Usage
  
To run the application open the Terminal or GitBash in VSCode and run `node index.js`. The application will ask a series of questions about the project using the `inquirer` package.

Once the data is entered, the application will generate a SVG file using the code from the files respective to the user's chosen shape along with the parent class code file. It will write the file via `fs.writeFile` titled `logo.svg`. The `logo.svg` file will have the chosen shape, text, text color, and shape color. There is an example of a file created with this application that can be found [here](/logo.svg).

TODO: Testing

### Video Demonstrating Application In Use

Here is a [link](TODO) to a video demonstrating how this application works.

### Screenshots of the Application

![Screenshot 1](assets/images/SVGLogoMakerscreenshot1.jpg)
![Screenshot 2](assets/images/SVGLogoMakerscreenshot2.jpg)
![Screenshot 3](assets/images/SVGLogoMakerscreenshot3.jpg)

## Credits

Referenced for class constructors

"_node.js - How to set default value for an answer using inquirer? - Stack Overflow_. (2022, January 24). Stack Overflow. Retrieved June 6, 2024, from https://stackoverflow.com/questions/70827997/modify-the-constructor-function-of-a-class
  
## License

This project is licensed under [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Please see the [License](https://opensource.org/licenses/MIT) page for more info.
