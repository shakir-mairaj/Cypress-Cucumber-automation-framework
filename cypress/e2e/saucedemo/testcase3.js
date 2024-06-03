import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import userData from '../../fixtures/users.json';
import checkoutData from '../../fixtures/checkoutData.json';

// Add to Cart and Checkout
Given("I open the Sauce Demo website", () => {
  cy.visit("/");
});

When("I login with correct username and valid password", () => {
  cy.login(userData.username, userData.password);
});

When("I add a product to the cart", () => {
  cy.get(".inventory_item").first().find(".btn_inventory").click();
});

When("I checkout via the cart page", () => {
  cy.get(".shopping_cart_link").click();
  cy.get(".checkout_button").click();
});

When("I fill in all required information", () => {
  cy.get("#first-name").type(checkoutData.firstName);
  cy.get("#last-name").type(checkoutData.lastName);
  cy.get("#postal-code").type(checkoutData.postalCode);
  cy.get(".checkout_buttons .btn_primary").click();
});

When("I complete the checkout", () => {
  cy.get(".summary_total_label").should("contain", "Total:");
  cy.get(".cart_footer .btn_action").click();
});

Then("I should see the checkout completion message", () => {
  cy.get(".header_secondary_container").should("contain", "Checkout: Complete!");
});

Then("I should see the order dispatched message", () => {
  cy.get(".checkout_complete_container").should("contain", "Your order has been dispatched");
});
