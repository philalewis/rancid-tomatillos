import React from 'react'
import './Movie.css'

const Movie = ({ id, poster, title, rating, releaseDate, backdrop, formatDate }) => {
  return (
    <section className="movie-details-view" id={id}>
      <article>
        <img className="movie-poster-img" src={poster} alt={"Poster for " + title}/>
        <h2>{title}</h2>
        <h3>Rating: {rating.toFixed(2)} / 10</h3>
        <h3>Release Date: {formatDate(releaseDate)}</h3>
      </article>
      <div>
        <img className="backdrop-img" src={backdrop} alt={"Backdrop Image for " + title}/>
      </div>
    </section>
    
  )
}

export default Movie