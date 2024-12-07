describe("Mouse Actions", () => {
  it("Mouse Hover", () => {
    cy.visit("https://www.leafground.com/button.xhtml");
    cy.get("div>button[id='j_idt88:j_idt100']").trigger("mouseover");
  });

  it("Mouse click", () => {
    cy.visit("https://www.leafground.com/button.xhtml");
    cy.get("div>button[id='j_idt88:j_idt100']").trigger("mouseenter");
  });

  it("check if button is disabled or not", () => {
    cy.visit("https://www.leafground.com/button.xhtml");

    cy.get("div>button[id='j_idt88:j_idt92']").should("be.disabled");
  });
});
