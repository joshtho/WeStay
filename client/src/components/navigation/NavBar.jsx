import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function NavBar({user, setUser, setLoggedIn}) {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);

    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setLoggedIn(false)
            setShowModal(false)
            navigate("/")
            setUser(null);
            }
          })
    }
  return (
    <>
    {user && user.id ?
    <Navbar  >
        <Container>
          <Link to='/' >
            <Navbar.Brand className='nav-home' >WeStay</Navbar.Brand>
          </Link>
            <Nav.Link as={Link} to='/locations' className='nav-home' >Locations</Nav.Link>
            <Nav.Link as={Link} to='/lodgings' className='nav-home' >Lodgings</Nav.Link>
            
          <Nav className="ml-auto">
          <Navbar.Brand style={{fontSize: 'small'}}  >
            Welcome: {user.username}
          </Navbar.Brand>
          <Dropdown >
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            </Dropdown.Toggle>
              

            <Dropdown.Menu className='dropdown' >
              <Dropdown.Item className='button' onClick={() => setShowModal(true)}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav>

          <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Logout?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to logout?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Go back
              </Button>
              <Button variant="danger" onClick={handleLogout}>Logout</Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Navbar>
    
    : 
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to='/' style={{textDecoration: "none"}}>
            <Navbar.Brand >WeStay</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
              <Nav.Link as={Link} to='/signup' >Signup</Nav.Link>
              <Nav.Link as={Link} to='/login' >Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    }
    </>
    )
}
export default NavBar;


