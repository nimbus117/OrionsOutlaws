import React from 'react'
import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {

    const style = {
        width: '40vw',
        height: '40vh'
      }

    return (
      <div style={style}>
        <Map google={this.props.google} zoom={14}>
  {/*
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
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
  apiKey: 'AIzaSyBX76QApr3fyrOPYEJYmyTWhsIolEGP7lU'
})(MapContainer)
