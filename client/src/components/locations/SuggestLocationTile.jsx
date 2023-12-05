import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function SuggestLocationTile({location}) {
  
  return (
    <Card style={{ width: '18rem' }} className='column' >
      <Link to={`/locations/${location.id}`}>
      <Card.Img variant="top" src={location.image} />
      </Link>
      <Card.Body>
        <Card.Title className='card-header'>{location.name}</Card.Title>
        {/* <Card.Text>{location.description}</Card.Text>
        Others are staying here
        {location.unique_users.map(user => (
          <h5 key={user.index}>{user}</h5>
        ))} */}
            <Link to="/lodgings/add">
              <Button>Add Stay</Button>
            </Link>
      </Card.Body>
    </Card>
  );
}

export default SuggestLocationTile