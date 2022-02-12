describe('Single movie page', () => {

  const getMovieData = id => {
    switch (id) {
      case 737173:
        return {
          ok: true,
          statusCode: 200,
          movie: {
            id: 737173,
            title: "Maratón After",
            poster_path: "https://image.tmdb.org/t/p/original//opZKcgocttEOAUzqluX3bUbbDew.jpg",
            backdrop_path: "https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg",
            release_date: "2020-09-03",
            overview: "",
            genres: [],
            budget: 0,
            revenue: 0,
            runtime: 0,
            tagline: "",
            average_rating: 4.333333333333333
          }
        }
        break
      case 508439:
        return {
          ok: true,
          statusCode: 200,
          movie: {
            id: 508439,
            title: "Onward",
            poster_path: "https://image.tmdb.org/t/p/original//f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
            release_date: "2020-02-29",
            overview: "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
            genres: ["Animation","Family","Adventure","Comedy","Fantasy"],
            budget: 200000000,
            revenue: 103181419,
            runtime: 102,
            tagline: "Their quest begineth.",
            average_rating: 6.4
          }
        }
        break
    }
  }

  it('should see the poster image and backdrop image for the movie', () => {
    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.movie-poster-img')
      .get('.backdrop-img')
  })

  it('should see a description of the movie under the backdrop image', () => {
    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.right-side')
      .get('.overview-text')
  })

  it('should see the title of the movie under the poster', () => {
    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.left-side')
      .get('.title')
  })

  it('should a tagline for the movie if one exists', () => {
    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.details-box')
      .get('h3')

    cy.intercept('GET', getMovieData(737173))
    cy.visit('http://localhost:3000/737173')
      .get('.details-box')
      .get('h3')
      .should('not.exist')
  })

  it('should see the movie\'s average rating', () => {
    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.details-box')
      .contains('6.40 / 10')
  })

  it('should see the movie\'s release date', () => {
    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.details-box')
      .contains('02/29/2020')
  })

  it('should see the movie\'s genres, if any are given', () => {
    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.details-box')
      .contains('Animation, Family, Adventure, Comedy, Fantasy')

    cy.intercept('GET', getMovieData(737173))
    cy.visit('http://localhost:3000/737173')
      .get('.details-box')
      .contains('p', 'Genres').should('not.exist')
  })

  it('should see the runtime in minutes, if given', () => {
    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.details-box')
      .contains('p', 'Runtime')

    cy.intercept('GET', getMovieData(737173))
    cy.visit('http://localhost:3000/737173')
      .get('.details-box')
      .contains('p', 'Runtime').should('not.exist')
  })

  it('should be able to see the budget if it exists', () => {
    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.details-box')
      .contains('budget').should('not.exist')

    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.details-box')
      .contains('$200,000,000')
  })

  it('should be able to see the revenue if it exists', () => {
    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.details-box')
      .contains('budget').should('not.exist')

    cy.intercept('GET', getMovieData(508439))
    cy.visit('http://localhost:3000/508439')
      .get('.details-box')
      .contains('$103,181,419')
  })
})