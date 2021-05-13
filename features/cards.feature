@caique
Feature: Cards

    Testing the creation, update and deleting of cards
    
    Cases:
    -Creating a card with success
    -Update a existing card
    -Try to update a card that is inexistent and expect an error
    -Delete a card that exists
    -Try to delete an inexistent card and exepect an error

  Scenario: Creating a card with success
    Given I try to create a card
    When i make the call
    Then is expected the status code 201

  Scenario: Update a existing card
    Given I try to update a card
    When i make the call
    Then is expected the status code 200

  Scenario: Try to update a card that is inexistent and expect an error
    Given I try to update a card
    When I make the call
    Then is expected the status code 404

  Scenario: Delete a card that exists
    Given I try to delete a card
    When i make the call
    Then is expected the status code 200

  Scenario: Try to delete an inexistent card and exepect an error
    Given I try to delete a card
    When i make the call
    Then is expected the status code 404
    And the card is not deleted