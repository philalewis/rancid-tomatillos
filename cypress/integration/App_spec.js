describe('Feedback Loop login flows', () => {
  
  it('should display an page header', () => {
    cy.visit('http://localhost:3000/')
      .get('h1')
      .should('have.text', 'Rancid Tomatillos')
  });

  it('should have a home button in a nav bar', () => {
    cy.visit('http://localhost:3000/')
      .get('nav')
      .get('.home-btn')
  });

  it('should be able to navigate to the home page from any other page', () => {
    cy.visit('http://localhost:3000/528085')
      .get('.home-btn').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
});