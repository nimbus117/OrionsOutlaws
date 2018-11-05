import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

const Home = props => {
  return(
    <div>
    <Jumbotron>
      <div id='main-font'>
        <h1>Home Page</h1>
      </div>
      <p>Orion's Outlaws management system. Authorized access only!</p>
    </Jumbotron>
    </div>
  )
}
export default Home;
