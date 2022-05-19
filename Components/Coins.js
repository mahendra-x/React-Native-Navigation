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
} from "react-native";

const Coins = (props) => {
    console.log('props',props);
  const { currencyImg, currencyAbbr,currencyName, currencyValue,gainorlossColor, gainorloss } =
    props;
  return (
    <View style={styles.outerBox}>
      <View style={styles.innerBox}>
        <View style={styles.mainBox}>
          <View style={styles.btnCoin}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require(`../assets/currency-icon/${currencyImg}`)}
            />
          </View>
          <View style={styles.wave}>
            <Image
              style={{ width: 85, height: 25 }}
              source={require("../assets/currency-icon/wave.PNG")}
            />
          </View>
        </View>
        <View style={styles.mainBox1}>
          <View style={styles.btnCoin}>
            <Text style={{ fontWeight: "bold", fontSize: "1.35rem" }}>
              {currencyAbbr}
            </Text>
          </View>
          <View style={styles.wave}>
            <Text style={{ fontWeight: 500 }}>{currencyValue}</Text>
          </View>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.btnCoin}>
            <Text style={{ fontWeight: 500, color: "grey" }}>
              {currencyName}
            </Text>
          </View>
          <View style={styles.wave}>
            <Text style={{ fontWeight: 500, color: `${gainorlossColor}` }}>
              {gainorloss}%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerBox: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
  },
  innerBox: {
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#e8e8e8",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  mainBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnCoin: {
    marginRight: 10,
  },
  wave: {
    alignSelf: "center",
  },

  mainBox1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 5,
  },
});

export default Coins;
