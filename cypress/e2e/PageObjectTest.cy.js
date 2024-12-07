import Login from "../PageObjects/LoginPage.js";

describe("PageObjectModelTest", () => {
  it("pageObjectTest", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    const hp = new Login();
    hp.setUserName("sathez");
    hp.setPasswrod("sathesh");
  });
});
