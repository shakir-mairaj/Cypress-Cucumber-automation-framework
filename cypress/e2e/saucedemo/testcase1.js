import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import userData from '../../fixtures/users.json';

// Invalid Login and message validation
Given('I am on the login page', () => {
  cy.visit('/');
});

When('I enter the correct username', () => {
  cy.get('#user-name').type(userData.users[0]);
});

When('I enter an invalid password', () => {
  cy.get('#password').type('invalid_password');
});

When('I click the login button', () => {
  cy.get('#login-button').click();
});

Then('I should see a password validation message', () => {
  cy.get('.error-message-container').should('contain.text', 'Username and password do not match');
});