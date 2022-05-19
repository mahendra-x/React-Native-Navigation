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
// import {FlatListSlider} from "react-native-flatlist-slider";
// import { SliderBox } from "react-native-image-slider-box";

import BellICon from "react-native-vector-icons/MaterialCommunityIcons";
import QrScanIcon from "react-native-vector-icons/MaterialIcons";
import Threedot from "react-native-vector-icons/Entypo";
import Icons from "../Components/Icons";
import Coins from "../Components/Coins";
import Pair from "./Pair";
import { TouchableOpacity } from "react-native-gesture-handler";

const FoodData = [
  {
    img: "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769__480.jpg",
    name: "Deals Zone",
    time: "45 min",
    imgName: 'BTC.png',
    currAbbr:'ETH',
    currValue: '30052.05',
    currName:'Etherum',
    gainorloss:"-3.54",
    color:'red'
  },
  {
    img: "https://cdn.pixabay.com/photo/2021/05/29/15/55/ethereum-6293700__340.jpg",
    name: "Industrial",
    time: "30 min",
    imgName: 'DOGE.png',
    currAbbr:'DOGE',
    currValue: '70052.05',
    currName:'DOGE',
    gainorloss:"+9.54",
    color:'green'
  },
  {
    img: "https://images.livemint.com/img/2021/10/13/1600x900/CRYPTO-CURRENCIES-0_1634088316233_1634111148233.JPG",
    name: "Electricals ",
    time: "60 min",
    imgName: 'ADA.png',
    currAbbr:'ADA',
    currValue: '30052.05',
    currName:'ADA',
    gainorloss:"-3.54",
    color:'red'
  },
  {
    img: "https://www.thehindubusinessline.com/money-and-banking/ny36ja/article35803995.ece/alternates/FREE_385/bl-teth",
    name: "Office",
    time: "45 min",
    imgName: 'BTT.png',
    currAbbr:'BTT',
    currValue: '30052.05',
    currName:'BTRTTBBB',
    gainorloss:"-3.54",
    color:'red'
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/2/19667922/e345f08eecf07656e9e9121e2fa976b6_o2_featured_v2.jpg",
    name: "Covid Essential",
    time: "45 min",
    imgName: 'FLT.png',
    currAbbr:'FLT',
    currValue: '30052.05',
    currName:'Flits',
    gainorloss:"+8.54",
    color:'green'
  },
];

