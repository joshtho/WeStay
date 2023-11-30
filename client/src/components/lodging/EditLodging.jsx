import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'

function EditLodging({user, onHandleUpdate, onHandleDelete, setLoading}) {
    const params = useParams()
    const navigate = useNavigate()
    const lodgingId = parseInt(params.id)
    const currentLodging = user.lodgings.find(lodging => lodging.id === lodgingId)
    const [locationData, setLocationData] = useState({
      dates: currentLodging.dates,
      guests: currentLodging.guests,
      image: currentLodging.image,
      link: currentLodging.link,
      season: currentLodging.season,
    })

  function handleSubmit(e) {
      e.preventDefault();
      setLoading(true)
      fetch(`/lodgings/${lodgingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(locationData),
      })
        .then((r) => r.json())
        .then((updatedLocation) => {
          onHandleUpdate(updatedLocation)
          navigate('/lodgings')

        })
        setLoading(false)
  }

  function handleDelete() {
      fetch(`/lodgings/${lodgingId}`, {
          method: "DELETE",
      })
      onHandleDelete(currentLodging)
      navigate('/lodgings')
  }

  return (
    <div>
        {locationData ?
        <Card className='mx-auto'style={{marginTop: '30px'}}>
          <h1>{currentLodging.location.name}</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Dates</Form.Label>
              <Form.Control 
              type="text" 
              value={locationData.dates}
              onChange={(e) => setLocationData({...locationData, dates: e.target.value})}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Guests</Form.Label>
              <Form.Control 
              type="text" 
              value={locationData.guests}
              onChange={(e) => setLocationData({...locationData, guests: e.target.value})}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Image url</Form.Label>
              <Form.Control 
              type="text" 
              value={locationData.image}
              onChange={(e) => setLocationData({...locationData, image: e.target.value})}
              />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Link</Form.Label>
              <Form.Control 
              type="text" 
              value={locationData.link}
              onChange={(e) => setLocationData({...locationData, link: e.target.value})}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Season</Form.Label>
              <Form.Control 
              type="text" 
              value={locationData.season}
              onChange={(e) => setLocationData({...locationData, season: e.target.value})}
              />
            </Form.Group>
            <br></br>
            <Button variant='success' onClick={handleSubmit}>Update Location</Button>
          <br></br> 
          <br></br> 
          <Button onClick={handleDelete}>DELETE Location</Button>
          </Form>
        </Card> 
        : <h1>Loading...</h1>
        }
    </div>
  )
}

export default EditLodging