describe("Signup form", () => {
  it("Email registration with incorrect email", () => {
    cy.visit("/");
    cy.get("a").click();
    cy.url().should("include", "/register");

    cy.get("form").should("have.id", "registerForm");
    cy.get("input[name=username]").type("CoolUser");
    cy.get("input[name=email]").type("email.com");
    cy.get("form").submit();

    cy.contains("Felformatterad e-postadress").end();
  });

    it("Register password incorrectly", () => {
      cy.visit("/");
      cy.get("a").click();
      cy.url().should("include", "/register");

      cy.get("form").should("have.id", "registerForm");
      cy.get("input[name=username]").type("CoolUser");
      cy.get("input[name=email]").type("Frontenddudedettes@gmail.com");
      cy.get("input[name=password]").type("ilovesweatshirts");
      cy.get("input[name=passwordConfirm]").type("ilovesweatshorts");
      cy.get("form").submit();

      cy.contains("Lösenorden överensstämmer inte!");

      cy.get("input[name=username]").type("CoolUser");
      cy.get("input[name=email]").type("Frontenddudedettes@gmail.com");
      cy.get("input[name=password]").type("ilovesweatshirts");
      cy.get("input[name=passwordConfirm]").type("Ilovesweatshorts");
      cy.get("form").submit();

      cy.contains("Lösenorden överensstämmer inte!");
    });

    it("Email registration successful", () => {
      cy.visit("/");
      cy.get("a").click();
      cy.url().should("include", "/register");

      cy.get("form").should("have.id", "registerForm");
      cy.get("input[name=username]").type("CoolUser");
      cy.get("input[name=email]").type("Frontenddudedettes@gmail.com");
      cy.get("input[name=password]").type("ilovesweatshirts");
      cy.get("input[name=passwordConfirm]").type("ilovesweatshirts");
      cy.get("form").submit();

      cy.url().should("include", "/register"); //KOLLA VAD SOM UTMÄRKER DENNA SIDA FÖR JAG KAN INTE HITTA DET

      cy.get("a").click();
      cy.url().should("include", "/");
    });
});
