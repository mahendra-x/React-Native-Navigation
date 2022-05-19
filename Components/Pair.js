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

const Pair = ({ currency1, lastPrice, lastPriceColor, percentageChange }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <View>
        <Text style={styles.currency1}>
          {currency1}
          <Text style={styles.currency2}>/BTC</Text>
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: 500,
            fontSize: "0.99rem",
            color: `${lastPriceColor}`,
          }}
        >
          {lastPrice}
        </Text>
      </View>
      <View style={{ backgroundColor: "green", padding: 5, borderRadius: 2 }}>
        <Text
          style={{ color: "#fff", fontWeight: "bold", fontSize: "0.89rem" }}
        >
          {percentageChange}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currency1: {
    fontWeight: 500,
    fontSize: "0.99rem",
  },
  currency2: {
    color: "#e8e8e8",
  },
});

export default Pair;
