import React from 'react'
import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {

    const style = {
        height: "55vh",
        width: "auto",
        margin: "0 1em"
      }

    return (
        <div>
        <Map google={this.props.google} zoom={2} style={style} center={this.props.google.maps.LatLng(38.098015, 9.459019)}
        onClick={this.onMapClicked}>

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} lat={37.774929} lng={-122.419416} />

          <Marker onClick={this.onMarkerClick}
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: 57.778519, lng: -122.405640}} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>

        </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAoAwJKfYYsZKkverzYANY8UjrABJdH8lA'
})(MapContainer)
