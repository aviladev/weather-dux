import React, { Component } from 'react'

class GoogleMap extends Component {
  initMap = () => {
    const { lat, lng } = this.props
    const { Map } = window.google.maps

    new Map(this.refs.map, {
      zoom: 12,
      center: { lat, lng }
    })
  }

  componentDidMount () {
    const scriptAdded = Boolean(document.getElementById('maps-api'))

    if (!scriptAdded) {
      const script = window.document.createElement('script')
      script.src = 'https://maps.google.com/maps/api/js'
      script.async = true
      script.id = 'maps-api'
      script.onload = this.initMap

      window.document.head.appendChild(script)
    } else {
      this.initMap()
    }
  }
  
  render () {
    return (
      <div ref="map" style={ {...this.props.style} } />
    )
  }
}

export default GoogleMap