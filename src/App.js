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
    .then(data => this.setState({ movies: this.sortMovies(data.movies) }))
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

  sortMovies = (flicks) => {
    return flicks.sort((a, b) => {
      let titleA = a.title.toUpperCase()
      let titleB = b.title.toUpperCase()
      return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
    })
  }
  
  exitModal = () => {
    this.setState({ error: '' })
  }

  render() {
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
        {
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
          <AllMovies
            viewMovieInfo={this.viewMovieInfo} 
            movies={this.state.movies}
            formatDate={this.formatDate}
          />
        }
        { this.state.error && <Modal message={this.state.error} exitModal={this.exitModal} /> }

      </main>
    )
  }
}

export default App;
