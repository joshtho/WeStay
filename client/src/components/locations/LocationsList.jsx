import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import SuggestLocationTile from '../locations/SuggestLocationTile'

function LocationsList({locations}) {

  return (
    <div className='row'>
        {
        locations.map(location => (
          <>
          <SuggestLocationTile key={location.id} location={location} />
          </>
        )) 
        }
        <h1>Add a stay!</h1>
        <Link to="/lodgings/add">
            <Button >Add Lodging</Button>
        </Link>

    </div>
  )
}

export default LocationsList