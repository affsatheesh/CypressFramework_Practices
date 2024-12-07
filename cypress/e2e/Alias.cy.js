describe("Alias Usecases", () => {
  it("alias", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("[name='username']").as("UserName").type("admin");
    cy.get("@UserName").dblclick();
  });
});
