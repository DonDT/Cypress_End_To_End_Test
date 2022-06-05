///<reference types="Cypress" />

describe("Todo UI testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("should add a new todo correctly", () => {
    // Get the input field type data, and submit with enter
    // The as('postRequest') => now the post request has a name an alias
    cy.intercept("POST", "http://localhost:8080/todos").as("postRequest");
    cy.addNewTodo("Today wednessday May 11");
    // validation, we can catch the request here and validate the data
    cy.wait("@postRequest").then((xhr) => {
      expect(xhr.request.body.name).to.eql("Today wednessday May 11");
    });
    cy.get(".todo-item")
      .last()
      .should("contain.text", "Today wednessday May 11");
  });

  it("Should be able to toggle the status of a todo correctly", () => {
    cy.addNewTodo('Sixth of April"');
    cy.get(".todo-item").last().should("contain.text", "Sixth of April");
    cy.get(".todo-checkbox").last().check().should("be.checked");
    cy.get(".todo-checkbox").last().uncheck().should("be.not.checked");
  });

  it("Should delete a todo correctly", () => {
    cy.addNewTodo("Next in line todo");
    cy.get(".delete-item").click();
  });

  it("should not add an empty testcase", () => {
    cy.addNewTodo(" ");
  });

  afterEach(() => {
    cy.get("body").then((el) => {
      // Has access to all elements in the body
      if (el.find(".delete-item").length > 0) {
        cy.get(".delete-item").click({ multiple: true });
      }
    });
  });
});

// ./node_modules/.bin/cypress install
// npx cypress open

// Run cypress in a headless mode, implying run cypress without a browser
// npx cypress run => runs all three spec files
// Runs only a specific spec file
// npx cypress run --spec "cypress/integration/ui/todos.spec.js"
// Runs all the spec file inside a folder
// npx cypress run --spec "cypress/integration/ui/*.js"
// Runs cypress from a specific browser
// npx cypress run --browser firefox
// Runs on a browser, in headless mode
// npx cypress run --browser firefox --headless

// flaky test => I can tell cypress to rn the tests a number of times. If // the test passes sometimes and fails fails on other times, then it is flaky.

// running a particular spec file on cypress dashboard
// npx cypress run --record --key f46c7c5f-c593-469b-937b-ae633ea72e3b --spec cypress/integration/ui/todos.specs.js

// Adding a tag
// npx cypress run --record --key f46c7c5f-c593-469b-937b-ae633ea72e3b --spec cypress/integration/ui/todos.specs.js  --tag "todos us"
//
