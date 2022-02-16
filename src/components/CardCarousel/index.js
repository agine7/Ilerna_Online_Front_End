import React, { Component } from "react"
import male from "../../assets/male.png"
import female from "../../assets/female.png"
import {cards, fotos, albums, tareas, posts, comments} from "../../Constants"
import {
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native"

const ITEM_WIDTH = 200
const ITEM_HEIGHT = 250


export default function SimpleCardCarousel(props) {
    
    function pressImage(event) {
      const userID = event.target.parentElement.id
      props.onpressedImage(userID)
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingRight: 0,}}>
        <ScrollView
          horizontal={true}
          decelerationRate={"normal"}
          snapToInterval={ITEM_WIDTH}
          bounces={false}
          style={{ marginTop: 0, paddingHorizontal: 0, marginRight: 0,}}
          showsHorizontalScrollIndicator={true}
          scrollEventThrottle={12}
        >
          {cards.map((item, idx) => {
            return (
              <Text
                style={{
                  marginTop: 10,
                  width: ITEM_WIDTH,
                  height: ITEM_HEIGHT,
                  backgroundColor: "white", 
                  textAlign: "center",
                  fontWeight: "bold",
                  }}>
                    {item.name}
              
              <TouchableOpacity onPress={pressImage}>
              <View
              nativeID={item.id}
                style={{
                  margin: 0,
                  width: ITEM_WIDTH,
                  height: ITEM_HEIGHT,
                  borderColor: "black",
                }}
              >
                <ImageBackground
                nativeID={item.id}
                  source={item.gender === "Male" ? male:female}
                  style={{
                    flex: 1,
                    resizeMode: "cover",
                    justifyContent: "center",
                    margin: 5,
                  }}
                />
              </View>
              </TouchableOpacity>
              </Text>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    )
  }