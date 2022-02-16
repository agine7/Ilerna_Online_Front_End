import { Card } from "@mui/material";
import React from "react"

import {
    SafeAreaView,
    Text,
    Button,
  } from "react-native"

  const WIDTH_CARDS = "45vw";

export default function UserInformation(props) {
  console.log(props)
  return(
    <SafeAreaView style={{ flex: 1, justifyContent: "space-around", display: "inline-block", backgroundColor: "white", width: "100vw", height: "40vh"}}>
      <Card
        style={{
          color: "black",
          width: WIDTH_CARDS,
          height:300,
          margin: "2vw",
          display: "inline-block",
          }}
      >
        <Text
        style={{
          color: "black",
          fontWeight: 'bold',
          marginTop: 10,
          marginLeft: 5,
          width: 140,
        }}
      >
        User Information: <br></br>
      </Text>
      <Text>
        {JSON.stringify(props.items.Information)}
      </Text>
      </Card>
      <Card 
        style={{
          color: "black",
          width: WIDTH_CARDS,
          height:300,
          borderWidth: 2,
          margin: "2vw",
          display: "inline-block",
          }}
      >
        <Text
        style={{
          color: "black",
          fontWeight: 'bold',
          marginTop: 10,
          marginLeft: 5,
          width: 140,
        }}
      >
        Albums: <br />
      </Text>
      {props.items.albums?.map(album => {
        return(
          <Button
            title={album.title}
            color="#ffffff"
            style={{
              color: "black",
              margin: 50,
              height: 25,
              
            }}
          />
        )
      })}
      
      </Card>
      <Card 
        style={{
          color: "black",
          margin: "2vw",
          width: WIDTH_CARDS,
          height:300,
          display: "inline-block",
          }} 
      >
        <Text
        style={{
          color: "black",
          fontWeight: 'bold',
          marginTop: 10,
          marginLeft: 5,
          width: 140,
        }}
      >
        Tareas:
      </Text>
      <Text
      >
        {JSON.stringify(props.items.tareas)}
      </Text>
      </Card>
      <Card 
        style={{
          color: "black",
          margin: "2vw",
          width: WIDTH_CARDS,
          height:300,
          display: "inline-block",
          }} 
      >
        <Text
        style={{
          color: "black",
          fontWeight: 'bold',
          marginTop: 10,
          marginLeft: 5,
          width: 140,
        }}
      >
        Posts:
      </Text>
      <Text
      >
        {JSON.stringify(props.items.posts)}
      </Text>
      </Card>
      <Card 
        style={{
          color: "black",
          width: WIDTH_CARDS,
          height:300,
          margin: "2vw",
          display: "inline-block",
          }} 
      >
        <Text
        style={{
          color: "black",
          fontWeight: 'bold',
          marginTop: 10,
          marginLeft: 5,
          width: 140,
        }}
      >
        Comments:
      </Text>
      <Text
      >
        {JSON.stringify(props.items.comments)}
      </Text>
      </Card>
      <Card 
        style={{
          color: "black",
          width: WIDTH_CARDS,
          height:300,
          margin: "2vw",
          display: "inline-block",
          }} 
      >
        <Text
        style={{
          color: "black",
          fontWeight: 'bold',
          marginTop: 10,
          marginLeft: 5,
          width: 140,
        }}
      >
        Fotos:
      </Text>
      <Text
      >
        {JSON.stringify(props.items.fotos)}
      </Text>
      </Card>
    </SafeAreaView>
  );
};

