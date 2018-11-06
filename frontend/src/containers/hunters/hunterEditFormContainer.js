import React, {Component} from 'react';
import Header from '../../components/header.js';
import HunterEditForm from '../../components/hunters/HunterEditForm';
import Request from '../../helpers/request.js';

class HuntersEditFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hunter: null
    }
    this.handleHunterPatch = this.handleHunterPatch.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/hunters/' + this.props.match.params.id)
      .then(hunter => this.setState({hunter: hunter}));
  }

  handleHunterPatch(payload) {
    const request = new Request();
    const url = '/api/hunters/' + this.props.match.params.id;
    request.patch(url, payload)
      .then(() => {
        window.location = '/hunters/details/' + this.props.match.params.id;
      })
  }

  render() {
    if(!this.state.hunter) { return null }
    return(
      <div>
        <Header title={"Edit Hunter: " + this.state.hunter.name} />
      <HunterEditForm hunter={this.state.hunter} handleHunterPatch={this.handleHunterPatch} />
      </div>
    )
  }
}

export default HuntersEditFormContainer;
