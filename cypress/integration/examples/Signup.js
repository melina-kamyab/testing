describe("Signup form", () => {
  it("Email registration", () => {
    cy.visit("/");

    cy.get("a").click();

    cy.url().should("include", "/register");

    cy.get("form").should("have.id", "registerForm");
  });
});
