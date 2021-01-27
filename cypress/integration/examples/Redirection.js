describe("Redirections ", () => {
  cy.visit("/start");

  cy.get('a[href*="guestbook.html"]').click();
});

// kolla följande länkar:
// startsida --> Presentation
// Presentation --> tillbaka

//Logga ut

// startsida --> gästbok
// gästbok --> tillbaka
