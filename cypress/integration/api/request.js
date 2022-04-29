///<reference types="Cypress"/>

describe("Request command suite", () => {
  it.skip("Get Request", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:8080/todos",
      qs: { id: 1 },
    }).then((res) => {
      // cy.log(res.statusText);
      // cy.log(res.status);
      // cy.log(res.duration);
      // cy.log(res.body);
      // cy.log(res.headers);

      expect(res.status).to.be.eq(200);
      expect(res.duration).to.be.below(20);
      //expect(res.body[0].isComplete).to.be.false;
    });
  });

  it.skip("POST REQUEST: it Creates a Todo", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/todos",
      body: {
        name: "TestEdiage___",
        isComplete: false,
      },
    }).then((res) => {
      expect(res.status).to.be.eq(201);
      expect(res.body.isComplete).to.be.eq(false);
    });
  });

  it.skip("PUT Request: it changes the status of isComplete property", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:8080/todos/9479",
      body: {
        name: "TestEdiage___",
        isComplete: true,
      },
    });
  });

  it.skip("DELETE: it deletes a todo", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:8080/todos/9479",
    });
  });

  it.skip("SECURE API", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:8080/courses",
      // Or use headers
      // auth: {
      //   bearer:
      //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhdGVtLmhhdGFtbGVoMTIxQGdtYWlsLmNvbSIsImlhdCI6MTY0ODgwNTgwMywiZXhwIjoxNjQ4ODA5NDAzLCJzdWIiOiI1In0.TgiXDZr_ceRYmgEH5_K-shJ_x8jdC1Kmgd_GOUfT2j8",
      // },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhdGVtLmhhdGFtbGVoMTIxQGdtYWlsLmNvbSIsImlhdCI6MTY0ODgwNTgwMywiZXhwIjoxNjQ4ODA5NDAzLCJzdWIiOiI1In0.TgiXDZr_ceRYmgEH5_K-shJ_x8jdC1Kmgd_GOUfT2j8",
      },
    });
  });
});

// ./node_modules/.bin/cypress install
// npx cypress open
// Changes to check git commit
