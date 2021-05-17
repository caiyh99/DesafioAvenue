@board @listSetup
Feature: Lists

  Testing the creation, update and archiving of lists

  Cases:
  -Create a list
  -Edit a list
  -Archive a list
  -Unarchive a list

  Scenario: Create a list
    Given I have created a board
    When I try to create a list
    Then the list was created

  Scenario: Edit a list
    Given I have created a board
    And I create a list
    When I try to update a list
    Then the list was updated

  Scenario: Archive a list
    Given I have created a board
    And I create a list
    When I try to archive a list
    Then the list is archived
@only
  Scenario: Unarchive a list
    Given I have created a board
    And I create a list
    And I archive a list
    When I try to unarchive a list
    Then the list is unarchived