describe("Hooks Concept", () => {
  it("testcase", () => {
    cy.log("its testcase");
  });
  it.only("only testcase", () => {
    cy.log("its only testcase");
  });
});

before(() => {
  cy.log("before Method");
});

after(() => {
  cy.log("After method");
});

beforeEach(() => {
  cy.log("beforeEach emthod");
});

afterEach(() => {
  cy.log("aftereach method");
});
