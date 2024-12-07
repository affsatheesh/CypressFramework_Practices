describe("AlertHandling", () => {
  it("Alert Ok", () => {
    cy.visit("https://www.leafground.com/alert.xhtml");
    cy.xpath(
      "//h5[text()=' Alert (Simple Dialog)']//following::button[1]"
    ).click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("I am simple alert.");
    });
  });

  it("Alert with inputbox", () => {
    cy.visit("https://www.leafground.com/alert.xhtml");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Sathesh");
    });
    cy.xpath(
      "//h5[text()=' Alert (Prompt Dialog)']//following::button[1]"
    ).click();
  });

  it("Alert confirm", () => {
    cy.visit("https://www.leafground.com/alert.xhtml");
    cy.xpath(
      "//h5[text()=' Alert (Confirm Dialog)']//following::button[1]"
    ).click();
    cy.on("window:confirm", (text) => {
      expect(text).to.contains("Did you call me?");
    });
  });
  it("Alert cancel", () => {
    cy.visit("https://www.leafground.com/alert.xhtml");
    cy.xpath(
      "//h5[text()=' Alert (Confirm Dialog)']//following::button[1]"
    ).click();
    cy.on("window:confirm", () => {
      false;
    });
  });
});
