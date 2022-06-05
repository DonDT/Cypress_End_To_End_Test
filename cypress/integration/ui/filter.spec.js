describe.skip("filter functionality test cases", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "http://localhost:8080/todos",
      },
      {
        fixture: "todos",
      }
    );

    cy.visit("/");
    // const todosExamples = [
    //   "My first tODo",
    //   "My second tODo",
    //   "My third tODo",
    //   "My fourth tODo",
    //   "My last tODo",
    // ];
    // todosExamples.forEach((td) => {
    //   cy.addNewTodo(td);
    // });
    // cy.get(".todo-checkbox").first().check().should("be.checked");
    // cy.get(".todo-checkbox").last().check().should("be.checked");

    // cy.addTestTodos();
  });

  it.skip("Should filter the completed todos correctly", () => {
    // Intercept Command, used to monitor, intercept and change http requests
    // cy.intercept({});
    // cy.contains("Active").click();
    // cy.url().should("contain", "/active");
    // cy.get(".todo-checkbox").each((ele) => {
    //   cy.wrap(ele).should("not.be.checked");
    // });
  });

  //
  // after(() => {
  //   cy.get("body").then((el) => {
  //     if (el.find(".delete-item").length > 0) {
  //       cy.get(".delete-item").click({ multiple: true });
  //     }
  //   });
  // });
  //
});
