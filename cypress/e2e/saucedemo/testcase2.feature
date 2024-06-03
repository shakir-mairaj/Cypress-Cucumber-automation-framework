Feature: Valid Login and Add to Cart

  Scenario: Login, Filter products and add to cart
    Given I open the Sauce Demo website
    When I login with correct username and valid password
    And I filter products by Price low to high
    And I add the first listed product to the cart
    And I add the last listed product to the cart
    And I click on the cart icon
    Then I should see the first listed product details in the cart
    And I should see the last listed product details in the cart
