import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from "react"
import Navbar from './components/NavBar/index';
import SimpleCardCarousel from './components/CardCarousel/index';
import UserInformation from './components/UserInformation';
import {cards, albums, tareas, posts, comments, fotos} from "./Constants"

const GetFotosFromAlbums = (userAlbums) => {
  let userFotos = [];
  userAlbums.map(album => {
    let fotosFromAlbum = fotos.filter(foto => foto.albumId = album.id);
    userFotos.push(fotosFromAlbum);
  });
  return userFotos;
}

const App = () => {
  const [userData, setUserData] = useState({})
  function loadUserInformation(userID) {
    const UserInfo = cards.find(user => user.id == userID);
    const UserAlbums = albums.filter(album => album.userId == userID);
    const UserTareas = tareas.filter(tareas => tareas.userId == userID);
    const UserPosts = posts.filter(posts => posts.userId == userID);
    const UserComments = comments.filter(comments =>comments.userId == userID);
    //const UserFotos = GetFotosFromAlbums(UserAlbums);

    console.log(UserInfo)
    const User = {Information: UserInfo, 
      albums: UserAlbums, 
      tareas: UserTareas,
      posts: UserPosts,
      comments: UserComments,
      //fotos: UserFotos
    }
    setUserData(User)
  }
  return (
    <>
    <Navbar />
    <SimpleCardCarousel
    onpressedImage = {loadUserInformation}
    />
    <UserInformation
    items = {userData}
    />
    </>
  );
};
export default App;


