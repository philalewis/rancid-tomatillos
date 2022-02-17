describe('Modal for error handling', () => {

  it('should display a modal when a network request fails', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 404,
        ok: false,
      }
    )
    cy.visit('http://localhost:3000/rancid-tomatillos/')
      .get('.modal')
  });

  it('should display different messages for different kinds of errors', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 404,
        ok: false,
      }
    )
    cy.visit('http://localhost:3000/rancid-tomatillos/')
      .get('.modal')
      .get('h3')
      .contains('We\'re sorry, something went wrong. Either the page doesn\'t exist, or could not be found')

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 500,
        ok: false,
      }
    )
    cy.visit('http://localhost:3000/rancid-tomatillos/')
      .get('.modal')
      .get('h3')
      .contains('We\'re sorry, something went wrong with the server. Please try again later')
  });

  it('should provide a way to exit the modal', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 500,
        ok: false,
      }
    )
    cy.visit('http://localhost:3000/rancid-tomatillos/')
      .get('.modal-btn')
      .click()
      .get('.modal').should('not.exist')
  });

  it('should be shown an error message anywhere on the site that a network request was made.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401',
      {
        statusCode: 500,
        ok: false,
      }
    )
    cy.visit('http://localhost:3000/rancid-tomatillos/337401')
      .get('.modal')
  });
});