import React from 'react';
import Request from '../../helpers/request'
import BountyDetail from '../../components/bounties/bountyDetail'

class BountiesSingleContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bounty:null

    };
  }

componentDidMount(){
  const request = new Request();
  request.get('/api/bounties/'+ this.props.match.params.id)
    .then(bounty => this.setState({bounty:bounty}))
}

  render(){
    if (this.state.bounty) {
      return <BountyDetail data={this.state.bounty}/>
    }
    else {return null}
  }
}

export default BountiesSingleContainer;
