import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import LodgingTile from '../lodging/LodgingTile'
import Container from 'react-bootstrap/esm/Container'

function LodgingList({user, onHandleDelete, setLoading }) {
  const userLodgings = () => 
    user.lodgings.map(lodging => (
      <>
      <LodgingTile key={lodging.id} stay={lodging} onHandleDelete={onHandleDelete} setLoading={setLoading} />
      </>
    ))
  return (
    <>
    <Container className='card-grid'>
        {userLodgings()}
        
    </Container>
    <br></br>
        <Link to="/lodgings/add">
            <Button className='btm-btn'>Add new stay</Button>
        </Link>
    </>
  )
}

export default LodgingList;