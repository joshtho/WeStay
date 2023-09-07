import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import LodgingTile from '../lodging/LodgingTile'

function LodgingList({user, onHandleDelete, setLoading }) {
  const userLodgings = () => 
    user.lodgings.map(lodging => (
      <>
      <LodgingTile key={lodging.id} stay={lodging} onHandleDelete={onHandleDelete} setLoading={setLoading} />
      </>
    ))
  return (
    <>
    <div className='row'>
        {userLodgings()}
        
    </div>
    <br></br>
        <Link to="/lodgings/add">
            <Button className='btm-btn'>Add new stay</Button>
        </Link>
    </>
  )
}

export default LodgingList;