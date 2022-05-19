import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

export default function Order({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <TouchableHighlight onPress={() =>
        navigation.navigate('HomeScreen')}>
      <Text style={{fontSize: 50}}>Order</Text>
      </TouchableHighlight>
    </View>
  );
}