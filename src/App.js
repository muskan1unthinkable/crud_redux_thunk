
import React from 'react';
import './App.css';
import { Routes,Route } from "react-router-dom";
import Home from './Components/Home';
import EditUser from './Components/EditUser';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/addUser"  element={<AddUser/>}/>
        <Route exact path="/editUser/:id"  element={<EditUser/>}/>

      </Routes>
    </div>
  );
}

export default App;
