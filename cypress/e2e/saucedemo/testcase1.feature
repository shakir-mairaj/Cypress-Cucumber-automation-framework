Feature: Invalid Login

  Scenario: Login with valid username and invalid password
    Given I am on the login page
    When I enter the correct username
    And I enter an invalid password
    And I click the login button
    Then I should see a password validation message
