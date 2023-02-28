//function that will show the badge of the license based on user's choise
function renderLicenseBadge(license) {
	if (license !== "none") {
		return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
	} else
	return "";
};

//function to create a license link
// function renderLicenseLink(license) {
// 	if (license !== "none") {
// 		return `\n [License](#license)\n`;
// 	} else
// 	return "";
// };

//function that returns license section of README
function renderLicenseSection(license) {
	if (license !== "none") {
		return `## License
		This progect is licensed under the ${license} license.`;
	} else
	return "";
};


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)};
## Table of Content
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contribiting)
* [Tests](#tests)
* [Questions](#questions)
////${renderLicenseLink(data.license)};
## Description
${data.description}
## Instalation
${data.instalation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)} 
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
