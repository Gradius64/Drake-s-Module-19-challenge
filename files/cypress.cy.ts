// cypress/e2e/example.cy.ts
describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io');
      cy.contains('type').click();
    });
  });