import React from 'react'
import ReactDOM from 'react-dom'
import Request from '../../helpers/request'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      bounties: []
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

    componentDidMount() {
      const request = new Request();
      request.get('/api/bounties/')
      .then ( (bounties) => {
        this.setState({ bounties: bounties._embedded.bounties});
      })
    }

  onMarkerClick = (props, marker, e) => {
    console.log("props:", props);
    console.log("marker:", marker);
    console.log("event:", e);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

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

      const bounties = this.state.bounties.map((bounty, idx) => {
        return <Marker onClick={this.onMarkerClick}
          name={bounty.targetName}
          id={bounty.id}
          position={{lat: bounty.lastKnownLat, lng: bounty.lastKnownLong}}
        />
      })

    return (
        <div>
        <Map google={this.props.google} zoom={2.5} style={style}
          initialCenter={{lat: 38.098015, lng: 9.459019}}
        onClick={this.onMapClicked}>

          {bounties}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <a href={`/bounties/details/${this.state.activeMarker.id}`}>Bounty: {this.state.activeMarker.name}</a>
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
