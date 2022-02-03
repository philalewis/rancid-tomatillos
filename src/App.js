import React, {Component} from 'react'
import './App.css';
import moviesData from './data.js'
import AllMovies from './AllMovies'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.setState({ movies: moviesData.movies })
  }

  render() {
    return (
      <main>
        <AllMovies movies={this.state.movies}/>
        <h1>Rancid Tomatillos</h1>
      </main>
    )
  }
}

export default App;
