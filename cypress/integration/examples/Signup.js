describe("Signup form", () => {
  it("Email registration", () => {
    cy.visit("/");

    cy.get("a").click();

    cy.url().should("include", "/register");

    cy.get("form").should("have.id", "registerForm");
    cy.get("input[name=username]").type("CoolUser");
    cy.get("input[name=email]").type("email.com");
    cy.get("form").submit();

    cy.contains("Felformatterad e-postadress");
  });
});
