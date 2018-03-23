# random-phone-number-generator
[![Build Status](https://travis-ci.org/azeezolaniran2016/random-phone-number-generator.svg?branch=master)](https://travis-ci.org/azeezolaniran2016/random-phone-number-generator)  [![Coverage Status](https://coveralls.io/repos/github/azeezolaniran2016/random-phone-number-generator/badge.svg?branch=master)](https://coveralls.io/github/azeezolaniran2016/random-phone-number-generator?branch=master)

### Introduction
Random phone number generator is a CLI application that allows you generate random 10 digit mobile numbers each starting with zero. Along with generating the mobile numbers, it does the following:
- All mobile numbers generated overtime are persited to a file in the current working directory.
- All mobile numbers generated are unique in relation to all previously generated and persisted mobile numbers.

### Requirements
To be able to use the application locally, the following are required:
- [Node.JS]
- [Node Package Manager (npm)]

### How To Use
This can be easily installed locally through these steps:
- Clone the repository locally
- Run `npm install` to install dependent Node packages
- Run `node index.js --help` to view all command and option available
- Run `node index.js <command> <--option1> <--option2>` to perform a specific command

### How To Test
This application can be tested locally by running `npm test`


### Roadmap
[Project Roadmap](https://trello.com/b/sNemFDtP/random-phone-number-generator)

### Contributors
- [Azeez Olaniran](https://github.com/azeezolaniran2016)

## How to Contribute
1. Fork this repository to your GitHub account
2. Clone the forked repository
3. Create your feature branch
4. Commit your changes
5. Push to the remote branch
6. Open a Pull Request

## Task List
- [x] Setup Version Control System
- [x] Setup CI/CD using Travis for builds and Coveralls for coverage reporting
- [x] Add Unit tests
- [x] Implement core modules - Generator, Repo, and Util
- [x] Add entry cli module
- [ ] Add options to allow truncating/paginating through command results
- [ ] Setup code style linting checks
- [ ] More research and improve unique random number generation algorithm
- [ ] Expose Rest conforming API
- [ ] Improve UI/UX - Switch from CLI to Web UI

## Technologies
random-phone-number-generator is implemented using a number of technologies, these include:
* [Node.JS] - Evented I/O for the backend
* [commander] - The complete solution for node.js command-line interfaces

   [Node.JS]: <http://nodejs.org>
   [Node Package Manager (npm)]: <https://www.npmjs.com>
   [commander]: <https://www.npmjs.com/package/commander>
