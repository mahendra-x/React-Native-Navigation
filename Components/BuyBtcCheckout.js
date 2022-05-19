import React from "react";
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
import { TouchableOpacity } from "react-native-gesture-handler";

import Cross from "react-native-vector-icons/Entypo";
import Ruppe from "react-native-vector-icons/FontAwesome";
import Percentage from "./Percentage";
import Left from "react-native-vector-icons/Entypo";
import Right from "react-native-vector-icons/Entypo";
import Pert from "react-native-vector-icons/MaterialCommunityIcons";

const BuyBtc = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buyHeader}>
        <View style={styles.cross}>
          <Left name="chevron-left" size={20} color="#fff" onPress={() => navigation.goBack()}/>
        </View>
        <View style={styles.buyBtcTitle}>
          <Text style={{ color: "white", fontWeight: 500, fontSize: "1rem" }}>
            Buy BTC
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ backgroundColor: "#5f40f6" }}>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.buysellContainer}>
              <View
                style={{
                  marginTop: 50,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "black" }}>Total BTC</Text>
              </View>
              <View
                style={{
                  marginTop: 1,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "0.99rem",
                  }}
                >
                  0.0335005655 <Text style={{ fontSize: "1.1rem" }}> BTC</Text>
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
                <Text style={styles.amountText}>Buy at price rs 37,86,878</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  width: "100%",

                  marginTop: 40,
                  backgroundColor: "#fff",
                  justifyContent: "space-between",
                  // alignItems: "center",
                  // alignSelf: "center",
                  borderWidth: 1,
                  borderRadius: 5,
                  backgroundColor: "#f5f5f5",
                  borderColor: "#cecece",
                  padding: 7,
                }}
              >
                <View style={styles.couponContainer}>
                  <View style={styles.couponPert}>
                    <Pert name="brightness-percent" size={25} color="#f4951e" />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#76757a",
                        fontWeight: "bold",
                        fontSize: "0.87rem",
                        textAlign: "center",
                        padding: 7,
                      }}
                    >
                      Apply Coupon
                    </Text>
                  </View>
                </View>
                <View>
                  <Right name="chevron-small-right" size={30} color="black" />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  width: "100%",

                  marginTop: 40,
                  backgroundColor: "#fff",
                  justifyContent: "space-between",
                  // alignItems: "center",
                  // alignSelf: "center",
                  borderWidth: 1,
                  borderRadius: 5,
                  backgroundColor: "#f5f5f5",
                  borderColor: "#cecece",
                  padding: 7,
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: 4,
                    }}
                  >
                    <View>
                      <Text style={styles.amountText}>Fees</Text>
                    </View>
                    <View>
                      <Text style={styles.amountColor}>0</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: 4,
                    }}
                  >
                    <View>
                      <Text style={styles.amountText}>Discount</Text>
                    </View>
                    <View>
                      <Text style={styles.amountColor}>-rs 100</Text>
                    </View>
                  </View>

                  <View style={styles.horizontalLines} />

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: 4,
                    }}
                  >
                    <View>
                      <Text style={styles.amountText}>Amount Payable</Text>
                    </View>
                    <View>
                      <Text style={styles.amountColor}>Rs 11,200</Text>
                    </View>
                  </View>
                </View>
              </View>

            

              <View
                style={{
                  marginTop: 60,
                  marginBottom: 50,
                  width: "98%",
                  backgroundColor: "#38d5b9",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: 2,
                  borderRadius: 5,
                }}
              >
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={{
                      fontWeight: 500,
                      fontSize: "0.97rem",
                      color: "white",
                    }}
                    onPress={() => navigation.navigate("Home")}
                  >
                    Refresh Rate
                  </Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buyHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
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
    marginLeft: "35%",
    textAlign: "center",
  },
  buysellContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "column",
  },
  button: {
    // alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10,
  },
  couponContainer: {
    flexDirection: "row",
  },
  couponPert: {
    alignSelf: "center",
  },
  payFee: {
    flexDirection: "row",
  },
  amountColor: {
    color: "black",
    fontWeight: "bold",
    fontSize: "0.99rem",
  },
  amountText: {
    color: "#8b8a8e",
    fontWeight: 500,
    fontSize: "0.76rem",
  },
  horizontalLines: {
    borderBottomWidth: 2,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    marginBottom: 5,
    borderColor: "#8b8a8e",
  },
});

export default BuyBtc;
