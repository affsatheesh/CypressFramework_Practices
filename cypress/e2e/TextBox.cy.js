describe("TextBox Handling", () => {
  it("Normal Text Box", () => {
    cy.visit("https://www.leafground.com/input.xhtml");
    cy.get("div>input[id='j_idt88:name']").type("sathesh");
  });

  it("Enter Text and click on Enter button", () => {
    cy.visit("https://www.leafground.com/input.xhtml");
    cy.get("div>input[id='j_idt106:thisform:age']")
      .click()
      .type("sathesh{enter}");
  });

  it("without enter text and click on Enter button and verify", () => {
    cy.visit("https://www.leafground.com/input.xhtml");
    cy.get("div>input[id='j_idt106:thisform:age']").click().type("{enter}");
    cy.contains("Age is mandatory", { wait: 5000 });
  });

  it("clear and enter text", () => {
    cy.visit("https://www.leafground.com/input.xhtml");
    cy.get("div>input[id='j_idt88:j_idt91']").clear().type("sathesh");
  });
});
