import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import Navbar from './components/NavBar/index';
import SimpleCardCarousel from './components/CardCarousel/index';
import UserInformation from './components/UserInformation';
  
const App = () => {
  function loadUserInformation(userID) {
    
  }
  return (
    <>
    <Navbar />
    <SimpleCardCarousel
    onpressedImage = {loadUserInformation}
    />
    <UserInformation/>
    </>
  );
};
export default App;


