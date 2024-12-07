describe("Fixtures Usecases", () => {
  it("fetch login testdata", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.fixture("example").then((data) => {
      cy.get("[name='username']").type(data.Username);
      // cy.pause()
      cy.get("[name='password']").type(data.Password);
    });
  });
});
