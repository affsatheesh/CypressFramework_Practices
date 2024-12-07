describe("CheckBox", () => {
  it("handle single checkbox", () => {
    cy.visit("https://www.leafground.com/checkbox.xhtml");
    cy.wait(4000);
    cy.get("div>input[id='j_idt87:j_idt89_input']")
      .check({ force: true })
      .should("be.checked");
  });
});
