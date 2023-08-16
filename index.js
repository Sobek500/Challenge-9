const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is a general description of the project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installlation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the test instructions?',
    },
  ]);
};

const generateREADME = ({ title, description, install, usage, contribution, test }) =>
  `# ${title}

## Description
    ${description}

## Installation
    ${install}

## Usage
    ${usage}

## Contribution Guidelines
    ${contribution}

## Test Instructions
    ${test}`;


const init = () => {
  promptUser()
    .then((answers) => writeFile('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
