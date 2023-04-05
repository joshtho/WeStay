import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function SuggestLocationTile({location}) {
    
  return (
    <Card style={{ width: '18rem' }} className='column' >
      <Card.Img variant="top" src={location.image} />
      <Card.Body>
        <Card.Title>{location.name}</Card.Title>
        <Card.Text>{location.description}</Card.Text>
            <Link to="/lodgings/add">
              <Button>Add a stay here</Button>
            </Link>
      </Card.Body>
    </Card>
  );
}

export default SuggestLocationTile