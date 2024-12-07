describe("Radio Button", () => {
  it("handling Radio Button", () => {
    cy.visit("https://www.leafground.com/radio.xhtml");
    cy.get("input[id='j_idt87:console1:0']")
      .check({ force: true })
      .should("be.checked");
  });
});
