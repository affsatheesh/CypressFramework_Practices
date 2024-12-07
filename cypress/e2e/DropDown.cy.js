describe("Dropdown Handling", () => {
  it.skip("Static Dropdown", () => {
    cy.visit("https://practice.expandtesting.com/dropdown");
    cy.get("#dropdown").select("Option 1");
    cy.get("#elementsPerPageSelect").select("50");
  });

  it.skip("dynamic Dropdown", () => {
    cy.visit("https://google.co.in");
    cy.get("[name='q']").type("thoughtworks");
    cy.wait(4000);
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      cy.log("its value of the dropdown =======>  " + $el.text());
      if ($el.text() == "thoughtworks") {
        cy.log("We should select this value ===========>  " + $el);
        cy.wrap($el).click();
        return false;
      } else {
        cy.log("its not match ==============>");
      }
    });
  });

  it.skip("inbuild commands Dropdown", () => {
    cy.visit("https://google.co.in");
    cy.get("[name='q']").type("thoughtworks");
    cy.wait(4000);
    cy.handleDropdown("div.wM6W7d>span", "thoughtworks");
  });

  it("dropdown Handling on testleaf", () => {
    cy.visit("https://www.leafground.com/select.xhtml");
    cy.wait(4000);
    cy.get("div>select.ui-selectonemenu").select("Selenium");
  });

  it.only("dropdown 2 Handling on testleaf", () => {
    cy.visit("https://www.leafground.com/select.xhtml");
    cy.wait(4000);
    cy.get("div>ul>li>input[id='j_idt87:auto-complete_input']").type(
      "{enter}AWS{enter}"
    );
    //cy.get("div>select.ui-selectonemenu").select("Selenium");
  });
});
