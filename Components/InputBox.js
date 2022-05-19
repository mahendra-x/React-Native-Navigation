import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const InputBox = ({ userImg, placeholder, secureText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    const strongRegex = new RegExp(
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );

    if (!strongRegex.test(email)) {
      showMessage(MESSAGE.email);
      return false;
    } else if (password.length < 8) {
      showMessage(MESSAGE.password);
      return false;
    }
  };
  console.log(email);
  console.log(password);

  const handleChange =(e)=>{
    console.log("here");
    console.log(email);
  console.log(password);
  // if(email||password)
  // handleSomething(email,password);
  }

  return (
    <View style={styles.email}>
      <Image
        style={{ width: 40, height: 40, borderRadius: 10, marginRight: 8 }}
        source={require(`../assets/others/${userImg}.png`)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="black"
        placeholder={`${placeholder}`}
        secureTextEntry={placeholder.includes("Password") ? true : false}
        onChangeText={
          placeholder.includes("E-Mail")
            ? (email) => setEmail(email)
            : "" || placeholder.includes("Password")
            ? (password) => setPassword(password)
            : ""
        }
        onBlur={(e) => handleChange(e)}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    color: "black",
  },

  email: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "20px",
    alignItems: "flex-end",
    backgroundColor: "white",
  },

  input: {
    marginTop: "20px",
    borderBottomWidth: 1,
    // textAlign: 'center',
    width: "80%",
    height: "100%",
    padding: 5,
    fontWeight: 600,
    borderBottomColor: "#9a999d",
    color: "black",
  },
});

export default InputBox;
