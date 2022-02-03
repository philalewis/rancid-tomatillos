import React, { Component } from 'react'
import './AllMovies.css'
import Movie from './Movie'

const AllMovies = ({ movies }) => {
  
  const moviesList = movies.map(movie => {
    return (
      <Movie 
        id={movie.id}
        key={movie.id}
        title={movie.title}
        rating={movie.average_rating}
        poster={movie.poster_path}
        backdropPath={movie.backdrop_path}
        releaseDate={movie.release_date}
      />
    )
  })

  return (
    <section>
      { moviesList }
    </section>
  )
}

export default AllMovies