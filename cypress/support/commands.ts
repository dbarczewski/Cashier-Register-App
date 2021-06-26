import "@testing-library/cypress/add-commands";

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Command to find a title and click on it
       * @param title text of the title to be clicked on
       */
      clickByTitle(title: string): Cypress.Chainable<Element>;
      /**
       * Command to find a label and click on it
       * @param label text of the label to be clicked on
       */
      clickByLabel(label: string): Cypress.Chainable<Element>;
      /**
       * Command to write
       * @param content
       */
      write(content: string): Cypress.Chainable<Element>;
    }
  }
}

const clickByTitle = (title: string) => {
  return cy.findByTitle(title).click();
};
const clickByLabel = (label: string) => {
  return cy.findByText(label).click();
};
const write = (content: string) => {
  return cy.get("body").type(content);
};

Cypress.Commands.add("clickByTitle", clickByTitle);
Cypress.Commands.add("clickByLabel", clickByLabel);
Cypress.Commands.add("write", write);
