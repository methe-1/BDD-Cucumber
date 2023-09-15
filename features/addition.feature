Feature: Addition
  In order to perform roman numeral arithmetics
  As a developer
  I want to add two roman numbers together

  Scenario: basic addition
    Given I have the number 2
    When I add it to the number 4
    Then the result should be the number 6