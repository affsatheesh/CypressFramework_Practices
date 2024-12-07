describe("calendar Handling", () => {
  it("Static Calendar", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.frameLoaded("#frame-one796456169");
    cy.iframe("#frame-one796456169").within(() => {
      let year = "1996";
      let expectedMonth = "4";
      let day = "12";
      calendarHanlde(year, expectedMonth, day);
    });
  });
});

function calendarHanlde(year, month, day) {
  cy.get("span[class='icon_calendar']").click();
  cy.get(".ui-datepicker-year").select(year);

  cy.get(".ui-datepicker-month").then((month) => {
    let actual = getMonth(month.text());
    let expected = month;

    if (Number(actual) >= Number(expected)) {
      let count = actual - expected;
      for (let i = 1; i <= count; i++) {
        cy.get("a[class='ui-datepicker-prev ui-corner-all']").click();
      }
    } else {
      let count = expected - actual;
      for (let i = 1; i <= count; i++) {
        cy.get("a[class='ui-datepicker-next ui-corner-all']").click();
      }
    }

    cy.get("a[class='ui-state-default']").each(($date, index, $list) => {
      if ($date.text() == day) {
        cy.wrap($date).click();
        return false;
      }
    });
  });
}

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

function getMonth(input) {
  // If the input is a number, return the month name
  if (typeof input === "number") {
    return months[input] || "Invalid month number";
  }

  // If the input is a string, return the corresponding month number
  if (typeof input === "string") {
    const key = Object.keys(months).find(
      (key) => months[key].toLowerCase() === input.toLowerCase()
    );
    return key || "Invalid month name";
  }

  return "Invalid input";
}
