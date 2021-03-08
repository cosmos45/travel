import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";


const Home = () => {
  

  
  

    const image = require('../assets/bg1.jpg')


  return (
    <View>
      <ImageBackground
        source={image}
        style={{ width: "100%", height: 370 }}
        imageStyle={{
          borderBottomRightRadius: 35,
          borderBottomLeftRadius: 35,
        }}
      >
        <View style={styles.DarkOverlay}></View>

        <Text style={styles.UserLocation}>You're in Mumbai</Text>
        <Text style={styles.UserGreet}>Hi Omkar</Text>

        <SearchBar
          lightTheme
          autoCapitalize="none"
          icon={{ type: "font-awesome", name: "search" }}
          placeholder="Search a user, major etc ..."
          inputContainerStyle={{
            backgroundColor: "white",
            borderRadius: 50,
          }}

          containerStyle={{
            backgroundColor: "transparent",
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
            paddingTop:75,
            display: 'flex',
            flex: 1,
            width:330,
            paddingLeft: 55
            
            


          }}
        />

        {/* <SearchBar
          inputContainerStyle={{ backgroundColor: "white",
        borderRadius: 50 ,
       }}
          containerStyle={{

            
          
            
          }}
          placeholderTextColor={"#g5g5g5"}
          placeholder={"Type here"}
        /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  
 
  
  

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  DarkOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 370,
    backgroundColor: "#000",
    opacity: 0.3,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },

  searchContainer: {
    paddingTop: 375,
    paddingLeft: 16,
  },

  UserGreet: {
    fontSize: 41,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 25,
  },
  UserLocation: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
    paddingTop: 200,
    paddingLeft: 25,
  
  },
});

export default Home;
