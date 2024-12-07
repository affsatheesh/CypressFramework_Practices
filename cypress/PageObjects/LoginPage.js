class Login {
  txtUserName = "[name='username']";
  txtPassword = "[name='password']";

  setUserName(username) {
    cy.get(this.txtUserName).type(username);
  }
  setPasswrod(password) {
    cy.get(this.txtPassword).type(password);
  }
}

export default Login;
