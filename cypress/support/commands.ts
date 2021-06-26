import "@testing-library/cypress/add-commands";

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Command to find a label and click on it
       * @param label text of the label to be clicked on
       */
      clickLabel(label: string): Cypress.Chainable<Element>;
      /**
       * Command to write
       * @param content
       */
      write(content: string): Cypress.Chainable<Element>;
    }
  }
}

const clickLabel = (label: string) => {
  return cy.findByText(label).click();
};
const write = (content: string) => {
  return cy.get("body").type(content);
};

Cypress.Commands.add("clickLabel", clickLabel);
Cypress.Commands.add("write", write);
