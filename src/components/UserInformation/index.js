import { Card } from "@mui/material";
import React from "react"

import {
    SafeAreaView,
    Text,
  } from "react-native"

  const WIDTH_CARDS = "45vw";

export default function UserInformation() {
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
        User Information:
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
        Albums:
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
        Tareas:
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
      </Card>
    </SafeAreaView>
  );
};

