import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginPage() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    function handleLoginSubmit(e) {
        e.preventDefault()

        fetch(`http://localhost:4000/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
    }
  return (
    <Form onSubmit={handleLoginSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter username"
        value={loginData.username}
        onChange={e => setLoginData({...loginData, username: e.target.value})}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        value={loginData.password}
        onChange={e => setLoginData({...loginData, password: e.target.value})}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginPage;