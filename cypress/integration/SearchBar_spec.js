describe('Search bar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should be able to type into a search bar', () => {
    cy.get('input[type="text"]')
      .type('some text')
      .should('have.value', 'some text')
  })

  it('should be able to search by movie title based on input', () => {
    cy.get('input[type="text"]')
      .type('Away')
      .get('.search-btn').click()
      .get('.poster-title')
      .contains('p', 'Away')
  })

  it('should be case insensitive', () => {
    cy.get('input[type="text"]')
      .type('aWaY')
      .get('.search-btn').click()
      .get('.poster-title')
      .contains('p', 'Away')
  })

  it('should be able to type into the search   bar multiple times in a row and search through all of the movies in the data every time, instead of just the filtered list', () => {
    cy.get('input[type="text"]')
      .type('away')
      .get('.search-btn').click()
      .get('.poster-title')
      .contains('p', 'Away')
      .get('input[type="text"]')
      .type('2067')
      .get('.search-btn').click()
      .get('.poster-title')
      .contains('p', 'Away').should('not.exist')
      .get('input[type="text"]')
      .type('away')
      .get('.search-btn').click()
      .get('.poster-title')
      .contains('p', 'Away')
  })
})