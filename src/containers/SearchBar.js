import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchWeather } from '../actions/'

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchWeather }, dispatch)

class SearchBar extends Component {
  state = { term: '' }

  onInputChange = ({
    target: {value: term}
  }) => this.setState({ term })

  onFormSubmit = e => {
    e.preventDefault()

    const { fetchWeather } = this.props
    const { term } = this.state
    
    fetchWeather(term)
    this.setState({ term : '' })
  }

  render () {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
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

export default connect(null, mapDispatchToProps)(SearchBar)
