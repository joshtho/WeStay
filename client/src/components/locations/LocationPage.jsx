import React from 'react'
import { useParams } from 'react-router-dom'

function LocationPage({locations}) {
  const params = useParams()
  const locationId = parseInt(params.id)
  const currentLocation = locations.find(location => location.id === locationId) 
  console.log(currentLocation)

  if (!currentLocation) {
    return <div>Loading...</div>
  }

  return (
    <div className='location-page'>
       <img alt={currentLocation.id} src={`${currentLocation.image}`} />
       <br></br>
       <p>{currentLocation.description}</p>
    </div>
  )
}

export default LocationPage