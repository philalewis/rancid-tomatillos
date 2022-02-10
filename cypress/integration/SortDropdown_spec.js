describe.only('SortDropdown class', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });
  
    it('should have a dropdown menu for the user to sort movies', () => {
      cy.get('.sort-dropdown')
        .get('option[value="title"]')
        .get('option[value="release_date_new_to_old"]')
        .get('option[value="release_date_old_to_new"]')
        .get('option[value="average_rating"]')
    });

  it('should sort movies by title by default', () => {
    cy.get('.poster-title')
      .contains('2067')
  });

  it('should be able to sort movies by title from any other sort option view', () => {
    cy.get('.sort-dropdown')
      .select('release_date_new_to_old')
      .get('.poster-title')
      .contains('Cats & Dogs 3: Paws Unite')
      .get('.sort-dropdown')
      .select('title')
      .get('.poster-title')
      .contains('2067')
  })

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
})