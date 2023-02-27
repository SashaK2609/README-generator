// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)};
## Table of Content
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contribiting)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)};
## Description
${data.description}
## Instalation
${data.instalation}
## Usage
${data.usage}
## License
This progect is licensed under the ${renderLicenseSection(data.license)} license
## Contributing
Contributors: ${data.contributing}

## Tests
The following is needed to run the test: ${data.tests}
## Questions
If you have any questions about the project contact me by:
- Email - ${data.email}
- GitHub - [${data.creator}](https://github.com/${data.creator})
`;
}

module.exports = generateMarkdown;
