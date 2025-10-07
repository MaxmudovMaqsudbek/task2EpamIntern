Feature: Verify Home page title

  Background:
    Given I open the "Home" page

  Scenario: Verify the title of "Home" page
    Then the page title should be "EPAM | Software Engineering & Product Development Services"
