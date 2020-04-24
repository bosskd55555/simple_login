$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/search/Login.feature");
formatter.feature({
  "name": "Search by keywords",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Searching for a term-new",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "starter.stepdefinitions.SearchOnDuckDuckGoStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of the login page is Free CRM",
  "keyword": "When "
});
formatter.match({
  "location": "starter.stepdefinitions.SearchOnDuckDuckGoStepDefinitions.title_of_the_login_page_is_Free_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "starter.stepdefinitions.SearchOnDuckDuckGoStepDefinitions.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});