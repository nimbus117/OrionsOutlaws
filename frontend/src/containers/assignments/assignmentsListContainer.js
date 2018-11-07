import React, {Component} from 'react';
import Header from '../../components/header';
import Request from '../../helpers/request'
import AssignmentCard from '../../components/assignments/assignmentCard'
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'

class AssignmentsListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      assignments: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/assignments')
      .then(assignments => this.setState({assignments: assignments._embedded.assignments}));
  }

  handleDelete(id) {
    const request = new Request();
    const url = '/api/assignments/' + id;
    console.log(url);
    request.delete(url)
      .then(() => {
        window.location = '/assignments';
      })
  }

  render() {
    const assignments = this.state.assignments.map((assignment, idx) => {
      return <AssignmentCard data={assignment} key={idx} handleDelete={this.handleDelete}/>
    })
    return(
      <div>
        <Header title="Assignments" />
        <Container>
          <Row>
            {assignments}
          </Row>
        </Container>
      </div>
    )
  }
}
export default AssignmentsListContainer;
