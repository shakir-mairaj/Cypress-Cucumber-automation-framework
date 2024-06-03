                                                 Cypress Cucumber framework steps

•	Install node js and npm
•	Install and open Vs code
•	Create a directory for project
•	Open that folder in vs code
•	Enter npm init command in vs code terminal to provide package details
•	Install cypress using npm install cypress --save-dev
•	Install cucumber pre-processor using command npm install cypress-cucumber-preprocessor --save-dev
•	Modify cypress.config and package.json to provide support for feature files and step definitions
•	In cypress folder, create a folder e2e which contains feature files as .feature and step definition files as .js
•	Manage test data using fixtures – storing test data in fixtures folder in json format
•	Base url set in cypress.config.js file
•	Create custom command for login- store in support-commands.js file
•	Run cypress using npx cypress open  to run feature files 
•	For reports install mocha awesome reporter using command npm install --save-dev cypress-mochawesome-reporter  and set reports configuration parameters in  cypress. config.js file
•	After running test cases in cypress, reports will be generated in reports folder as html file.
