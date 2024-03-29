import React, {Component} from 'react';
import './App.css';
import AllMovies from './AllMovies';
import Movie from './Movie';
import './home-btn-img.png';
import apiCalls from './apiCalls';
import Modal from './Modal';
import sort from './sort.js';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: {},
      filtered: [],
      error: null
    }
  }
  
  componentDidMount() {
    apiCalls.getData('movies')
    .then(data => {
      this.setState({ movies: data.movies, filtered: data.movies})
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

  handleError = error => {
    this.setState ({ error: error })
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
    this.setState({filtered: sort(this.state.filtered, category)})
  }

  searchMovies = (input) => {
    const term = input.toLowerCase()
    this.setState({ filtered: this.state.movies.filter(movie => {
        const title = movie.title.toLowerCase()
        return title.includes(term)
      })
    })
  }
  
  resetFiltered = () => {
    this.setState({ filtered: this.state.movies })
  }

  exitModal = () => {
    this.setState({ error: '' })
  }


  render() {

    let displayError = (
      this.state.error && 
      <Modal message={this.state.error} exitModal={this.exitModal} />
    )

    return (
      <main>
        <Navbar 
          searchMovies={this.searchMovies} 
          sortMovies={this.sortMovies} 
          resetFiltered={this.resetFiltered}
        />
        <Route exact path="/rancid-tomatillos/" render={() => 
          <section>
            <AllMovies
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.filtered}
              formatDate={this.formatDate}
              sortMovies={this.sortMovies}
            />
          </section>
        } 
        />
        <Route exact path="/rancid-tomatillos/:id" render={({ match }) => 
          <Movie id={match.params.id} handleError={this.handleError}/>
        }
        />
        { displayError }
      </main>
    )
  }
}

export default App;