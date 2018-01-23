import React, { Component } from 'react'

let wasScriptAdded = false

const mapsScript = window.document.createElement('script')
mapsScript.async = true

mapsScript.addEventListener('load', () => {
  wasScriptAdded = true 
})

window.document.head.appendChild(mapsScript)
mapsScript.src = 'https://maps.google.com/maps/api/js'

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
    if (wasScriptAdded) {
      this.initMap()
    } else {
      mapsScript.addEventListener('load', this.initMap)
    }
  }

  render () {
    return (
      <div ref="map" style={ {...this.props.style} } />
    )
  }
}

export default GoogleMap
