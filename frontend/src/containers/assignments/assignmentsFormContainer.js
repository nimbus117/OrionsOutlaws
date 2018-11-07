import React from 'react';
import Header from '../../components/header.js';
import AssignmentForm from '../../components/assignments/assignmentForm';
import Request from '../../helpers/request.js';

class AssignmentsFormContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bounties:null,
      hunters:null
    }

    this.handleAssignmentPost = this.handleAssignmentPost.bind(this);
  }

  handleAssignmentPost(payload){
    const request = new Request();
    const url = '/api/assignments/';
    request.post(url,payload)
    .then(() => {
      window.location = "/assignments";
    })
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/assignments/' + this.props.match.params.id)
    .then(
      assignment=>{
        request.get('/api/bounties')
        .then(
          bounties =>{
            request.get('/api/hunters').then(hunters => {
              this.setState({
                bounties:bounties,
                hunters:hunters
              }
            )
          }
        )
      }
    )
  }
)
}

  render() {
    if(!this.state.hunters){return null}
    return(
      <div>
      <Header title='New Assignment' />
      <AssignmentForm handleAssignmentPost={this.handleAssignmentPost} hunters={this.state.hunters} bounties={this.state.bounties} />
      </div>
    )
  }
}


export default AssignmentsFormContainer;
