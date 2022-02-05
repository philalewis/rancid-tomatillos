import React, {Component} from 'react'
import './App.css';
import AllMovies from './AllMovies'
import Movie from './Movie'
import './home-btn-img.png'
import apiCalls from './apiCalls'
import Modal from './Modal'

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
    apiCalls.getData(`movies/:movie_${id}`)
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
    console.log(typeof category)
    if (category === 'title') {
      this.setState({
        movies: this.state.movies.sort((a, b) => {
          let catA = a[category].toUpperCase()
          let catB = b[category].toUpperCase()
          return catA < catB ? -1 : catA > catB ? 1 : 0
        })
      })
    } else if (category === 'average_rating') {
      this.setState({
        movies: this.state.movies.sort((a, b) => {
          return parseFloat(b[category]) - parseFloat(a[category])
        })
      })
    } else if (category === 'release_date') {
      this.setState({
        movies: this.state.movies.sort((a, b) => {
          return parseInt(b[category].split('-').join('')) -
            parseInt(a[category].split('-').join(''))
        })
      })
    }
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
        formatDate={this.formatDate}
      /> : 
      <section>
        <select onChange={event => this.sortMovies(event.target.value)}>
          <option value="title">title: a-z</option>
          <option value="release_date">release date: newest-oldest</option>
          <option value="average_rating">average rating: high-low</option>
        </select>
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
