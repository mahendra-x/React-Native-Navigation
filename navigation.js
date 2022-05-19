<Tabs.Navigator
initialRouteName="BuyBtc"
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
<Stack.Screen name="BuyBtc" component={BuyBtcStackScreen} />

<Tabs.Screen name="Order" component={OrderStackScreen} />
<Tabs.Screen name="Wallet" component={WalletStackScreen} />
<Tabs.Screen name="Profile" component={ProfileStackScreen} />
</Tabs.Navigator>