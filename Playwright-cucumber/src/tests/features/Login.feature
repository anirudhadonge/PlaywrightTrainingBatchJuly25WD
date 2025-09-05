Feature:Login Feature


Scenario: Login Scenario
Given Navigate to Application
Then I enter username and password
Then I validate login is successfull

@smoke
Scenario Outline: Login with example
Given Navigate to Application
Then I enter "<username>" and "<password>"
Then I validate login is successfull

Examples:
|username|password|
|anirudha.donge@gmail.com|password25|