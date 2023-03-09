import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function NavBar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/locations">
            <Button>Locations</Button>
          </Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
export default NavBar;