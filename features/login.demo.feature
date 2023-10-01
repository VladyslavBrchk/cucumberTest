Feature: Test Login Functionality via URL

  Scenario Outline: check login with valid and invalid credentials
    Given user is on login page
    When user enters <username> and <password>
    And clicks on login button
    Then user is navigated to the page with <url>

    Examples: 
      | username      | password      | url                                      |
      | standard_user | secret_sauce  | https://www.saucedemo.com/inventory.html |
      | standarD_user | secret_sauce  | https://www.saucedemo.com/               |
      | standard_user | secret_saucep | https://www.saucedemo.com/               |
