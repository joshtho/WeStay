import React from 'react'

function HomePage({loading}) {
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
    <h1>Plan your stay</h1>
      <img alt='groupPhoto' src='https://static01.nyt.com/images/2019/07/14/travel/14TIPS/63f2d864d66c4a119b036e8d4c3a5978-articleLarge.jpg?quality=75&auto=webp&disable=upscale' />
      <p>Plan your stay is a website that allows you to save vacation ideas 
        with a link to the lodging you have your eye on.
      </p>
    </div>
  )
}

export default HomePage