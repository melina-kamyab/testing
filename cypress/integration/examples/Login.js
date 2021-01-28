//Evelina

describe("Login form", () =>{

    it("Can sign in", () =>{
        cy.visit("/");
        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser").should("have.value", "CoolUser");
        cy.get('input[name="password"]').type("123123123").should("have.value", "123123123");
        cy.get("form").submit();
        cy.url().should("include", "start");
        cy.contains("Välkommen CoolUser").end();
    })
}) 