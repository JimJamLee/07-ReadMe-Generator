// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Input your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide any applicable usage information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide any applicable contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide any applicable test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select an applicable license for this project:',
        choices: [
            {
                name: `Do What the F*** You Want to Public License`,
                value: `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`,
            },
            {
                name: `Mozilla Public License 2.0`,
                value: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
            },
            {
                name: `IBM Public License Version 1.0`,
                value: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
            },
            {
                name: `Eclipse Public License 1.0`,
                value: `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
            },
            {
                name: `Boost Software License 1.0`,
                value: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
            },
            {
                name: `Apache 2.0`,
                value: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
            }      
        ]
    },
    {
        type: `input`,
        name: `username`,
        message: `Provide your GitHub username.`,
    },
    {
        type: `input`,
        name: `email`,
        message: `Provide your email address.`,
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync('./output/README.md', generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data)
    })
        .then(() => console.log(`Successfully generated README!`))
        .catch((err) => console.log(err))
}

// Function call to initialize app
init();