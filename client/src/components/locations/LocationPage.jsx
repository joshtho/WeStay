import React from 'react'
import {useParams, Link} from 'react-router-dom'
import LodgingTile from '../lodging/LodgingTile'
import Button from 'react-bootstrap/Button'

function LocationPage({lodgings, locations, onHandleDelete}) {
const params = useParams()
const locationId = parseInt(params.id)
const currentLocation = locations.find(location => location.id === locationId)
const stays = lodgings.filter(lodging => locationId === lodging.location.id)
const listStays = () => (stays.map(stay => (
    <LodgingTile 
    key={stay.id} 
    stay={stay} 
    location={currentLocation} 
    onHandleDelete={onHandleDelete} 
    />
)))
console.log(lodgings)
return (
    <div>
        
        {currentLocation ? 
        <div>
            <h1>{currentLocation.name}</h1>
            {listStays()}
            {/* <Link to={`/lodgings/${locationId}`} >
                <Button>Add new lodging</Button>
            </Link> */}
            
        </div>
         : "" }
    </div>
    )
}
      
export default LocationPage