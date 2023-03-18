import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';

function LodgingTile({stay, onHandleDelete}) {
  const params = useParams()
  const locationId = parseInt(params.id)
  const navigate = useNavigate()
  
  function handleLinkClick() {
    window.open(stay.link)
  }

  function handleDeleteClick() {
    fetch(`/lodgings/${stay.id}`, {
      method: "DELETE",
    })
    onHandleDelete(stay.id)
    navigate(`/locations/${locationId}`)
  }


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={stay.image} />
        <Card.Title>{stay.season}</Card.Title>
        <Card.Title>{stay.dates}</Card.Title>
        <Card.Text>
          Guests: {stay.guests}
        </Card.Text>
        <Button onClick={handleLinkClick}>Go to the link</Button>
        <Button onClick={handleDeleteClick}>Delete stay</Button>
      </Card.Body>
    </Card>
  );
}

export default LodgingTile