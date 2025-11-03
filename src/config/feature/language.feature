Feature: Verify language translation feature

  Background:
    Given I open the "Home" page

  Scenario: Verify the language translation functionality
    Given I am on the "Home" page with the default language set to English
    When I click the language selector button
    Then a list of available languages should be displayed
    And I should be able to select my preferred language
    And the page content should update to the selected language
