describe('Poster class', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });
  
  it('should display posters for movies', () => {
    cy.get('.poster')
      .get('.poster-image')
      .should('exist')
  });

  it('should display the title of each movie', () => {
    cy.get('.poster-title')
      .should('exist')
  });

  it('should display the rating of each movie', () => {
    cy.get('.rating')
      .should('exist')
  });

  it('should display the release date for each movie', () => {
    cy.get('.release-date')
      .should('exist')
  });

  it('should display a button to navigate to a movie details page when the user hovers over the poster image', () => {
    cy.get('.see-details-btn')
      .should('exist')
  });
})