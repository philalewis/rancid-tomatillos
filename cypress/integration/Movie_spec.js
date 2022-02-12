describe('Single movie page', () => {
  it('should see the poster image and backdrop image for the movie', () => {
    cy.visit('http://localhost:3000/528085')
      .get('.movie-poster-img')
      .get('.backdrop-img')
  })

  it('should see a description of the movie under the backdrop image', () => {
    cy.visit('http://localhost:3000/528085')
      .get('.right-side')
      .get('.overview-text')
  })

  it('should see the title of the movie under the poster', () => {
    cy.visit('http://localhost:3000/528085')
      .get('.left-side')
      .get('.title')
  })

  it('should a tagline for the movie if one exists', () => {
    cy.visit('http://localhost:3000/528085')
      .get('.details-box')
      .get('h3')

    cy.visit('http://localhost:3000/582885')
      .get('.details-box')
      .get('h3')
      .should('not.exist')
  })

  it('should see the movie\'s average rating', () => {
    cy.visit('http://localhost:3000/528085')
      .get('.details-box')
      .contains('5.00 / 10')
  })

  it('should see the movie\'s release date', () => {
    cy.visit('http://localhost:3000/528085')
      .get('.details-box')
      .contains('10/01/2020')
  })

  it('should see the movie\'s genres, if any are given', () => {
    cy.visit('http://localhost:3000/528085')
      .get('.details-box')
      .contains('Science Fiction, Thriller')

    cy.visit('http://localhost:3000/737173')
      .get('.details-box')
      .contains('p', 'Genres').should('not.exist')
  })

  it('should see the runtime in minutes, if given', () => {
    cy.visit('http://localhost:3000/528085')
      .get('.details-box')
      .contains('p', 'Runtime')

    cy.visit('http://localhost:3000/737173')
      .get('.details-box')
      .contains('p', 'Runtime').should('not.exist')
  })

  it('should be able to see the budget if it exists', () => {
    cy.visit('http://localhost:3000/528085')
      .get('.details-box')
      .contains('budget').should('not.exist')

    cy.visit('http://localhost:3000/508439')
      .get('.details-box')
      .contains('$200,000,000')
  })

  it('should be able to see the revenue if it exists', () => {
    cy.visit('http://localhost:3000/528085')
      .get('.details-box')
      .contains('budget').should('not.exist')

    cy.visit('http://localhost:3000/508439')
      .get('.details-box')
      .contains('$103,181,419')
  })
})