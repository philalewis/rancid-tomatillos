import React from 'react';
import './SortDropdown.css';


const SortDropdown = ({ sortMovies }) => {
  return(
    <section className="sort-dropdown-container">
      <select className="sort-dropdown" onChange={event => sortMovies(event.target.value)}>
        <option value="title">title: a-z</option>
        <option value="release_date_new_to_old">release date: newest-oldest</option>
        <option value="release_date_old_to_new">release date: oldest-newest</option>
        <option value="average_rating">average rating: high-low</option>
      </select>  
    </section>
  )
};

export default SortDropdown;