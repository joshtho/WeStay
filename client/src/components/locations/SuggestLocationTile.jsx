import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SuggestLocationTile({location}) {
    const [added, setAdded] = useState(false)
    function handleClick() {
        
        setAdded(true)
    }
  return (
    <Card style={{ width: '18rem' }} className='column' >
      <Card.Img variant="top" src={location.image} />
      <Card.Body>
        <Card.Title>{location.name}</Card.Title>
        <Card.Text>{location.description}</Card.Text>
        {
            added ?
            <Button>Added</Button>
            :
            <Button onClick={handleClick}>Add this Location!</Button>

        }
      </Card.Body>
    </Card>
  );
}

export default SuggestLocationTile