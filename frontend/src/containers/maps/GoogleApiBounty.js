import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class BountyMapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedBounty: {},
      bounty: this.props.data
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    console.log("props:", props);
    console.log("marker:", marker);
    console.log("event:", e);
    this.setState({
      selectedBounty: props,
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
        height: "44vh"
      }

    return (
        <div>
          {console.log(this.props)}
          <Map google={this.props.google} zoom={2.5} style={style}
            initialCenter={{lat: this.props.data.lastKnownLat, lng: this.props.data.lastKnownLong}}
            mapType={"satellite"}
            onClick={this.onMapClicked}>

            <Marker key={this.props.data.id} onClick={this.onMarkerClick}
              name={this.props.data.targetName}
              position={{lat: this.props.data.lastKnownLat, lng: this.props.data.lastKnownLong}}
            />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                Bounty: {this.props.data.targetName}
              </div>
            </InfoWindow>

          </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(BountyMapContainer)
