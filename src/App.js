import React, {Component} from 'react'
import './App.css';
import moviesData from './data.js'

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
      <h1>Rancid Tomatillos</h1>
    )
  }
}

export default App;
