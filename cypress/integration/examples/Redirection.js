describe("Redirections ", () => {
  it("Check redirection between Gästbok and Start", () => {
    cy.visit("/start");

    cy.contains("Gästbok").click();

    cy.contains("Tillbaka").click();

    cy.url().should("include", "/start");
  });

  it("Check redirection between Presentation and Start ", () => {
    cy.visit("/start");

    cy.contains("Presentation").click();

    cy.contains("Tillbaka").click();

    cy.url().should("include", "/start");
  });

  it("Check redirection between Logga ut and Start ", () => {
    cy.visit("/start");

    cy.contains("Logga ut").click();

    cy.contains("Coola communityt");

    cy.url().should("include", "/");
  });
});
