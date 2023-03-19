import React, { useState } from 'react'
import LocationTile from './LocationTile'
import SuggestLocationTile from './SuggestLocationTile'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import LodgingTile from '../lodging/LodgingTile'

function LocationsList({locations, user}) {
  const userStays = () => user.lodgings
  // const allLocations = () => locations.map(location => (
  //   <>
  //   <SuggestLocationTile key={location.id} location={location} />
  //   </>
  // ))
  console.log(user)
  return (
    <div className='row'>
        { user ?
        userStays().map(lodging => (
          <>
          <h2>{lodging.location.name}</h2>
          <LodgingTile key={lodging.id} stay={lodging} />
          </>
          ))
        : ""
        }
        <h1>Add a location you would like to visit!</h1>
        <Link to="/lodgings/add">
            <Button>Add Lodging</Button>
        </Link>
    </div>
  )
}

export default LocationsList