import React from 'react';
import { Link, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import './Navbar.css'

const Navbar = ({ searchMovies, sortMovies }) => {
  return (
    <nav>
      <h1>Rancid Tomatillos</h1>
      <Route exact path="/" render={() =>   
        <section className='filter-features'>
          <SearchBar searchMovies={searchMovies}/>
          <SortDropdown sortMovies={sortMovies}/>
        </section>  
        } 
      />
      <Link to='/'>
        <button className="home-btn"> 
          <img 
            className="home-btn-img" 
            src={require("./home-btn-img.png")} 
            alt="home-icon" 
          />
        </button>
      </Link>
    </nav>
  )
}

export default Navbar;