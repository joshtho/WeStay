import './App.css';
import HomePage from './components/static/HomePage';
import LoginPage from './components/navigation/LoginPage';
import { useEffect, useState } from 'react';
import LocationsList from './components/locations/LocationsList';
import NavBar from './components/navigation/NavBar'
import LocationPage from './components/locations/LocationPage'
import AddLocation from './components/locations/AddLocation';
import EditLocation from './components/locations/EditLocation';
import AddLodging from './components/lodging/AddLodging';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/navigation/SignupPage';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [locations, setLocations] = useState([])
  const [lodgings, setLodgings] = useState([])
  const [loading, setLoading] = useState(true)

  //update all state when post patch delete happens 
  //shouldnt see edit and delete links on someone elses resource, check user.id === user_id

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          setLoggedIn(true)
          setLoading(false)
        })
      } else {
        console.log("no user")
        setLoading(false)
      }})
  }, []);
  
  useEffect(() => {
    fetch('/locations')
    .then(r => r.json())
    .then(setLocations)
    fetch('/lodgings')
    .then(r => r.json())
    .then(setLodgings)
  }, [])

  function handleNewLocation(newLocation) {
    setLocations([...locations, newLocation])
    setUser([...user.locations, newLocation])

  }

  function handleNewLodging(newLodging) {
    setLodgings([...lodgings, newLodging])
    setUser({...user, lodgings: [...user.lodgings, newLodging]})
  }
  
  function handleDeleteLodging(id) {
    const updatedLodgings = lodgings.filter(lodgings => lodgings.id !== id)
    const updateUserLodgings = user.lodgings.filter(lodgings => lodgings.id !== id)
    setLodgings(updatedLodgings)
    setUser({...user, lodgings: updateUserLodgings})
  }

  if (loading) {
    return <div>Loading...</div>
  }

  console.log(lodgings)
  console.log(locations)
  console.log(user)
  return (
    <div className="App">
      <Router>
      <NavBar loggedIn={loggedIn} user={user} setUser={setUser} setLoggedIn={setLoggedIn} />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} setUser={setUser} />} />
          <Route path="/signup" element={<SignupPage setLoggedIn={setLoggedIn} setUser={setUser} />} />
          <Route path="/locations" element={<LocationsList locations={locations} user={user} />} />
              <Route 
              path="/locations/:id" 
              element={
              <LocationPage 
              user={user}
              onHandleDelete={handleDeleteLodging} 
              /> } />
              
              <Route 
              path="/locations/add" 
              element={<AddLocation onNewLocation={handleNewLocation} user={user} />} 
              />

              {/* <Route 
              path="/locations/:id/edit" 
              element={
              <EditLocation 
              locations={locations} 
              onHandleUpdate={handleUpdate} 
              onHandleDelete={handleDeleteLocation}
              />} />
                */}

              <Route 
              path="/lodgings/add" 
              element={
              <AddLodging 
              onNewLodging={handleNewLodging} 
              locations={locations} 
              user={user}
              />} 
              /> 
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
