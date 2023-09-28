import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import { useNavigate } from 'react-router-dom'

function HomePage({loading}) {
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
      <h1 className='home-head'>Welcome to WeStay</h1>
      <br></br>
      <Button onClick={handleClick} className="home-btn" variant="success">Enter</Button>

      </Container>
      {/* <img 
        className='img-home' 
        alt='groupPhoto' 
        src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60' /> */}
    </div>
      
  )
}

export default HomePage