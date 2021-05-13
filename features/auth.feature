Feature: Authentication

    Testing the authentication of token API key for Trello.
    
    Cases:
    -Test a valid key and expect success
    -Test a invalid key and expect an error

  Scenario: Authentication success
    Given that i try to get API token
    When I do the call
    Then is expected status code 200
    And the response will contain the access token