import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import { useNavigate } from 'react-router-dom'

// Things I want to incorporate on this HomePage

// * When on the first page and there is no session saved, dont show the navBar and have some good font with a button that says enter
// * When logged in, the homepage will have a fade out "Welcome to WeStay" and then show a fade in of compiled cards of popular locations.

function HomePage({loading, loggedIn}) {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/login')
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className='home-image'>
      <Container className='container-home'>
        <h1 >Welcome to We Stay</h1>
        <br></br>
        {loggedIn ? 
          "" 
        : 
          <Button onClick={handleClick}  variant="success">Enter</Button>
        }
      </Container>
    </div>
  )
}
    
export default HomePage;