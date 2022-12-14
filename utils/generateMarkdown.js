// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${data.license}

  ## Description
  ${data.description}


  ## Table of Contents
  - [Installation](#installation)
  - [Usage Information](#usage-information)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)


  ## Installation
  ${data.installation}


  ## Usage Information
  ${data.usage}


  ## Contribution Guidelines
  ${data.contribution}


  ## Test Instructions:
  ${data.test}


  ## Questions
  If you have any questions please reach out at:

  https://github.com/${data.username}
  
  ${data.email}`
}

module.exports = generateMarkdown;
