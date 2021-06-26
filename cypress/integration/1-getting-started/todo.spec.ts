/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:8080/");
  });
  it("should visit the page", () => {
    cy.get("body").type("1234").type("{enter}").type("1234").type("{enter}");
    cy.get("dialog").should("contain", "0,00");
  });
  it("should visit the page", () => {
    cy.get("body").type("1233").type("{enter}").type("1234").type("{enter}");
    cy.get("dialog").should("contain", "0,01");
  });
  it("should visit the page", () => {
    cy.findByText("1").click();
    cy.findByText("2").click();
    cy.findByText("3").click();
    cy.findByText("4").click();
    cy.findByText("Gegeben").click();
    cy.findByText("2").click();
    cy.findByText("3").click();
    cy.findByText("4").click();
    cy.findByText("0").click();
    cy.findByText("0").click();
    cy.findByText("Zahlen").click();
    cy.get("dialog").should("contain", "221,66");
  });
});
