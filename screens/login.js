import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


const visits = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const image = require("../assets/images/loginbg2.jpg");
  return (
    <View>
      <ImageBackground source={image} style={{ width: "100%", height: 600 }}>
        <StatusBar style="auto" />
        <View style={{ top: 50 }}>
          <Text style={styles.UserGreet}>Go on a</Text>
          <Text style={styles.UserGreet}>top rated</Text>
          <Text style={styles.UserGreet}>experience</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 150,
    height: 100,
  },

  inputView: {
    backgroundColor: "white",
    opacity: 0.3,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    justifyContent: "center",
    top: 120,
    alignSelf: "center",
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: "black",
  },

  forgot_button: {
    height: 30,
    top: 120,
    color: "white",
    alignSelf: "center",
  },

  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    backgroundColor: "black",
    
    
    
  },

  UserGreet: {
    fontSize: 41,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 25,
  },

  loginText: {
      color: "white",
  },
});

export default visits;
