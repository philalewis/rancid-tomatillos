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

  it('should display posters for movies', () => {
    cy.get('.poster')
      .get('.poster-image')
  });

  it('should display the title of each movie', () => {
    cy.get('.poster-title')
  });

  it('should display the rating of each movie', () => {
    cy.get('.rating')
  });

  it('should display the release date for each movie', () => {
    cy.get('.release-date')
  });

  it('should display a button to navigate to a movie details page when the user hovers over the poster image', () => {
    cy.get('.see-details-btn')
  });

  it('should have a dropdown menu for the user to sort movies', () => {
    cy.get('.sort-dropdown')
      .get('option[value="title"]')
      .get('option[value="release_date_new_to_old"]')
      .get('option[value="release_date_old_to_new"]')
      .get('option[value="average_rating"]')
  });

  it('should be able to sort movies by rating', () => {
    cy.get('.sort-dropdown')
      .select('average_rating')
      .get('.poster-title')
      .contains('Peninsula')
  });

  it('should be able to sort movies by release date from oldest to newest', () => {
    cy.get('.sort-dropdown')
      .select('release_date_old_to_new')
      .get('.poster-title')
      .contains('Away')
  });

  it('should be able to sort movies by release date from newest to oldest', () => {
    cy.get('.sort-dropdown')
      .select('release_date_new_to_old')
      .get('.poster-title')
      .contains('Cats & Dogs 3: Paws Unite')
  });

  it('should sort movies by title by default', () => {
    cy.get('.poster-title')
      .contains('2067')
  });
});