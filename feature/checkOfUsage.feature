Feature: Appointment Planner Management

  Scenario: Verify the page title
    Given the user opens the Appointment Planner dashboard
    Then the page title should be Appointment Planner

  Scenario: Create a doctor without email
    Given the user opens the Appointment Planner dashboard
    When the user move to Doctors section
    And the user clicks Add New Doctor
    And the user enters the name to input
    And the user saves the doctor
    Then an email error is shown
    And the user closes the dialog

  Scenario: Verify patient list size
    Given the user opens the Appointment Planner dashboard
    When the user navigates to Patients section
    Then the patient grid should have more than 7 rows