@board @list @cardFail
Feature: Cards Fail

  Testing the creation, update and deleting of cards bypassing rules

  Cases:
  -Creating a card with an invalid idList
  -Creating a card without an token or key
  -Try to update a card that is nonexistent and expect an error
  -Try to update a card without an token or key
  -Try to delete a nonexistent card
  -Try to delete a card without an token or key


  Scenario: Creating a card with an invalid List
    When I try to create a card without a List
    Then card is not created

  @card
  Scenario: Try to update a card that is nonexistent and expect an error
    Given I try to create a card
    When I try to update a card with an invalid id
    Then card is not updated


  @card
  Scenario: Try to delete an nonexistent card
    Given I try to create a card
    When I try to delete a card with an invalid id
    Then the card is not deleted

  Scenario: Creating a card without an token or key
    When I try to create a card with an invalid token
    Then card is not created

  @card @only
  Scenario: Try to update a card without an token or key
    Given I try to create a card
    When I try to update a card with an invalid key
    Then card is not updated

  @card
  Scenario: Try to delete a card without an token or key
    Given I try to create a card
    When I try to delete a card with an invalid key
    Then the card is not deleted