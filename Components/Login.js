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
  CheckBox,
  Toast,
} from "react-native";
const regexEmail = new RegExp(
  /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
);

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/ionicons";
import InputBox from "./InputBox";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [emailerr, setEmailerr] = useState("Email is required");
  const [passerr, setPasserr] = useState("Password is required");

  const Onsubmit = () => {
    if (emailerr === "" && passerr === "") {
      navigation.navigate("otp");
    } else if (emailerr !== "") {
      // Toast.show({
      //   text: emailerr,
      //   buttonText: "Okay",
      //   duration: 3000,
      //   style: { margin: 20 }
      // })
    } else {
      // Toast.show({
      //   text: passerr,
      //   buttonText: "Okay",
      //   duration: 3000,
      //   style: { margin: 20 }
      // })
    }
  };

  const validate = (e, inputTypeData) => {
    switch (inputTypeData) {
      case "email":
        if (e.length === 0) {
          setEmailerr(emailerr);
        } else if (!regexEmail.test(e)) {
          setEmailerr("Invalid Email");
        } else {
          setEmailerr("");
        }
        break;

      case "pass":
        if (e.length === 0) {
          setPasserr(passerr);
        } else if (e.length <= 5) {
          setPasserr("Password is too small");
        } else {
          setPasserr("");
        }
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.round}>
        <Icon
          name="chevron-back-circle-outline"
          size={30}
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <Image
          style={styles.img}
          source={require("../assets/others/logo.png")}
        />
      </View>
      <View style={styles.square}>
        <Text style={styles.txt1}>Welcome!</Text>

        <Text style={styles.txt6}>sign in to continue</Text>

        <View style={styles.email}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 10, marginRight: 8 }}
            source={require(`../assets/others/email_icon.png`)}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="E-Mail ID"
            onChangeText={(e) => {
              validate(e, "email"), setEmail(e);
            }}
          />
        </View>
        <View style={styles.email}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 10, marginRight: 8 }}
            source={require(`../assets/others/key_icon.png`)}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Password"
            onChangeText={(e) => {
              validate(e, "pass"), setPassword(e);
            }}
          />
        </View>

        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#5b46f7" }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity style={styles.btn} onPress={Onsubmit}>
            <Text style={styles.txt5}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ justifyContent: "center", alignItems: "center", top: 15 }}
        >
          <Image
            style={{ width: 80, height: 80 }}
            source={require(`../assets/others/camera.PNG`)}
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            position: "relative",
            top:15
          
          }}
        >
          <Text style={styles.txt4}>
            Don`t` have an account? <Text onPress={()=>navigation.navigate('signup')}>Sign Up</Text>
          </Text>
          {/* <Text style={styles.txt8}>FAQ's | SUPPORT</Text> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholder: {
    fontWeight: "bold",
  },

  icon: {
    color: "white",
    marginLeft: "15px",
    marginTop: "7px",
    padding: 5,
    backgroundColor: "#a7adfd",
    width: 40,
    borderRadius: 5,
  },

  icon1: {
    border: "1px solid",
    borderRadius: "2px",
    backgroundColor: "#99ff99",
    color: "#33cc33",
    marginTop: "23px",
    marginRight: "10px",
  },

  icon2: {
    border: "1px solid",
    borderRadius: "2px",
    backgroundColor: "#99ff99",
    color: "#33cc33",
    marginTop: "23px",
    marginRight: "10px",
  },

  icon3: {
    border: "1px solid",
    borderRadius: "2px",
    backgroundColor: "#99ff99",
    color: "#33cc33",
    marginTop: "23px",
    marginRight: "10px",
  },

  icon4: {
    border: "1px solid",
    borderRadius: "2px",
    backgroundColor: "#99ff99",
    color: "#33cc33",
    marginTop: "23px",
    marginBottom: "21px",
    marginRight: "10px",
  },

  img: {
    display: "flex",
    alignSelf: "center",
    width: "24vh",
    height: "7vh",
  },

  email: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "20px",
    alignItems: "flex-end",
  },

  password: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "20px",
  },

  confirm: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "20px",
  },

  referral: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "20px",
  },

  txt1: {
    fontWeight: "bold",
    marginTop: "20px",
    marginLeft: "20px",
  },

  txt6: {
    marginLeft: "20px",
    marginBottom: 20,
  },

  round: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "#5b46f7",
  },
  square: {
    display: "flex",
    backgroundColor: "#fff",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    zIndex: 1,
    height: "90%",
    width: "100%",
    position: "absolute",
    top: 100,
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

  input1: {
    marginTop: "23px",
    borderBottomWidth: 1,
  },

  input2: {
    marginTop: "23px",
    borderBottomWidth: 1,
  },

  input3: {
    marginTop: "23px",
    marginBottom: "23px",
    borderBottomWidth: 1,
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    color: "white",
    width: "90%",
    marginTop: 10,
    marginLeft: "18px",
    marginBottom: "20px",
    borderRadius: "4px",
    backgroundColor: "#5b46f7",
  },

  txt2: {
    marginLeft: "49px",
    marginTop: "5px",
    marginBottom: "20px",
  },

  txt3: {
    marginTop: "45px",
    marginBottom: "45px",
  },

  txt4: {
    marginBottom: "16px",
    marginLeft: "20px",
    justifyContent: "center",
    alignItems: "center",
  },

  txt5: {
    color: "white",
    fontWeight: 600,
  },

  txt7: {
    marginLeft: "10px",
  },

  txt8: {
    // marginLeft: "70px",
  },
});

export default Login;
