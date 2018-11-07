import React from 'react';
import Header from '../../components/header';
import Request from '../../helpers/request.js';
import BountyEditForm from '../../components/bounties/bountyEditForm';

class BountyEditFormContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bounty: null,
    }
    this.handleBountyPatch = this.handleBountyPatch.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/bounties/' + this.props.match.params.id)
    .then(
      bounty =>{
       request.get('/api/customers')
       .then(
         customers => {
          this.setState(
            {
              bounty: bounty,
              customers:customers
            }
          )
        }
        )
       }
     )
    }


  handleBountyPatch(payload){
    const request = new Request();
    const url = '/api/bounties/' + this.props.match.params.id;
    request.patch(url, payload)
    .then(() => {
      window.location = '/bounties/details/' + this.props.match.params.id;
    })

  }

  render(){
    if(!this.state.bounty){return null}
    return(
      <div>
        <Header title={"Edit Bounty" + this.state.bounty.targetName}/>
        <BountyEditForm bounty={this.state.bounty} customers={this.state.customers} handleBountyPatch={this.handleBountyPatch}/>
      </div>
    )
  }
}


export default BountyEditFormContainer;
