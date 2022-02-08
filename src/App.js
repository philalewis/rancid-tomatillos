import React, {Component} from 'react'
import './App.css';
import AllMovies from './AllMovies'
import Movie from './Movie'
import './home-btn-img.png'
import apiCalls from './apiCalls'
import Modal from './Modal'
import sortMovies from './sort.js'
import SortDropdown from './SortDropdown'
import { Route, Link } from 'react-router-dom'


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
        <SortDropdown sortMovies={this.sortMovies}/>
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
        <Route exact path="/" render={() => {
          return <section>
            <SortDropdown sortMovies={this.sortMovies}/>
            <AllMovies
              viewMovieInfo={this.viewMovieInfo} 
              movies={this.state.movies}
              formatDate={this.formatDate}
              sortMovies={this.sortMovies}
            />
          </section>
          }
        } 
        />
        <Route exact path="/:id" render={({ match }) => {
          const movie = this.state.movies.find(movie => {
            return movie.id === parseInt(match.params.id)
          })
          console.log(movie)
          return (
            <Movie 
              id={movie.id}
              key={movie.id}
              title={movie.title}
              rating={movie.average_rating}
              poster={movie.poster_path}
              releaseDate={movie.release_date}
              backdrop={movie.backdrop_path}
              budget={movie.budget}
              revenue={movie.revenue}
              genres={movie.genres}
              overview={movie.overview}
              runtime={movie.runtime}
              tagline={movie.tagline}
              formatDate={this.formatDate}
            />
          )
          }}
        />
        {/* // { displayMovies }
        { displayError } */}
      </main>
    )
  }
}

export default App;