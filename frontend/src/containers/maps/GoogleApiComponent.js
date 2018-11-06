import React from 'react'
import Request from '../../helpers/request'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedBounty: {},
      bountyUrl: '',
      bountyName: '',
      bounties: []
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    // this.getMapOptions = this.getMapOptions.bind(this);
  }

    componentDidMount() {
      const request = new Request();
      request.get('/api/bounties/')
      .then ( (bounties) => {
        this.setState({ bounties: bounties._embedded.bounties});
      })
    }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedBounty: props,
      activeMarker: marker,
      showingInfoWindow: true,
      bountyUrl: "/bounties/" + marker.id,
      bountyName: marker.name
    });
  }

    onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        bountyUrl:'',
        bountyName: ''
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
        return <Marker key={idx} onClick={this.onMarkerClick}
          name={bounty.targetName}
          id={bounty.id}
          position={{lat: bounty.lastKnownLat, lng: bounty.lastKnownLong}}
        />
      })

    return (
        <div>
          <Map google={this.props.google} zoom={2.5} style={style}
            initialCenter={{lat: 38.098015, lng: 9.459019}}
            mapType={"satellite"}
            onClick={this.onMapClicked}>

            {bounties}

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <a href={this.state.bountyUrl}>Bounty: {this.state.bountyName}</a>
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
