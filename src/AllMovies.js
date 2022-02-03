import React, { Component } from 'react'
import './AllMovies.css'
import Poster from './Poster'

const AllMovies = ({ movies }) => {
  
  const moviesList = movies.map(movie => {
    return (
      <Poster 
        id={movie.id}
        key={movie.id}
        title={movie.title}
        rating={movie.average_rating}
        poster={movie.poster_path}
        // backdropPath={movie.backdrop_path}
        releaseDate={movie.release_date}
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