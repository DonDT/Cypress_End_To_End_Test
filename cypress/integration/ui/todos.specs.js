///<reference types="Cypress" />

describe("Todo UI testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.skip("should add a new todo correctly", () => {
    // Get the input field type data, and submit with enter
    cy.addNewTodo("First today April first");
    cy.get(".todo-item")
      .last()
      .should("contain.text", "First today April first");
  });

  it.skip("Should be able to toggle the status of a todo correctly", () => {
    cy.addNewTodo('Sixth of April"');
    cy.get(".todo-item").last().should("contain.text", "Sixth of April");
    cy.get(".todo-checkbox").last().check().should("be.checked");
    cy.get(".todo-checkbox").last().uncheck().should("be.not.checked");
  });

  it.skip("Should delete a todo correctly", () => {
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
