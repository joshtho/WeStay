import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {useNavigate} from 'react-router-dom'
import AddLocation from '../locations/AddLocation';

function AddLodging({onNewLodging, locations, user, onNewLocation, setLoading}) {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const [newLocation, setNewLocation] = useState(false)
    const [lodgingData, setLodgingData] = useState({
        dates: "",
        guests: 0,
        image: "",
        link: "",
        season: "",
        location_id: 1,
        user_id: user.id
    })
 

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        fetch(`/lodgings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(lodgingData),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then(newLodging => {
                    onNewLodging(newLodging)
                    navigate(`/locations`)
                })
            } else {
            r.json().then((err) => setErrors(err.errors));
            }
        })
        setLoading(false)
    }
      
    const locationSelect = () => locations.map(location => (
        <option key={location.id} value={location.id} >{location.name}</option>
    ))
    
    function selectCity() {
        setNewLocation(true)
    }
    if (locations) {
        setLoading(false)
    }

    return (
        <div>
            {locations ?
            <>
                <h1>Your new stay in </h1>
                <Form.Select 
                aria-label="Choose city" 
                onChange={e => setLodgingData({...lodgingData, location_id: e.target.value})}
                >
                {locationSelect()}
                </Form.Select>
                
                {newLocation ? 
                ""
                :
                <>
                    <h1>or add new location</h1>
                    <AddLocation 
                    onNewLocation={onNewLocation} 
                    selectCity={selectCity} 
                    setLoading={setLoading} 
                    />
                </>
                }

                <Form onSubmit={handleSubmit}>

                    <Form.Group>
                        <Form.Label>Dates</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder='Dates of trip MM/DD/YYYY-MM/DD/YYYY ...'
                        value={lodgingData.dates}
                        onChange={(e) => setLodgingData({...lodgingData, dates: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Image url</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder='Image url ...'
                        value={lodgingData.image}
                        onChange={(e) => setLodgingData({...lodgingData, image: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Link url</Form.Label>
                        <Form.Control  
                        type="text" 
                        placeholder='Link url ...'
                        value={lodgingData.link}
                        onChange={(e) => setLodgingData({...lodgingData, link: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Season</Form.Label>
                        <Form.Control  
                        type="text" 
                        placeholder='What Season is this trip? ...'
                        value={lodgingData.season}
                        onChange={(e) => setLodgingData({...lodgingData, season: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Guests</Form.Label>
                        <Form.Control  
                        type="text" 
                        placeholder='Estimated exact number of guests ...'
                        value={lodgingData.guests}
                        onChange={(e) => setLodgingData({...lodgingData, guests: e.target.value})}
                        />
                    </Form.Group>
                    
                <Button onClick={handleSubmit}>Add your lodging</Button>
                </Form>
                {errors.map(error => (
                    <li>{error}</li>
                ))}
            </>
            : <h1>Loading..</h1>
            }
        </div>
    )
}

export default AddLodging       