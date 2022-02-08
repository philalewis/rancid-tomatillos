import React from 'react'
import './Poster.css'
import { Link } from 'react-router-dom'

const Poster = ({ poster, title, rating, releaseDate, viewMovieInfo, id, formatDate }) => {
  return (
    <article id={id} className="poster">
      <section className="poster-image-container">
        <img className="poster-image" src={poster} alt={title}/>
        <div className="middle">
          <Link to={`/${id}`}>
            <button className='see-details-btn'>See More Details</button>
          </Link>
        </div>
      </section>  
      <p className="poster-title">{title}</p>
      <p className="rating">Rating: {rating.toFixed(2)} / 10</p>
      <p className="release-date">Released: {formatDate(releaseDate)}</p>
    </article>
  )
}

export default Poster