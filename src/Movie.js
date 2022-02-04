import React from 'react'
import './Movie.css'

const Movie = ({ id, poster, title, rating, releaseDate, backdrop }) => {
  return (
    <section className="movie-details-view" id={id}>
      <article>
        <img className="movie-poster-img" src={poster} alt={"Poster for " + title}/>
        <h2>{title}</h2>
        <h3>Rating: {rating}</h3>
        <h3>Release Date: {releaseDate}</h3>
      </article>
      <div>
        <img className="backdrop-img" src={backdrop} alt={"Backdrop Image for " + title}/>
      </div>
    </section>
    
  )
}

export default Movie