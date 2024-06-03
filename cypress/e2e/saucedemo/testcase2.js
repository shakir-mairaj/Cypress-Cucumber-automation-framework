import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import userData from '../../fixtures/users.json';

// Valid Login,Filter Products and Add to Cart
Given("I open the Sauce Demo website", () => {
    cy.visit("/");
  });
  
  When("I login with correct username and valid password", () => {
    cy.login(userData.users[0], userData.password);
  });
  
  When("I filter products by Price low to high", () => {
    cy.get(".product_sort_container").select("Price (low to high)");
  });
  
  When("I add the first listed product to the cart", () => {
    cy.get(".inventory_item").first().find(".btn_inventory").click();
  });
  
  When("I add the last listed product to the cart", () => {
    cy.get(".inventory_item").last().find(".btn_inventory").click();
  });
  
  When("I click on the cart icon", () => {
    cy.get(".shopping_cart_link").click();
  });
  
  Then("I should see the first listed product details in the cart", () => {
    cy.get(".cart_item").first().should("contain", "Sauce Labs");
    cy.get(".cart_item").first().should("contain", "$");
  });
  
  Then("I should see the last listed product details in the cart", () => {
    cy.get(".cart_item").last().should("contain", "Sauce Labs");
    cy.get(".cart_item").last().should("contain", "$");
  });
  