describe("File Upload", () => {
  it("single File Upload", () => {
    cy.visit("https://www.leafground.com/file.xhtml");
    cy.get("span>input[id='j_idt88:j_idt89_input']").attachFile("testfile.pdf");
  });
});
