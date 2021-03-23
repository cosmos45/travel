import React, { useState } from "react";
import { View } from "react-native";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  TextInput,
} from "react-native";
import { Button,  Text, Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "../firebase/fire";

const visits = ({ navigation }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpass, setcpass] = useState("")

  const signUp = async () => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      navigation.navigate("SignIn");
    } catch (err) {
      setError(err.message);
    }
  };

  const image = require("../assets/images/loginbg2.jpg");
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={image} style={{ width: "100%", height: 730 }}>
          <View style={{ top: 30, }}>
            <Text style={styles.UserGreet}>Go on a</Text>
            <Text style={styles.UserGreet}>top rated</Text>
            <Text style={styles.UserGreet}>experience</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              label="Name"
              value={name}
              placeholder="Name"
              placeholderTextColor="#003f5c"
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              label="Phone Number"
              value={phone}
              placeholder="Phone Number"
              placeholderTextColor="#003f5c"
              onChangeText={setPhone}
            />
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
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              label="Confirm Password"
              placeholder="Confirm Password"
              placeholderTextColor="#003f5c"
              value={cpass}
              onChangeText={setcpass}
              secureTextEntry
            />
          </View>
          {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
          <View style={{ top: 50, left: 35, alignSelf: "center" }}>
            <Button
              title="SignUp"
              titleStyle={{ color: "white" }}
              onPress={() => signUp()}
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
            onPress={() => navigation.navigate("SignIn")}
            style={{ top: 65, alignSelf: "center" }}
          >
            <Text style={{ color: "white" }}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  UserGreet: {
    fontSize: 41,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 25,
  },
  inputView: {
    backgroundColor: "white",
    opacity: 0.9,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    justifyContent: "center",
    top: 50,
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
  loginBtn: {
    width: "60%",
    borderRadius: 65,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    
  },
});
export default visits;
