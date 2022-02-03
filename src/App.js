import React, {Component} from 'react'
import './App.css';
import moviesData from './data.js'
import AllMovies from './AllMovies'
import Movie from './Movie'
import './home-btn-img.png'

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
    this.setState({ movies: moviesData.movies })
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

  render() {
    return (
      <main>
        <nav>
          <h1>Rancid Tomatillos</h1>
          <button onClick={() => this.goHome()}>
            <img src="home-btn-img.png" alt="home-icon" />
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
          /> : 
          <AllMovies
            viewMovieInfo={this.viewMovieInfo} 
            movies={this.state.movies}
          />
        }
      </main>
    )
  }
}

export default App;
