require("@4tw/cypress-drag-drop");
describe("Drag and Drop", () => {
  it("drag and drop handling", () => {
    cy.visit("https://www.leafground.com/drag.xhtml");
    cy.get("div[id='form:drag']").drag("div[id='form:drop_header']");
  });
});
