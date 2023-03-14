import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function NavBar({loggedIn, user}) {
  return (
    <>
        {
            loggedIn ? 
        <Nav className="justify-content-center" activeKey="/">
            <Nav.Item>
                <Link to="/">
                    <Button>Home</Button>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/locations">
                    <Button>My stays</Button>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
            </Nav.Item>
           Welcome {user.username}!
        </Nav> :

        <Nav className="justify-content-center" activeKey="/">
            <Nav.Item>
                <Link to="/">
                    <Button>Home</Button>
                </Link>
            </Nav.Item>
            
            <Nav.Item>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
            </Nav.Item>
        </Nav>
        }
    </>
    )
}
export default NavBar;


