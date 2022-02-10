describe('Feedback Loop login flows', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });
  
  it('should display an page header', () => {
    cy.get('h1')
      .contains('Rancid Tomatillos')
  });

  it('should have a home button in a nav bar', () => {
    cy.get('nav')
      .get('.home-btn')
  });
});