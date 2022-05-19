import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Order from "./Components/Order";
import Wallet from "./Components/Wallet";
import BuyBtc from "./Components/BuyBtc";
import BuyBtcChechout from "./Components/BuyBtcCheckout";
import BuyCoins from "./Components/BuyCoins";
import Otpscreen from "./Components/OtpScreen";
import Loginscreen from "./Components/Login";
import SignUpscreen from "./Components/SignUp";
import { Image, Text, TouchableHighlight, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "native-base";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const OrderStack = createStackNavigator();
const WalletStack = createStackNavigator();
const BuyBtcStack = createStackNavigator();
const BuyCoinsStack = createStackNavigator();
const BuyBtcCheckoutStack = createStackNavigator();
const OtpStack = createStackNavigator();
const LoginStack = createStackNavigator();
const SignUpStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const OrderStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="order" component={Order} />
  </ProfileStack.Navigator>
);

const WalletStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="wallet" component={Wallet} />
  </ProfileStack.Navigator>
);

const BuyBtcStackScreen = () => (
  <BuyBtcStack.Navigator>
    <BuyBtcStack.Screen
      name="BuyBtc"
      component={BuyBtc}
      options={{ headerShown: false }}
    />
  </BuyBtcStack.Navigator>
);

const BuyCoinsStackScreen = () => (
  <BuyCoinsStack.Navigator>
    <BuyCoinsStack.Screen
      name="Buycoin"
      component={BuyCoins}
      options={{ headerShown: false }}
    />
  </BuyCoinsStack.Navigator>
);

const BuyBtcCheckoutStackScreen = () => (
  <BuyBtcStack.Navigator>
    <BuyBtcStack.Screen
      name="BuyBtcChechout"
      component={BuyBtcChechout}
      options={{ headerShown: false }}
    />
  </BuyBtcStack.Navigator>
);

const OtpStackScreen = () => (
  <BuyBtcStack.Navigator>
    <BuyBtcStack.Screen
      name="otp"
      component={Otpscreen}
      options={{ headerShown: false }}
    />
  </BuyBtcStack.Navigator>
);

const loginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="login"
      component={Loginscreen}
      options={{ headerShown: false }}
    />
  </LoginStack.Navigator>
);

const sighUpStackScreen = () => (
  <SignUpStack.Navigator>
    <SignUpStack.Screen
      name="sighup"
      component={SignUpscreen}
      options={{ headerShown: false }}
    />
  </SignUpStack.Navigator>
);

function HomeTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: "black",
        showLabel: true,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "#5e41f6" : "#737277",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{ width: 22, height: 22 }}
              source={require(focused
                ? "./assets/TabIcon/home_active.png"
                : "./assets/TabIcon/home_inactive.png")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="login"
        component={loginStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "#5e41f6" : "#737277",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              Login
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{ width: 22, height: 22 }}
              source={require(focused
                ? "./assets/TabIcon/profile_active.png"
                : "./assets/TabIcon/profile_inactive.png")}
            />
          ),
        }}
      />

      <Tabs.Screen name="Order" component={OrderStackScreen} />
      {/* <Tabs.Screen name="Wallet" component={WalletStackScreen} /> */}

      <Tabs.Screen name="Profile" component={ProfileStackScreen} />
    </Tabs.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTab"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          component={OtpStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={sighUpStackScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="login"
          component={loginStackScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BuyBtcCheckout"
          component={BuyBtcCheckoutStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Buycoin"
          component={BuyCoinsStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BuyBtc"
          component={BuyBtcStackScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
