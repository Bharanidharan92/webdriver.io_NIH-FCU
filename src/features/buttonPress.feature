Feature: Test button press
    As a developer
    I want to be able to test if a certain action is performed when a certain
    button is pressed

     Scenario: Test if element responds to button press
        Given I open the site "/"
        Given the username for Login
        Given the password for Login
        Given click Login button
