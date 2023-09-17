import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import SuggestLocationTile from '../locations/SuggestLocationTile'
import Container from 'react-bootstrap/esm/Container'

function LocationsList({locations}) {

  const locationList = () => locations.map(location => (
    <SuggestLocationTile key={location.id} location={location} />
  ))
  return (
    <div >
      <Container className='card-grid'>
        {locationList()}
      </Container>
        <Link to="/lodgings/add">
            <Button >Add Lodging</Button>
        </Link>
    </div>

  )
}

export default LocationsList