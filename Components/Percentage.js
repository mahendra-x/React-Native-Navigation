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

const Percentage = ({ percentagevalue }) => {
  return (
    <>
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
            padding: 9,
            
          }}
        >
          {percentagevalue}%
        </Text>
      </View>
    </>
  );
};

export default Percentage;
