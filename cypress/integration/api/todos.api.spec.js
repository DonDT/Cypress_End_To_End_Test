describe("test all the todos, using the API", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  let id;

  it(" should add a todo correctly using the api", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/todos",
      body: {
        name: "todo One Two Three",
        isComplete: false,
      },
    }).then((res) => {
      id = res.body.id;
      expect(res.status).to.eq(201);
      expect(res.body.name).to.eql("todo One Two Three");
    });
  });

  it("should get a specific todo correctly", () => {
    cy.request("GET", "http://localhost:8080/todos/" + id).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.name).to.eql("todo One Two Three");
    });
  });

  it("should update the status of a todo correctly", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:8080/todos/" + id,
      body: {
        name: "todo One Two",
        isComplete: true,
      },
    }).then((res) => {
      expect(res.body.isComplete).to.eql(true);
    });
  });

  it("should delete a command correctly", () => {
    cy.request("DELETE", "http://localhost:8080/todos/" + id).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});
