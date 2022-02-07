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
  let dollarUSLocale = Intl.NumberFormat('en-US'); 
  return (
    <section className="movie-details-view" id={id}>
      <article className="left-side">
        <img className="movie-poster-img" src={poster} alt={"Poster for " + title}/>
        <h2 className="title">{title}</h2>
        <section className="details-box">
          <h3><em>{tagline.length > 0 && `"${tagline}"`}</em></h3>
          <p>Rating: {rating.toFixed(2)} / 10</p>
          <p>Release Date: {formatDate(releaseDate)}</p>
          <p>Genres: {genres.join(', ')}</p>
          <p>Runtime: {runtime} minutes</p>
          <p>{budget > 0 && `Budget: $${dollarUSLocale.format(budget)}`}</p>
          <p>{revenue > 0 && `Revenue: $${dollarUSLocale.format(revenue)}`}</p>
        </section>
      </article>
      <section className="right-side">
        <img className="backdrop-img" src={backdrop} alt={"Backdrop Image for " + title}/>
        <p className="overview-text">{overview}</p>
      </section>
    </section>
    
  )
}

export default Movie