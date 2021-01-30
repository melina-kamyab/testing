describe("guestbook", () => {
  it("Make guestbook post", () => {
    cy.visit("/guestbook");
    cy.get("form");
    cy.get("textarea").type("Fin sida!").should("have.value", "Fin sida!");
    cy.get("form").submit();
    cy.contains("Fin sida!").end();
  });

  it("Fail making guestbook post", () => {
    cy.visit("/guestbook");
    cy.get("form");
    cy.get("textarea").type("yo");
    cy.get("form").submit();
    cy.contains("För kort meddelande!").end();
  });

  it("Make and delete guestbook post", () => {
    cy.visit("/guestbook");
    cy.get("form");
    cy.get("textarea").type("Ful sida!").should("have.value", "Ful sida!");
    cy.get("form").submit();
    cy.get("p").contains("Ful sida!").contains("a").click();
    cy.get("#entries").contains("Ful sida!").should("not.exist").end();
  });
});
