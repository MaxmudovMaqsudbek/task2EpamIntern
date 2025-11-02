Feature: Toggle between Light and Dark Modes

  Background:
    Given I open the "Home" page

  Scenario: Verify toggling between Light and Dark modes
    Given I am on the "Home" page with the default (Light) mode enabled
    When I click the toggle button for Dark/Light mode
    Then the entire page should switch to Dark mode
    And the mode should persist across all visible sections
