import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/lib/Container'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {

    const style = {
        height: "50vh",
        width: "auto",
        margin: "0 1em"
      }

    return (
        <div>
        <Map google={this.props.google} zoom={2} style={style} center={this.props.google.maps.LatLng(37.774929, -122.419416)}>

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} lat={37.774929} lng={-122.419416} />

          {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

// export class Map extends React.Component {
//
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.google !== this.props.google) {
//       this.loadMap();
//     }
//   }
//
//   componentDidMount() {
//     this.loadMap();
//   }
//
//   loadMap() {
//     if (this.props && this.props.google) {
//       // google is available
//       const {google} = this.props;
//       const maps = google.maps;
//       const mapRef = this.refs.map;
//       const node = ReactDOM.findDOMNode(mapRef);
//       let zoom = 14;
//       let lat = 37.774929;
//       let lng = -122.419416;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign({}, {
//         center: center,
//         zoom: zoom
//       })
//       this.map = new maps.Map(node, mapConfig);
//     }
//   }
//
//   render() {
//     return (
//       <div ref='map'>
//         Loading map...
//       </div>
//     )
//   }
// }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAoAwJKfYYsZKkverzYANY8UjrABJdH8lA'
})(MapContainer)
