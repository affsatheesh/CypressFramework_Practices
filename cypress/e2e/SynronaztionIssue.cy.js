describe("Syn issue", () => {
  it("handling syn issue", () => {
    cy.visit("https://www.leafground.com/waits.xhtml");
    cy.get("button[id='j_idt87:j_idt89']").click();
    cy.get("button[id='j_idt87:j_idt90']", { timeout: 15000 }).should(
      "be.visible"
    );
  });
});
