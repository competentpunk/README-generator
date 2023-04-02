// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  let yourLicense = ``
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    yourLicense = `N/A`
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = license;
  let yourLicense = ``
  if(licenseType === 'MIT') {
    yourLicense = `[License: MIT](https://opensource.org/license/mit/)`
    // Find proper links to documentation BELOW
  } else if (licenseType === 'GPLv3') {
    yourLicense = `[GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `[GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    yourLicense = `N/A`
  }
  return yourLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseType = license;
  let yourLicense = ``
  if(licenseType === 'MIT') {
    yourLicense = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    yourLicense = `N/A`
  }
  return yourLicense;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  [Deployed Link: ](${data.deployedlink})


  ## Description

  ${data.motivation} 

  ${data.why}

  ${data.problemsolve}
  
  ${data.learn}
  `;
}

// Am I going into the other js files to get this info?


module.exports = generateMarkdown;
