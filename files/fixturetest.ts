describe('User Test', () => {
    it('should load user data from fixture', () => {
      cy.fixture('user').then((userData) => {
        // Use the loaded data
        cy.log(userData.name); // Outputs: John Doe
        cy.log(userData.email); // Outputs: john.doe@example.com
      });
    });
  });