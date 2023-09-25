import React from 'react'
import Button from 'react-bootstrap/Button'

function HomePage({loading}) {
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className='home-image'>
    {/* <h1>WeStay</h1> */}
      {/* <img 
        className='img-home' 
        alt='groupPhoto' 
        src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60' /> */}
        <Button className="home-btn" variant="success">Enter</Button>
    </div>
      
  )
}

export default HomePage