import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

function EditLodging({lodgings, onHandleUpdate, onHandleDelete, setLoading}) {
    const params = useParams()
    const navigate = useNavigate()
    const lodgingId = parseInt(params.id)
    const currentLodging = lodgings.find(lodging => lodging.id === lodgingId)
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
        navigate('/locations')

      })
      setLoading(false)
}

function handleDelete() {
    fetch(`/lodgings/${lodgingId}`, {
        method: "DELETE",
    })
    onHandleDelete(lodgingId)
    navigate('/locations')
}

  return (
    <div>

        {locationData ?
        <div>
        <h1>{currentLodging.name}</h1>
    
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
        
        <Button onClick={handleSubmit}>Update Location</Button>
        </Form>
        <br></br> 
        <Button onClick={handleDelete}>Delete Location</Button>
    
        </div> : <h1>Loading...</h1>
        }
    </div>
  )
}

export default EditLodging