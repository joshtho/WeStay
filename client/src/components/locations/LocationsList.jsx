import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import LodgingTile from '../lodging/LodgingTile'

function LocationsList({user, onHandleDelete}) {
  const userStays = () => user.lodgings
  
  
  
  return (
    <div className='row'>
        { user ?
            userStays().map(lodging => (
              <>
              <h2>{lodging.location.name}</h2>
              <LodgingTile key={lodging.id} stay={lodging} onHandleDelete={onHandleDelete} />
              </>
              ))
            : ""
        }
        <h1>Add a location you would like to visit!</h1>
        <Link to="/lodgings/add">
            <Button >Add Lodging</Button>
        </Link>
    </div>
  )
}

export default LocationsList