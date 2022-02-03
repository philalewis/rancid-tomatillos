import React from 'react'
import './Poster.css'

const Poster = ({ poster, title, rating, releaseDate }) => {
  return (
    <article>
      <img src={poster} alt={title} />
      <p className="poster-title">{title}</p>
      <p className="rating">Rating: {rating.toFixed(2)}</p>
    </article>
  )
}

export default Poster

// id={movie.id}
//         key={movie.id}
//         title={movie.title}
//         rating={movie.average_rating}
//         poster={movie.poster_path}
//         // backdropPath={movie.backdrop_path}
//         releaseDate={movie.release_date}