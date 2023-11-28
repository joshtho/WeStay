import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/esm/Card';
import { useNavigate } from 'react-router-dom';

function SignupPage({setLoggedIn, setUser, setLoading}) {
    const navigate = useNavigate()
    const [signupData, setSignupData] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState([])

    function handleSignupSubmit(e) {
        e.preventDefault()
        setLoading(true)
        fetch(`/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupData),
        })
        .then((r) => {
            if (r.ok) {
              r.json().then(login => {
                setUser(login)
                setLoggedIn(true)
                navigate('/')
            })
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
          setLoading(false)
    }
  return (
    <Card className='mx-auto' style={{marginTop: "25px"}}>

    <Form onSubmit={handleSignupSubmit} >
        <h1>Ready to plan your stay?</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Please create with email address"
        value={signupData.username}
        onChange={e => setSignupData({...signupData, username: e.target.value})}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Create a Password" 
        value={signupData.password}
        onChange={e => setSignupData({...signupData, password: e.target.value})}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {
        errors ? 
        errors.map(error => (
          <li>{error}</li>
          ))
          : null
        }

    </Form>
  </Card>
  );
}

export default SignupPage;