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

import Left from "react-native-vector-icons/Entypo";
import Gain from "react-native-vector-icons/AntDesign";
import DownArrow from "react-native-vector-icons/Entypo";
import BuySell from "./BuySell";

const BuyCoins = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.buyHeader}>
            <View style={styles.cross}>
              <Left name="chevron-left" size={20} color="#fff" onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.buyBtcTitle}>
              <Text
                style={{ color: "white", fontWeight: 500, fontSize: "1rem" }}
              >
                USDT/INR
              </Text>
            </View>
            <View style={styles.buyBtcTitle}>
              <Text
                style={{ color: "white", fontWeight: 500, fontSize: "1rem" }}
              >
                {/* USDT/INR */}
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#5f40f6" }}>
            <View
              style={{
                backgroundColor: "red",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <View style={{ backgroundColor: "#5f40f6" }}>
                <View style={{ flexDirection: "column" }}>
                  <View style={styles.buysellContainer}>
                    <View style={styles.outerBox}>
                      <View style={styles.innerBox}>
                        <View style={styles.mainBox}>
                          <View style={styles.btnCoin}>
                            <Image
                              style={{ width: 40, height: 40 }}
                              source={require(`../assets/currency-icon/BTC.png`)}
                            />
                          </View>
                          {/* <View style={styles.wave}>
            <Image
              style={{ width: 85, height: 25 }}
              source={require("../assets/currency-icon/wave.PNG")}
            />
          </View> */}
                          <View style={{ flexDirection: "column" }}>
                            <View style={styles.btnCoin}>
                              <Text
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "1.35rem",
                                  color: "#34c561",
                                }}
                              >
                                300000.123
                                <Text style={{ marginLeft: 5 }}>
                                  <Gain
                                    name="arrowup"
                                    size={20}
                                    color="green"
                                  />
                                </Text>
                              </Text>
                            </View>
                            <View style={styles.wave}>
                              <Text
                                style={{ fontWeight: 500, color: "#717075" }}
                              >
                                $200.000.13
                                <Text
                                  style={{ marginLeft: 8, color: "#34c561" }}
                                >
                                  +2.90%
                                </Text>
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View style={styles.mainBox1}></View>
                        <View style={styles.mainBox}>
                          <View style={styles.btnCoin}>
                            <Text
                              style={{
                                fontWeight: 500,
                                color: "grey",
                                fontSize: 12,
                              }}
                            >
                              High 12,20,300
                            </Text>
                            <View style={styles.wave}>
                              <Text
                                style={{
                                  fontWeight: 500,
                                  color: "green",
                                  fontSize: 12,
                                }}
                              >
                                Low 12,20,300
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: "#f5f5f5" }}>
            <View
              style={{
                backgroundColor: "#fff",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <View style={{ padding: 5 }}>
                <View style={styles.graph}>
                  <Image
                    style={{ width: "100%", height: 180, resizeMode: "cover" }}
                    source={require("../assets/currency-icon/wave1.png")}
                  />
                </View>
              </View>

              <View
                style={{
                  // marginTop: 20,
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
                  05/01/2021 | 01:30
                </Text>
              </View>

              <View style={{ flexWrap: "wrap" }}>
                <BuySell
                  leftTitle="Buy"
                  rightTitle="Rate : 89,1000"
                  buyValue="2365898"
                  backgroundColor="#5f40f6"
                  currencyImg="ETH"
                  currencyName="ETH"
                />
                <BuySell
                  leftTitle="By"
                  rightTitle=""
                  buyValue="2365898"
                  backgroundColor="#38d5b9"
                  currencyImg="INR"
                  currencyName=""
                />
              </View>
              <View style={{ padding: 10, flexDirection: "row" }}>
                <View style={styles.percentageDistributed}>
                  <Text style={styles.percentageText}>25%</Text>
                  <Text style={styles.standingLine}>|</Text>
                </View>
                <View style={styles.percentageDistributed}>
                  <Text style={styles.percentageText}>50%</Text>
                  <Text style={styles.standingLine}>|</Text>
                </View>
                <View style={styles.percentageDistributed}>
                  <Text style={styles.percentageText}>75%</Text>
                  <Text style={styles.standingLine}>|</Text>
                </View>
                <View style={styles.percentageDistributed}>
                  <Text style={styles.percentageText}>100%</Text>
                  <Text style={styles.standingLine}>|</Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  width: "94%",
                  backgroundColor: "#38d5b9",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: 10,
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
                    onPress={() => navigation.navigate("BuyBtc")}
                  >
                    Buy
                  </Text>
                </TouchableOpacity>
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
    marginLeft: "30%",
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
    backgroundColor: "#f5f5f5",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  innerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 8,
    paddingBottom: 15,
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
});

export default BuyCoins;
