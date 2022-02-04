import React from 'react'
import './Poster.css'

const Poster = ({ poster, title, rating, releaseDate, viewMovieInfo, id, formatDate }) => {
  return (
    <article id={id} className="poster">
      <img className="poster-image" src={poster} alt={title} onClick={() => viewMovieInfo(id)}/>
      <p className="poster-title">{title}</p>
      <p className="rating">Rating: {rating.toFixed(2)} / 10</p>
      <p className="releaseDate">Released: {formatDate(releaseDate)}</p>
    </article>
  )
}

export default Poster