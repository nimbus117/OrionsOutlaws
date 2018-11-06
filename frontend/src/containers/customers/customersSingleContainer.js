import React from 'react';
import Request from '../../helpers/request'
import CustomerDetail from '../../components/customers/CustomerDetail'

class CustomersSingleContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customer: null

    }
  }

componentDidMount(){
  const request = new Request();
  request.get('/api/customers/'+ this.props.match.params.id)
    .then(customer => this.setState({customer:customer}))
}

  render(){
    if (this.state.customer) {
      return <CustomerDetail data={this.state.customer}/>
    }
    else {return null}
  }
}

export default CustomersSingleContainer;
