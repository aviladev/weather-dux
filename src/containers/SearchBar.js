import React, { Component } from 'react'

class SearchBar extends Component {
  state = { term: '' }

  onInputChange = ({
    target: {value: term}
  }) => this.setState({ term })

  render () {
    return (
        <form className="input-group">
          <input
            className="form-control"
            placeholder="Get a five day forecast in your favorite cities"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
    )
  }
}

export default SearchBar