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

const Icons = (props) => {
  const {imageName,imageTitle} = props;
  return (
    <View style={styles.iconsContainer}>
      <View>
        <Image
          style={styles.img}
          source={require(`../assets/MenuAsset/${imageName}.png`)}
        />
      </View>
      <View>
        <Text style={styles.imageTitileSize}>{imageTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // padding: 10,
  },
  img:{
      width: 80,
      height: 80,
  },
  imageTitileSize:{
      fontWeight: 500,
      fontStyle: "bold"
  }
});

export default Icons;
