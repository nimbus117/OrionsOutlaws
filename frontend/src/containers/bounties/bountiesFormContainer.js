import React from 'react';
import Header from '../../components/header.js';
import BountyForm from '../../components/bounties/bountyForm';
import Request from '../../helpers/request.js';


class BountiesFormContainer extends React.Component{

  constructor(props){
    super(props);
    this.state =  {
      customers: []
    }

    this.handleBountyPost = this.handleBountyPost.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/customers')
      .then(customers => this.setState({customers: customers._embedded.customers}));
  }


  handleBountyPost(payload){
    const request = new Request();
    const url = '/api/bounties/';
    request.post(url,payload)
    .then(() => {
      window.location = '/bounties';
    })
  }

  render(){
    return(
      <div>

      <Header title = 'New Bounty'/>
      <BountyForm handleBountyPost={this.handleBountyPost} customers={this.state.customers}/>
      </div>
    )
  }
}

export default BountiesFormContainer;
