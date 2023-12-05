import React from 'react'
import { useParams } from 'react-router-dom'

function LocationPage({locations}) {
  const params = useParams()
  const locationId = parseInt(params.id)
  const currentLocation = locations.find(location => location.id === locationId)
  console.log(currentLocation)
  return (
    <div>
       {locationId} 
    </div>
  )
}

export default LocationPage