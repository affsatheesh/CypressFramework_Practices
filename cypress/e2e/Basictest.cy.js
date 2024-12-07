describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
  it("failedTestcase", () => {
    cy.visit("https://example.cypress.io");
    cy.title().should("eq", "examplesss");
  });
});
