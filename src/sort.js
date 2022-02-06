const sortMovies = {
  alphabeticallyByTitle(movies) {
    return movies.sort((a, b) => {
      let titleA = a.title.toUpperCase()
      let titleB = b.title.toUpperCase()
      return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
    })
  },

  byRatingHighToLow(movies) {
    return movies.sort((a, b) => {
      return parseFloat(b['average_rating']) - parseFloat(a['average_rating'])
    })
  },

  byReleaseDateOldestToNewest(movies) {
    return movies.sort((a, b) => {
      return new Date(b.release_date) - new Date(a.release_date)
    })
  },

  byReleaseDateNewestToOldest(movies) {
    return movies.sort((a, b) => {
      return new Date(a.release_date) - new Date(b.release_date)
    })
  }
}

export default sortMovies

// Date(a) - Date(b)