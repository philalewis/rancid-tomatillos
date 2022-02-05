import React, {Component} from 'react'
import './App.css';
import AllMovies from './AllMovies'
import Movie from './Movie'
import './home-btn-img.png'
import apiCalls from './apiCalls'

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
    apiCalls.getAllMovies()
    .then(data => this.setState({ movies: this.sortMovies(data.movies) }))
    .catch(error => this.setState ({ error: 'Error Obtaining Data' }))
  }

  viewMovieInfo = id => {
    const flick = this.state.movies.find(movie => movie.id === parseInt(id))
    this.setState({
      movieView: true,
      currentMovie: flick
    })
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
      </main>
    )
  }
}

export default App;
