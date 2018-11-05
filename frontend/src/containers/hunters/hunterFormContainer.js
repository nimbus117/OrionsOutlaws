import React, {Component} from 'react';
import Header from '../../components/header.js';
import HunterForm from '../../components/hunters/HunterForm';
import Request from '../../helpers/request.js';

class HuntersFormContainer extends Component {

  constructor(props) {
    super(props);

    this.handleHunterPost = this.handleHunterPost.bind(this);
  }

  handleHunterPost(payload) {
    const request = new Request();
    const url = '/api/hunters/';
    request.post(url, payload)
      .then(() => {
        window.location = '/hunters';
      })
  }

  render() {
    return(
      <div>
        <Header title="New Hunter" />
      <HunterForm handleHunterPost={this.handleHunterPost} />
      </div>
    )
  }
}

export default HuntersFormContainer;
