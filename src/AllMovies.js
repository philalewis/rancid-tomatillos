import React from 'react'
import './AllMovies.css'
import Poster from './Poster'

const AllMovies = ({ movies, viewMovieInfo, formatDate }) => {
  
  const moviesList = movies.map(movie => {
    return (
      <Poster
        id={movie.id}
        key={movie.id}
        title={movie.title}
        rating={movie.average_rating}
        poster={movie.poster_path}
        releaseDate={movie.release_date}
        viewMovieInfo={viewMovieInfo}
        formatDate={formatDate}
      />
    )
  })

  return (
    <section className="all-movies-container">
      { moviesList }
    </section>
  )
}

export default AllMovies