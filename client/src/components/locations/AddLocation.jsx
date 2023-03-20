import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';


function AddLocation({onNewLocation, selectCity, setLoading, loading}) {
    const [show, setShow] = useState(false);
    const [locationData, setLocationData] = useState({
    name: "",
    description: "",
    image: "", 
    })
    const [locationErrors, setLocationErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    fetch(`/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationData),
    })
      .then((r) => {
        if(r.ok) {
          r.json().then(newLocation => {
                onNewLocation(newLocation)
                handleClose()
                selectCity()
              })
        } else {r.json().then(errors => {
            setLocationErrors(errors.errors) 
            console.log(errors)
        })}
    })
    setLoading(false)
}


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Location
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Where would you like to go?</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>City and state</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder='City and state ...'
                    value={locationData.name}
                    onChange={(e) => setLocationData({...locationData, name: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder='Description ...'
                    value={locationData.description}
                    onChange={(e) => setLocationData({...locationData, description: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder='Image url ...'
                    value={locationData.image}
                    onChange={(e) => setLocationData({...locationData, image: e.target.value})}
                    />
                </Form.Group>
                <br></br>
                <Button onClick={handleSubmit}>Add Location</Button>

                {locationErrors.map(error => (
                    <li>{error}</li>
                ))}
            </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddLocation