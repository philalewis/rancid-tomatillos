import React from 'react'
import './Movie.css'

const Movie = ({ 
  id,
  poster, 
  title, 
  rating, 
  releaseDate, 
  backdrop, 
  formatDate,
  budget,
  revenue,
  genres,
  overview,
  runtime,
  tagline
}) => {
  return (
    <section className="movie-details-view" id={id}>
      <article>
        <img className="movie-poster-img" src={poster} alt={"Poster for " + title}/>
        <h2>{title}</h2>
        <p>{tagline}</p>
        <p>Rating: {rating.toFixed(2)} / 10</p>
        <p>Release Date: {formatDate(releaseDate)}</p>
        <p>Genres: {genres.join(', ')}</p>
        <p>Runtime: {runtime} minutes</p>
        <p>Budget: ${budget}</p>
        <p>Revenue: ${revenue}</p>
      </article>
      <div>
        <img className="backdrop-img" src={backdrop} alt={"Backdrop Image for " + title}/>
        <p>{overview}</p>
      </div>
    </section>
    
  )
}

export default Movie