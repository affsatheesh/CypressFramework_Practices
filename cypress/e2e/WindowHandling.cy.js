describe("Window Handling", () => {
  it("single Window Handling", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get("div[class='button float-left'] a[class='main-btn']").click();
    });
  });
});
