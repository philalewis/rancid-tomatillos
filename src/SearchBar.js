import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }
  handleChange(event) {
    this.setState({userInput: event.target.value})
  }

  searchMovies(event) {
    event.preventDefault()
    this.props.searchMovies(this.state.userInput)
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='Search By Title' name='userInput' value={this.state.userInput} onChange={event => this.handleChange(event)} />
        <button onClick={event => this.searchMovies(event)}>Submit</button>
      </form> 
    )
  }
}

export default SearchBar;
