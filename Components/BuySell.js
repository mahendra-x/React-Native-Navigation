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
import Percentage from "./Percentage";
const BuySell = ({
  leftTitle,
  rightTitle,
  buyValue,
  backgroundColor,
  currencyImg,
  currencyName,
}) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          paddingBottom:0
        }}
      >
        <View>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>{leftTitle}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 14, fontWeight: 500, color: "#8b8a8e" }}>
            {rightTitle}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          // width: '50%',
          padding: 10,

          //   marginTop: 20,
          backgroundColor: "#fff",
          justifyContent: "space-between",
          //   alignItems: "center",
          //   alignSelf: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "#f5f5f5",
            borderColor: "#cecece",
            flexBasis: "60%",
          }}
        >
          <Text
            style={{
              color: "#76757a",
              fontWeight: "bold",
              fontSize: "0.87rem",
              //   textAlign: "center",
              padding: 7,
              //   paddingLeft: 60,
              //   paddingRight: 60,
            }}
          >
            {buyValue}
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: `${backgroundColor}`,
            borderColor: "#cecece",
            flexBasis: "40%",
            marginLeft: 5,
            flexDirection: "row",
            padding: 5,
            justifyContent: "space-around",
          }}
        >
          <View style={{ backgroundColor: "#fff", borderRadius: "50%" }}>
            <Image
              style={{ width: 25, height: 25, resizeMode: "contain" }}
              source={require(`../assets/currency-icon/${currencyImg}.png`)}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: 500, color: "#fff" }}>
              {currencyName}
            </Text>
          </View>
          <View>
            <DownArrow name="chevron-small-down" size={20} color="#fff" />
          </View>
        </View>
      </View>
    </>
  );
};

export default BuySell;
