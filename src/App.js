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
import SearchBar from './SearchBar'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: {},
      filtered: []
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
    this.setState({movies: sortMovies(this.state.filtered, category)})
  }

  searchMovies = (input) => {
    const term = input.toLowerCase()
    this.setState({filtered: this.state.movies.filter(movie => {
        const title = movie.title.toLowerCase()
        return title.includes(term)
      })
    })
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
        <nav>
          <h1>Rancid Tomatillos</h1>
          <Route exact path="/" render={() =>   
            <section className='filter-features'>
              <SearchBar searchMovies={this.searchMovies}/>
              <SortDropdown sortMovies={this.sortMovies}/>
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
        <Route exact path="/" render={() => {
          return <section>
            <AllMovies
              viewMovieInfo={this.viewMovieInfo} 
              movies={this.state.filtered}
              formatDate={this.formatDate}
              sortMovies={this.sortMovies}
            />
          </section>
          }
        } 
        />
        <Route exact path="/:id" render={({ match }) => {
          return <Movie id={match.params.id} handleError={this.handleError}/>
        }}
        />
        { displayError }
      </main>
    )
  }
}

export default App;