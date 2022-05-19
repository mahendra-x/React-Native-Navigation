import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <View style={styles.img}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 25,
                  borderWidth: 1,
                  resizeMode: "cover",
                  backgroundColor: "white",
                  borderColor: "gray",
                  padding: 10,
                }}
                source={{ uri: "https://picsum.photos/200/300" }}
              />
            </View>
            <View style={{ padding: 20, marginTop: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Jonathon</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Deaz</Text>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                Lawyer
              </Text>
            </View>
            <View style={{ marginTop: 32 }}>
              <Feather name="edit" size={24} color="rgb(37, 150, 190)" />
            </View>
          </View>
          <View style={styles.info}>
            <Feather
              name="map-pin"
              size={24}
              color="gray"
              style={{ paddingRight: 10 }}
            />
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              Mumbai,Maharashtra
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="gray"
              style={{ paddingRight: 10, marginLeft: -7 }}
            />
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              Jonathon@mail.com
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              padding: 10,
              marginBottom: 20,
            }}
          >
            <MaterialCommunityIcons
              name="phone-in-talk-outline"
              size={24}
              color="gray"
              style={{ paddingRight: 10, marginLeft: -37 }}
            />
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              +91-9876543210
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    // backgroundColor: "",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  card: {
    // shadowColor: "#000000",
    // shadowOffsetWidth: 1,
    // shadowOffsetHeight: 8,
    // shadowOpacity: 0.32,
    // shadowRadius: 10.46,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    elevation: 15,
    backgroundColor: "#fff",
  },
  img: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 10,
    borderColor: "rgb(37, 150, 190)",
    borderWidth: 3,
    marginTop: 20,
  },
  info: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    marginTop: 20,
  },
});
