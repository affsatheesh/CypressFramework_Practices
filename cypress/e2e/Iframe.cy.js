describe("Iframe Handling", () => {
  it("single Frame", () => {
    cy.visit("https://www.leafground.com/frame.xhtml");

    // const iframe = cy.get("iframe[src='default.xhtml']").its('0.contentDocument.body').should('be.visible').then(cy.wrap).within(() => {
    //  cy.get('#Click').click();
    cy.getIframeBody('iframe[src="default.xhtml"]').within(() => {
      cy.get("#Click").click();
    });
  });

  it("Multiple Frame", () => {
    cy.visit("https://www.leafground.com/frame.xhtml");

    cy.getIframeBody("iframe[src='page.xhtml']").within(() => {
      cy.getIframeBody("iframe[src='framebutton.xhtml']").within(() => {
        cy.get("#Click").click();
      });
    });
  });
});
