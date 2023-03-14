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


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/locations')
    .then(r => r.json())
    .then(setLocations)
    
  }, [])
  

  return (
    <div className="App">
      <Router>
      <NavBar loggedIn={loggedIn} user={user} />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} setUser={setUser} />} />
          {/* <Route path="/locations" element={<LocationsList locations={locations}  />} />
              <Route 
              path="/locations/:id" 
              element={
              <LocationPage 
              lodgings={lodgings} 
              locations={locations}
              onHandleDelete={handleDeleteLodging} 
              /> } />
              
              <Route 
              path="/locations/:id/edit" 
              element={
              <EditLocation 
              locations={locations} 
              onHandleUpdate={handleUpdate} 
              onHandleDelete={handleDeleteLocation}
              />} />

              <Route 
              path="/locations/add" 
              element={<AddLocation onNewLocation={handleNewLocation} />} 
              />

              <Route 
              path="/lodgings/:id" 
              element={
              <AddLodging 
              onNewLodging={handleNewLodging} 
              locations={locations} />} 
              />
          <Route /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
