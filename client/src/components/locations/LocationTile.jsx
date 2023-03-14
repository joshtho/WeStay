import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function LocationTile({location}) {

  return (
    <Card style={{ width: '18rem' }} className='column' >
      <Card.Img variant="top" src={location.image} />
      <Card.Body>
        <Card.Title>{location.name}</Card.Title>
        <Card.Text>{location.description}</Card.Text>
        <Link to={`${location.id}`}>
            <Button>Your stays</Button>
        </Link>
        <Link to={`${location.id}/edit`}>
            <Button>Edit</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default LocationTile