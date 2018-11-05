import React from 'react';
import Request from '../../helpers/request'
import HunterDetail from '../../components/hunters/HunterDetail'

class HuntersSingleContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hunter: null

    }
  }

componentDidMount(){
  const request = new Request();
  request.get('/api/hunters/'+ this.props.match.params.id)
    .then(hunter => this.setState({hunter:hunter}))
}

  render(){
    if (this.state.hunter) {
      return <HunterDetail data={this.state.hunter}/>
    }
    else {return null}
  }
}

export default HuntersSingleContainer;