export default function HomeStackScreen({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={{ backgroundColor: "#5f40f6" }}>
            <View style={styles.nav}>
              <View style={styles.logo}>
                <View style={styles.leftIcon}>
                  <View style={styles.img}>
                    <Image
                      style={{ width: 45, height: 45 }}
                      source={require("../assets/others/boy.png")}
                    />
                  </View>
                  <View style={styles.imageTitle}>
                    <View>
                      <Text style={styles.greetings}>Hello</Text>
                    </View>
                    <View>
                      <Text style={styles.name}>John Doe</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.rightIcon}>
                <View style={styles.qrscan}>
                  <QrScanIcon name="qr-code-scanner" size={25} color="white" />
                </View>
                <View>
                  <BellICon name="bell-ring-outline" size={25} color="white" />
                </View>
              </View>
            </View>
            <View
            
            >
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={FoodData}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                  paddingTop: 15,
                  backgroundColor: "#5f40f6",
                  paddingBottom: 15,
                }}
                renderItem={({ item }) => (
                  <View style={{ marginLeft: 0, backgroundColor: "#5f40f6" }}>
                    <Image
                      style={{
                        width: 330,
                        height: 150,
                        marginLeft: 15,
                        borderRadius: 15,
                      }}
                      source={{
                        uri: item.img,
                      }}

                      // source={require("../assets/others/boy.png")}
                    ></Image>
                    {/* <View>
                <Text style={{ margin: 15, fontSize: 12, textAlign: "center" }}>
                  {item.name}
                </Text>
              </View> */}
                  </View>
                )}
              />
            </View>
            <View style={styles.iconsBox}>
              <Icons imageName="deposit_icon" imageTitle="Deposite" />
              <Icons imageName="referral_icon" imageTitle="Referral" />
              <Icons imageName="quick_icon" imageTitle="Quick Buy Sell" />
              <Icons imageName="sip_icon" imageTitle="SIP" />
              {/* second row  */}
              <Icons imageName="exclusive_icon" imageTitle="Exclusives" />
              <Icons imageName="battle_icon" imageTitle="BattleZone" />
              <Icons imageName="margin_icon" imageTitle="Margin" />
              <Icons imageName="more_icon" imageTitle="More" />
            </View>
          </View>
          <View style={{ padding: 10, backgroundColor: "#fff" }}>
            <View style={styles.alertContainer}>
              <View>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../assets/others/megaphone_1.png")}
                />
              </View>
              <View style={{ flexWrap: "wrap" }}>
                <Text style={{ color: "white" }}>
                  An email has been sent to abc@xyz.com{"\n"}don`t see it! check
                  SPAM Folders
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: 2,
                }}
              >
                <Threedot
                  name="dots-three-horizontal"
                  size={20}
                  color="black"
                />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
          <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={FoodData}
                keyExtractor={(item, index) => index.toString()}
                scrollEventThrottle={200}
                pagingEnabled
                decelerationRate="fast"
                contentContainerStyle={{
                  paddingTop: 15,
                  backgroundColor: "#fff",
                  paddingBottom: 15,
                }}
                renderItem={({ item,index, separators }) => (
                  <Coins
                  currencyImg={item.imgName}
                  currencyAbbr={item.currAbbr}
                  currencyValue={item.currValue}
                  currencyName={item.currName}
                  gainorloss={item.gainorloss}
                  gainorlossColor={item.color}
                />
               
                    
             
                  
                )}
              />
          </View>

          <View style={{ backgroundColor: "#fff" }}>
            <View style={styles.rankView}>
              <Text style={styles.rank}>Ranking List</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                borderBottomWidth: 1,
                borderBottomColor: "#e8e8e8",
              }}
            >
              <View style={styles.gainView}>
                <Text style={styles.gain}>Gainers</Text>
              </View>
              <View style={styles.lossView}>
                <Text style={styles.loss}>Losers</Text>
              </View>
            </View>

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
                <Text style={{ color: "#e8e8e8", fontWeight: "bold" }}>
                  Pair
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    marginLeft: 25,
                    color: "#e8e8e8",
                    fontWeight: "bold",
                  }}
                >
                  Last Price
                </Text>
              </View>
              <View>
                <Text style={{ color: "#e8e8e8", fontWeight: "bold" }}>
                  24h chg%
                </Text>
              </View>
            </View>
            <Pair
              currency1="TCB"
              lastPrice="0.0000000009"
              lastPriceColor="red"
              percentageChange="+50.00"
            />
            <Pair
              currency1="LOM"
              lastPrice="0.0000000009"
              lastPriceColor="red"
              percentageChange="+25.00"
            />
            <Pair
              currency1="TCB"
              lastPrice="0.0000000009"
              lastPriceColor="black"
              percentageChange="+35.00"
            />

            <Pair
              currency1="COS"
              lastPrice="0.0000000009"
              lastPriceColor="red"
              percentageChange="+50.00"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Buycoin")}
            >
              <Pair
                currency1="TCB"
                lastPrice="0.0000000009"
                lastPriceColor="black"
                percentageChange="+50.00"
              />
            </TouchableOpacity>


          





          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "4%",
    backgroundColor: "#5f40f6",
    borderBottomWidth: 0.1,
    borderBottomColor: "#7b63ff",
  },
  logo: {
    color: "#fff",
  },
  mongo: {
    color: "#900",
    fontWeight: "bold",
  },
  leftIcon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  img: {
    paddingRight: 10,
  },
  imageTitle: {
    flexDirection: "column",
    color: "#fff",
  },

  greetings: {
    fontSize: 14,
    fontWeight: 400,
    color: "#fff",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  rightIcon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  qrscan: {
    marginRight: 15,
  },
  iconsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // padding: 10,
    // gap: 5,
  },
  iconsBox: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
    flexWrap: "wrap",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 15,
    marginTop: 20,
  },
  alertContainer: {
    flexDirection: "row",
    backgroundColor: "#5f40f6",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
  },
  rankView: {
    padding: 10,
  },
  rank: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  gain: {
    fontWeight: "bold",
    fontSize: "1rem",
    marginRight: 20,
    color: "#5f40f6",
    paddingBottom: 8,
    borderBottomWidth: 4,
    borderBottomColor: "#5f40f6",
  },
  loss: {
    fontWeight: "bold",
    fontSize: "1rem",
    textAlign: "right",
  },
  gainView: {
    padding: 10,
    paddingBottom: 0,
  },
  lossView: {
    padding: 10,
    alignSelf: "flex-end",
    paddingLeft: 20,
  },
  button: {
    // alignItems: "center",
    backgroundColor: "#DDDDDD",
    // padding: 10,
  },
});
