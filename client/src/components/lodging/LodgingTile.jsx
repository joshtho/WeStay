import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate, Link } from 'react-router-dom';

function LodgingTile({stay, onHandleDelete, setLoading}) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  
  function handleLinkClick() {
    window.open(stay.link)
  }

  function handleDeleteClick() {
    fetch(`/lodgings/${stay.id}`, {
      method: "DELETE",
    })
    onHandleDelete(stay)
    navigate(`/lodgings`)
  }
  
  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Body>
    //     <Card.Text>
    //       Location: {stay.location.name}
    //     </Card.Text>
    //   <Card.Img variant="top" src={stay.image} />
    //     <Card.Title>{stay.season}</Card.Title>
    //     <Card.Title>{stay.dates}</Card.Title>
    //     <Card.Text>
    //       Guests: {stay.guests}
    //     </Card.Text>
    //     <Button onClick={handleLinkClick}>Go to the link</Button>

    //     <Link to={`/lodgings/${stay.id}/edit`}>
    //         <Button>Edit</Button>
    //     </Link>
    //   </Card.Body>
    // </Card>
    <Card className='card'>
    <CloseButton onClick={() => setShowModal(true)} />
      <h4>{stay.location.name}</h4>
      <Card.Title>{stay.season}</Card.Title>
         <Card.Title>{stay.dates}</Card.Title>
         <Card.Text>
           Guests: {stay.guests}
         </Card.Text>
        <Link to={`/lodgings/${stay.id}/edit`}>
          <Button variant="outline-secondary" size="sm">Edit</Button>
        </Link>
        {/* <Link to={`/artworks/view/${artwork.id}`} > */}
          <Card.Img 
          title='Click here to see Artwork' 
          variant="top" 
          src={stay.image} 
          />
          <Button onClick={handleLinkClick}>Go to the link</Button>
        {/* </Link> */}
      <Card.Body>
        {/* <ListGroup >
          <h6>Current Location:</h6>
          <ListGroup.Item>{artwork.location}</ListGroup.Item>
          <br></br>
          <h6>Medium:</h6>
          <ListGroup.Item>{artwork.medium}</ListGroup.Item>
        </ListGroup>
        <br></br>
      <ArtworkNote note={artworkNote}/>     */}
      </Card.Body>

      <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this stay?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="danger" onClick={handleDeleteClick}>DELETE Lodging</Button>
            </Modal.Footer>
          </Modal>
    </Card>
  );
}

export default LodgingTile