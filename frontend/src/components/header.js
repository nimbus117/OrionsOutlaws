import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

const Header = (props) => {
  return(
    <div>
      <Jumbotron>
        <h1>{props.title}</h1>
        <p>Orion's Outlaws management system. Authorized access only!</p>
      </Jumbotron>
    </div>
  )
}

export default Header;
