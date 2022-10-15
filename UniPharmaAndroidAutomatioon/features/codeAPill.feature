Feature: Smoke Test cases

 @androidApp
    Scenario: User Search the available medicine
      Given User launch the app
      When User search for "Crocin" medicine
  
  @androidApp
    Scenario: User Search the available medicine
      Given User launch the app
      When User add most bought item
      Then Medicine displayed in Selected Medicine Section
      When User click start looking for them button
      Then User navigate to shop results page
      And Pharmacy name, distance and rating is displayed
      And Order button is displayed

  @androidApp
    Scenario: User Search the available medicine
      Given User launch the app
      When User add most bought item
      Then Medicine displayed in Selected Medicine Section
      When User click on remmove button
      Then Medicine removed from Selected Medicine Section



 