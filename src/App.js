import React, {Component} from 'react'
import './App.css';
import AllMovies from './AllMovies'
import Movie from './Movie'
import './home-btn-img.png'
import apiCalls from './apiCalls'
import Modal from './Modal'
import sortMovies from './sort.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movieView: false,
      currentMovie: {}
    }
  }
  
  componentDidMount() {
    apiCalls.getData('movies')
    .then(data => {
      this.setState({ movies: data.movies })
      this.sortMovies('title')
    })
    .catch(error => this.setState ({ error: error }))
  }

  viewMovieInfo = id => {
    let flick;
    apiCalls.getData(`movies/${id}`)
    .then(data => {
      flick = data.movie 
      this.setState({
        movieView: true,
        currentMovie: flick
      })
    })
    .catch(error => this.setState ({ error: error }))
  }

  goHome = () => {
    this.setState({ movieView: false })
  }
  
  formatDate = date => {
    const splitDate = date.split('-')
    const newDate = splitDate.slice(1)
    newDate.push(splitDate[0])
    return newDate.join('/')
  }

  sortMovies = category => {
    this.setState({movies: sortMovies(this.state.movies, category)})
  }

  exitModal = () => {
    this.setState({ error: '' })
  }

  render() {
    let displayMovies = (
      this.state.movieView ?
      <Movie 
        id={this.state.currentMovie.id}
        key={this.state.currentMovie.id}
        title={this.state.currentMovie.title}
        rating={this.state.currentMovie.average_rating}
        poster={this.state.currentMovie.poster_path}
        releaseDate={this.state.currentMovie.release_date}
        backdrop={this.state.currentMovie.backdrop_path}
        budget={this.state.currentMovie.budget}
        revenue={this.state.currentMovie.revenue}
        genres={this.state.currentMovie.genres}
        overview={this.state.currentMovie.overview}
        runtime={this.state.currentMovie.runtime}
        tagline={this.state.currentMovie.tagline}
        formatDate={this.formatDate}
      /> :
      <section>
        <section className="sort-dropdown-container">
          <select className="sort-dropdown" onChange={event => this.sortMovies(event.target.value)}>
            <option value="title">title: a-z</option>
            <option value="release_date_new_to_old">release date: newest-oldest</option>
            <option value="release_date_old_to_new">release date: oldest-newest</option>
            <option value="average_rating">average rating: high-low</option>
          </select>
        </section>
        <AllMovies
          viewMovieInfo={this.viewMovieInfo} 
          movies={this.state.movies}
          formatDate={this.formatDate}
          sortMovies={this.sortMovies}
        />
      </section>
    )
    let displayError = (
      this.state.error && 
      <Modal message={this.state.error} exitModal={this.exitModal} />
    )
    return (
      <main>
        <nav>
          <h1>Rancid Tomatillos</h1>
          <button className="home-btn" onClick={() => this.goHome()}>
            <img 
              className="home-btn-img" 
              src={require("./home-btn-img.png")} 
              alt="home-icon" 
            />
          </button>
        </nav>
        { displayMovies }
        { displayError }
      </main>
    )
  }
}

export default App;
