describe("Flipkart Usecases", () => {
  it("Add to Cart", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get(".Pke_EE[title='Search for Products, Brands and More']").type(
      "Iphone"
    );
    cy.wait(4000);
    cy.xpath("//div[@class='YGcVZO _2VHNef']").each(($value, index, $list) => {
      if ($value.text().includes("iphone 15")) {
        cy.log("its Iphone 15 =========================>>>");
        cy.wait(3000);
        cy.wrap($value).click({ force: true });
        return false;
      } else {
        cy.log("its not =========================>>>" + $value.text());
      }
    });

    // cy.pause();
    cy.wait(4000);
    cy.get("a.CGtC98").each(($value, index, $list) => {
      cy.log("its Iphone 15 =========================>>>" + $value.text());
      if ($value.text().includes("Apple iPhone 15 (Black, 128 GB)")) {
        cy.get($value).invoke("removeAttr", "target").click();
        cy.reload();
        cy.wait(3000);
        return false;
      }
    });

    cy.xpath("//button[normalize-space()='Buy Now']")
      .highlightAndClick()
      .should("be.visible")
      .click({ force: true });
    cy.wait(4000);
    cy.get(".sm7nRr").should("be.visible").click({ force: true });
  });
});
