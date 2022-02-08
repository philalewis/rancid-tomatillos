import React, { Component } from 'react'
import './Movie.css'
import apiCalls from './apiCalls'

class Movie extends Component {
  constructor({ id, handleError }) {
    super() 
    this.state = {
      id: id,
      poster: '', 
      title: '',
      rating: null,
      releaseDate: '',
      backdrop: '',
      budget: 0,
      revenue: 0,
      genres: [],
      overview: '',
      runtime: null,
      tagline: '',
      isMounted: false
    }
  }
  
  componentDidMount() {
    apiCalls.getData(`movies/${this.state.id}`)
    .then(data => {
      console.log(data)
      this.setState({
        id: data.movie.id,
        poster: data.movie.poster_path, 
        title: data.movie.title,
        rating: data.movie.average_rating,
        releaseDate: data.movie.release_date,
        backdrop: data.movie.backdrop_path,
        budget: data.movie.budget,
        revenue: data.movie.revenue,
        genres: data.movie.genres,
        overview: data.movie.overview,
        runtime: data.movie.runtime,
        tagline: data.movie.tagline,
        isMounted: true
      })
    })
    .catch(error => this.handleError(error))
  }

  formatDate = date => {
    const splitDate = date.split('-')
    const newDate = splitDate.slice(1)
    newDate.push(splitDate[0])
    return newDate.join('/')
  }

  render() {
    let dollarUSLocale = Intl.NumberFormat('en-US'); 
    return (
      this.state.isMounted ?
      <section className="movie-details-view" id={this.state.id}>
        <article className="left-side">
          <img className="movie-poster-img" src={this.state.poster} alt={"Poster for " + this.state.title}/>
          <h2 className="title">{this.state.title}</h2>
          <section className="details-box">
            <h3><em>{this.state.tagline.length > 0 && `"${this.state.tagline}"`}</em></h3>
            <p>Rating: {this.state.rating.toFixed(2)} / 10</p>
            <p>Release Date: {this.formatDate(this.state.releaseDate)}</p>
            <p>Genres: {this.state.genres.join(', ')}</p>
            <p>Runtime: {this.state.runtime} minutes</p>
            <p>{this.state.budget > 0 && `Budget: $${dollarUSLocale.format(this.state.budget)}`}</p>
            <p>{this.state.revenue > 0 && `Revenue: $${dollarUSLocale.format(this.state.revenue)}`}</p>
          </section>
        </article>
        <section className="right-side">
          <img className="backdrop-img" src={this.state.backdrop} alt={"Backdrop Image for " + this.state.title}/>
          <p className="overview-text">{this.state.overview}</p>
        </section>
      </section> :
      <h2>Loading...</h2>
    )
  }
}

export default Movie