/// <reference types="cypress" />

import Content from "./../../content.json";

describe("The App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });
  it("should type the same amount", () => {
    cy.write("1234").write("{enter}").write("1234").write("{enter}");
    cy.get("dialog").should("contain", "0,00");
  });
  it("should type a a lower amount for given and receive the correct amount", () => {
    cy.write("1233").write("{enter}").write("1234").write("{enter}");
    cy.get("dialog").should("contain", "0,01");
  });
  it("should use the numeric pad and receive the correct amount", () => {
    cy.clickByLabel("1");
    cy.clickByLabel("2");
    cy.clickByLabel("3");
    cy.clickByLabel("4");
    cy.clickByLabel(Content.givenLabel);
    cy.clickByLabel("2");
    cy.clickByLabel("3");
    cy.clickByLabel("4");
    cy.clickByLabel("0");
    cy.clickByLabel("0");
    cy.clickByLabel(Content.payButton);
    cy.get("dialog").should("contain", "221,66");
  });
  it("should use the proposed amounts and pay with it", () => {
    cy.write("100").write("{enter}");
    cy.findAllByText("1,00 €").should("exist");
    cy.findByText("2,00 €").should("exist");
    cy.findByText("10,00 €").should("exist");
    cy.findByText("20,00 €").should("exist");
    cy.findByText("50,00 €").should("exist").click();
    cy.clickByLabel(Content.payButton);
    cy.get("dialog").should("contain", "49,00");
  });
  it("should function correctly with backspaces", () => {
    cy.write("123").write("{enter}");
    cy.clickByLabel("1");
    cy.clickByLabel("0");
    cy.clickByLabel("1");
    cy.findByText("1,01 €").should("exist");
    cy.clickByTitle("delete");
    cy.findByText("0,10 €").should("exist");
    cy.write("{backspace}");
    cy.findByText("0,01 €").should("exist");
  });
  it("should not get over 1000,00€", () => {
    cy.write("100000000000").write("{enter}");
    cy.findAllByText("1.000,00 €").should("have.length", "2");
    cy.clickByLabel(Content.givenLabel);
    cy.clickByLabel("1");
    for (let i = 0; i < 10; i++) {
      cy.clickByLabel("0");
    }
    cy.findAllByText("1.000,00 €").should("have.length", "3");
  });
  it("should get an error when given amount is lower that the amount to pay", () => {
    cy.write("500").write("{enter}").write("400").write("{enter}");
    cy.findByText(Content.error.givenAmountTooLow).should("exist");
  });
});
