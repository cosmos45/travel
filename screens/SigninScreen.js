import React, { useState } from "react";
import { View } from "react-native";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  TextInput,
} from "react-native";
import { Button, Text, Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "../firebase/fire";
const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      navigation.navigate("Home");
    } catch (err) {
      setError(err.message);
    }
  };
   
    const image = require("../assets/images/loginbg3.jpg");

  return (
    <View>
        <ImageBackground source={image} style={{ width: "100%", height: 700 }}>
          <View style={{ top: 150, marginBottom: 90 }}>
            <Text style={styles.UserGreet}>Login</Text>
          </View>

          <View style={styles.inputView}>
            <TextInput
              label="Email"
              value={email}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              label="Password"
              placeholder="Password"
              placeholderTextColor="#003f5c"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
          <View style={{ top: 120, left: 35, alignSelf: "center" }}>
            <Button
              title="Login"
              onPress={() => signIn()}
              titleStyle={{ color: "white" }}
              type="outline"
              buttonStyle={{
                width: "60%",
                color: "white",
                borderColor: "white",
                borderRadius: 25,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Registration")}
            style={{ top: 125, alignSelf: "center" }}
          >
            <Text style={{ color: "white" }}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      
    </View>
  );
};
 const styles = StyleSheet.create({
   UserGreet: {
     fontSize: 41,
     fontWeight: "bold",
     color: "white",
     alignSelf: "center",
   },
   inputView: {
     backgroundColor: "white",
     opacity: 0.9,
     borderRadius: 30,
     width: "70%",
     height: 45,
     marginBottom: 20,
     justifyContent: "center",
     top: 120,
     alignSelf: "center",
     alignItems: "center",
   },
 });


export default SigninScreen;
