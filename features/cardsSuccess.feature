@card @list @board
Feature: Cards Successful

    Testing the creation, update and deleting of cards
    
    Cases:
    -Creating a card with success
    -Update a existing card
    -Delete a card that exists
    -Search a card


  Scenario: Creating a card with success
    When I try to create a card
    Then card is created

  Scenario: Searching a card with success
    Given I created a card
    When I try to search a card
    Then the card was founded

  Scenario: Update a existing card
    Given I created a card
    When I try to update a card
    Then card is updated

  @preventDelete
  Scenario: Delete a card that exists
    Given I created a card
    When I try to delete a card
    Then the card was deleted with success