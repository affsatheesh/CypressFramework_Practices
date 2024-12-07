// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="Cypress" />
///<reference types="cypress-xpath" />

Cypress.Commands.add("getIframeBody", (iframeSelector) => {
  return cy
    .get(iframeSelector)
    .its("0.contentDocument.body")
    .should("be.visible");
});
Cypress.Commands.add("simulateNewTab", (url) => {
  cy.window().then((win) => {
    cy.stub(win, "open").callsFake((url, target) => {
      if (target === "_blank") {
        cy.visit(url); // Simulate opening in the same context
      }
    });
  });
});

Cypress.Commands.add("handleDropdown", (Selector, Value) => {
  cy.get(Selector).each(($el, index, $list) => {
    cy.log("its value of the dropdown =======>  " + $el.text());
    if ($el.text() == Value) {
      cy.log("We should select this value ===========>  " + $el);
      cy.wrap($el).click();
      return false;
    } else {
      cy.log("its not match ==============>");
    }
  });
});

Cypress.Commands.add(
  "highlightAndClick",
  { prevSubject: "element" },
  (subject) => {
    // Apply highlight style
    cy.wrap(subject).then(($el) => {
      const originalStyle = $el.attr("style") || "";
      $el.css({
        border: "2px solid red", // Red border
        color: "red", // Red text color
        "font-weight": "bold", // Bold text
      });

      // Wait for a brief moment to see the highlight
      cy.wait(500);

      // Click the element
      cy.wrap($el).click();

      // Revert to the original style after clicking
      cy.wrap($el).then(() => {
        $el.attr("style", originalStyle);
      });
    });
  }
);
