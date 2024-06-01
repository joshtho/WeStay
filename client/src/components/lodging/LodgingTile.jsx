import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate, Link } from 'react-router-dom';

function LodgingTile({lodging, onHandleDelete, setLoading}) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  
  function handleLinkClick() {
    window.open(lodging.link)
  }

  function handleDeleteClick() {
    fetch(`/lodgings/${lodging.id}`, {
      method: "DELETE",
    })
    onHandleDelete(lodging)
    navigate(`/lodgings`)
  }
  
  return (
    <Card className='card'>
      <CloseButton onClick={() => setShowModal(true)} />
      <h4 className='card-header'>{lodging.location.name}</h4>
      <Card.Title>{lodging.season}</Card.Title>
        <Link to={`/lodgings/${lodging.id}/edit`}>
          <Button variant="outline-secondary" size="sm">Edit</Button>
        </Link>
          <Card.Img 
          title='Go to website'
          onClick={handleLinkClick} 
          style={{cursor:'pointer'}}
          variant="top" 
          src={lodging.image} 
          />
          <Button onClick={handleLinkClick}>Go to the link</Button>
      <Card.Body style={{fontFamily: 'Times'}}>
        <Card.Text>
          Guests: {lodging.guests}
        </Card.Text>
      <Card.Title>{lodging.dates}</Card.Title>
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