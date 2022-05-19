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

// import { TouchableOpacity } from "react-native-gesture-handler";
// import OTPInputView from "@twotalltotems/react-native-otp-input";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import Left from "react-native-vector-icons/Entypo";
import Gain from "react-native-vector-icons/AntDesign";
import DownArrow from "react-native-vector-icons/Entypo";
import BuySell from "./BuySell";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const CELL_COUNT = 6;

const BuyCoins = ({ navigation}) => {
  const [firstBox, onChangefirstBox] = useState('')
  const [secondBox, onChangesecondBox] = useState('')
  const [thirdBox, onChangethirdBox] = useState('')
  const [fourthBox, onChangefourthBox] = useState('')
  const [fivthBox, onChangefivthBox] = useState('')
  const [sixBox, onChangesixBox] = useState('')
  

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.buyHeader}>
            <View style={styles.cross}>
              <Left name="chevron-left" size={20} color="#fff" onPress={() => navigation.goBack()}/>
            </View>
            <View style={styles.buyBtcTitle}>
              <Text
                style={{ color: "white", fontWeight: 500, fontSize: "1.1rem" }}
              >
                Mobile Verification
              </Text>
            </View>
            <View style={styles.skip}>
              <Text
                style={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: "0.77rem",
                  padding: 4,
                  backgroundColor: "#a7adfd",
                  width: "100%",
                  paddingLeft: 10,
                  paddingRight: 10,

                  borderRadius: 5,
                }}
              >
                skip
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#5f40f6" }}>
            <View style={{ backgroundColor: "#5f40f6" }}>
              <View style={{ flexDirection: "column" }}>
                <View style={styles.buysellContainer}>
                  <View style={styles.outerBox}>
                    <View style={styles.innerBox}>
                      <View
                        style={{ marginTop: 20, padding: 10, flexWrap: "wrap" }}
                      >
                        <Text
                          style={{
                            color: "black",
                            fontWeight: 600,
                            fontSize: "1rem",
                          }}
                        >
                          Enter 6 digit code sent to you at{"\n"} +91-9876543210
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <View>
                          <TextInput
                            style={styles.input}
                            onChangeText={onChangefirstBox}
                            value={firstBox}
                            placeholder="-"
                            keyboardType="numeric"
                            maxLength={1}
                      
                          />
                        </View>
                        <View>
                          <TextInput
                            style={styles.input}
                            onChangeText={onChangesecondBox}
                            value={secondBox}
                            placeholder="-"
                            keyboardType="numeric"
                            maxLength={1}
                          />
                        </View>
                        <View>
                          <TextInput
                            style={styles.input}
                            onChangeText={onChangethirdBox}
                            value={thirdBox}
                            placeholder="-"
                            keyboardType="numeric"
                            maxLength={1}
                          />
                        </View>
                        <View>
                          <TextInput
                            style={styles.input}
                            onChangeText={onChangefourthBox}
                            value={fourthBox}
                            placeholder="-"
                            keyboardType="numeric"
                            maxLength={1}
                          />
                        </View>
                        <View>
                          <TextInput
                            style={styles.input}
                            onChangeText={onChangefivthBox}
                            value={fivthBox}
                            placeholder="-"
                            keyboardType="numeric"
                            maxLength={1}
                          />
                        </View>
                      </View>

                      <View>
                        <View
                          style={{
                            marginTop: 20,
                            backgroundColor: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text style={styles.amountText}>
                            Resend code
                            <Text
                              style={{
                                fontWeight: "bold",
                                fontSize: "0.75rem",
                                color: "#5f40f6",
                              }}
                            >
                              00.30sec
                            </Text>
                          </Text>
                        </View>
                        <View
                          style={{
                            marginTop: 20,
                            backgroundColor: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text style={styles.amountText}>
                            <Text
                              style={{
                                fontWeight: "bold",
                                fontSize: "0.75rem",
                                color: "#5f40f6",
                              }}
                            >
                              Enter a Phone Number
                            </Text>
                          </Text>
                        </View>
                      </View>

                      <View>
                        <View
                          style={{
                            marginTop: 50,
                            marginBottom: 150,
                            width: "98%",
                            backgroundColor: "#5f40f6",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            marginLeft: 2,
                            borderRadius: 5,
                          }}
                        >
                          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeTab")}>
                            <Text
                              style={{
                                fontWeight: 500,
                                fontSize: "0.97rem",
                                color: "white",
                              }}
                            >
                              Refresh Rate
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#5f40f6",
    paddingBottom: 25,
  },
  cross: {
    padding: 5,
    backgroundColor: "#a7adfd",
    width: 30,
    borderRadius: 5,
  },
  buyBtcTitle: {
    // marginLeft: "30%",
    textAlign: "center",
  },
  buysellContainer: {
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // backgroundColor: "#fff",
    // padding: 10,
    flexDirection: "column",
  },
  outerBox: {
    flexDirection: "row",
    // padding: 10,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  innerBox: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    padding: 8,
    paddingBottom: 15,
    // backgroundColor:'#fff',
    // borderWidth: 1,
    // borderRadius: 10,
    borderColor: "#e8e8e8",
    // shadowColor: "#171717",
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,
    // elevation: 6,
  },
  mainBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnCoin: {
    marginRight: 10,
  },
  wave: {
    // alignSelf: "center",
    marginTop: 5,
  },

  mainBox1: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 5,
  },
  graph: {
    justifyContent: "center",
    alignItems: "center",
  },
  percentageDistributed: {
    flexDirection: "row",
    flexBasis: "15%",
  },
  percentageText: {
    marginRight: 10,
    color: "#8b8a8e",
    fontWeight: 500,
    fontSize: "0.76rem",
  },
  standingLine: {
    color: "#8b8a8e",
    fontWeight: 500,
    fontSize: "0.76rem",
  },
  button: {
    // alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 12,
  },

  input: {
    height: 40,
    margin: 9,
    borderBottomWidth: 2,
    padding: 10,
    width: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    borderBottomColor: "#8b8a8e",
  },
  amountText: {
    color: "#8b8a8e",
    fontWeight: 500,
    fontSize: "0.76rem",
  },
  button: {
    // alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default BuyCoins;
