const sortMovies = (movies, category) => {
  switch (category) {
    case 'average_rating':
      return movies.sort((a, b) => {
        return parseFloat(b['average_rating']) - parseFloat(a['average_rating'])
      })
      break
    case 'release_date_new_to_old':
      return movies.sort((a, b) => {
        return new Date(a.release_date) - new Date(b.release_date)
      })
      break
    case 'release_date_old_to_new':
      return movies.sort((a, b) => {
        return new Date(b.release_date) - new Date(a.release_date)
      })
      break
    default:
      return movies.sort((a, b) => {
        let titleA = a.title.toUpperCase()
        let titleB = b.title.toUpperCase()
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
      })
  }

  // alphabeticallyByTitle(movies) {
  //   return movies.sort((a, b) => {
  //     let titleA = a.title.toUpperCase()
  //     let titleB = b.title.toUpperCase()
  //     return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
  //   })
  // },

  // byRatingHighToLow(movies) {
  //   return movies.sort((a, b) => {
  //     return parseFloat(b['average_rating']) - parseFloat(a['average_rating'])
  //   })
  // },

  // byReleaseDateOldestToNewest(movies) {
  //   return movies.sort((a, b) => {
  //     return new Date(b.release_date) - new Date(a.release_date)
  //   })
  // },

  // byReleaseDateNewestToOldest(movies) {
  //   return movies.sort((a, b) => {
  //     return new Date(a.release_date) - new Date(b.release_date)
  //   })
  // }
}

export default sortMovies