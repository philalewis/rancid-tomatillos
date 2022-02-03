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
        <h1>Rancid Tomatillos</h1>
        <AllMovies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
