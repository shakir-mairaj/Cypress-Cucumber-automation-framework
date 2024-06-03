Feature: Order and Checkout

  Scenario: Complete an Order and checkout
    Given I open the Sauce Demo website
    When I login with correct username and valid password
    And I add a product to the cart
    And I checkout via the cart page
    And I fill in all required information
    And I complete the checkout
    Then I should see the checkout completion message
    And I should see the order dispatched message
