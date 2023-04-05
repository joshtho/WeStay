import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function NavBar({loggedIn, user, setUser, setLoggedIn, setSuggest, setLoading}) {
    const navigate = useNavigate()
    
    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setLoggedIn(false)
            navigate("/")
            setUser(null);
            }
          })
    }
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
                <Link to="/lodgings">
                    <Button>My stays</Button>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/locations">
                    <Button>Popular Places</Button>
                </Link>
            </Nav.Item>
            <Nav.Item>
                    <Button onClick={handleLogout}>Logout</Button>
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
                <Link to="/signup">
                    <Button>Signup</Button>
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


