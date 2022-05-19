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

const BuyBtc = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buyHeader}>
        <View style={styles.cross} >
          <Cross name="cross" size={20} color="#fff" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.buyBtcTitle}>
          <Text style={{ color: "white", fontWeight: 500, fontSize: "1rem" }}>
            Buy BTC
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "#5f40f6" }}>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.buysellContainer}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  padding: 10,
                  width: "50%",
                  //   height: "50%",
                  backgroundColor: "#34c561",
                  borderWidth: 1,
                  textAlign: "center",
                  marginTop: 20,
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: 500, color: "white" }}>
                  Buy
                </Text>
              </View>
              <View
                style={{
                  padding: 10,
                  width: "50%",
                  //   height: "50%",
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  textAlign: "center",
                  marginTop: 20,
                  borderRadius: 5,
                }}
              >
                <Text>Sell</Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 50,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black" }}>1 BTC is roughly</Text>
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
                  fontSize: "1.1rem",
                }}
              >
                38,62,514.94 <Text style={{ fontSize: "0.89rem" }}>INR</Text>
              </Text>
            </View>

            <View
              style={{
                // width: '50%',

                marginTop: 20,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#f5f5f5",
                borderColor: "#cecece",
              }}
            >
              <Text
                style={{
                  color: "#76757a",
                  fontWeight: "bold",
                  fontSize: "0.87rem",
                  textAlign: "center",
                  padding: 7,
                  paddingLeft: 60,
                  paddingRight: 60,
                }}
              >
                Amount
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
              <Text
                style={{
                  color: "#8b8a8e",
                  fontWeight: 500,
                  fontSize: "0.76rem",
                }}
              >
                Available balance: rs 40,000
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Percentage percentagevalue="25" />
              <View style={{ marginRight: 10 }} />
              <Percentage percentagevalue="50" />
              <View style={{ marginRight: 10 }} />
              <Percentage percentagevalue="100" />
            </View>
            <View
              style={{
                marginTop: 10,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#8b8a8e",
                  fontWeight: 500,
                  fontSize: "0.76rem",
                }}
              >
                Min rs100 | Max rs2,50,0000
              </Text>
            </View>
            <View
              style={{
                marginTop: 100,
                width: "94%",
                backgroundColor: "#38d5b9",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
               marginLeft:10,
               borderRadius: 5,
              }}
            >
              <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate("BuyBtcCheckout")}>
                <Text style={{fontWeight: 500,fontSize: "0.97rem",color: "white"}}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
});

export default BuyBtc;
