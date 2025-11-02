Feature: Verify the global navigation menu across all pages

  Background:
    Given I open the "Home" page

  Scenario Outline: Verify that the navigation menu is visible and consistent on all main pages
    Given I open the "<page>" page
    Then the navigation menu should be displayed at the top of the page
    And it should contain main links such as "Insights", "Services", "Industries", "About", and "Careers"

    Examples:
      | page        |
      | Home        |
      | Services    |
      | About       |
      | Careers     |

  Scenario: Verify that clicking a menu item navigates correctly
    When I click the "Industries" link in the navigation menu
    Then I should be redirected to the "Industries" page
    And the page title should contain "Industries"
