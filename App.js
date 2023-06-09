import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './src/screens/Login.js';
import Signup from './src/screens/Signup.js';
import Home from "./src/screens/Home.js";
import TabNav from './src/screens/TabNav.js';
import DrawNav from "./src/screens/DrawNav.js";
import Appointment from "./src/screens/Appointment.js";
import Reset_Password from "./src/screens/Reset_Password.js";
import Success from "./src/screens/Success.js";
import Settings from "./src/screens/Settings.js";
import Profile from "./src/screens/Profile.js";
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { light } from "./src/assets/colors/light.js";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "./src/assets/colors/colors.js";
import Animated, { FadeIn, FadeOut, FadeOutDown } from "react-native-reanimated";
import { connectToDevTools } from "react-devtools-core";

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

const App = () => {

  const [splash, setSplash] = useState(true);

  const Splashscreen = () => {
    return (
      <Animated.View entering={FadeIn} exiting={FadeOutDown} style={Styles.container}>
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Image source={require('./src/images/front1.png')} style={Styles.image_top} />
          <Image style={Styles.image_bg_top} source={require('./src/images/back1.png')} />
        </View>
        <View style={Styles.logo_view}>
          <Image style={Styles.logo} source={require('./src/images/logo.png')} />
        </View>
        <View style={{ flex: 1, marginLeft: wp("12%"), marginTop: hp("35%") }}>
          <Image source={require('./src/images/front1.png')} style={Styles.image_bottom} />
          <Image style={Styles.image_bg_bottom} source={require('./src/images/back1.png')} />
        </View>
      </Animated.View>
    )
  }


  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    splash == true ? <Splashscreen /> : <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DrawNav" component={DrawNav} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Reset" component={Reset_Password} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Settings" component={Settings} />
        {/* <Stack.Screen name="Animation" component={Animation}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  image_top: {
    resizeMode: "contain",
    height: hp("19%"),
    width: wp("122%"),
    marginTop: hp("-7.5%"),
    transform: [{ rotate: "180deg" }],
    // marginLeft: wp("-3%")

  },
  image_bg_top: {
    height: hp("19%"),
    width: wp("122%"),
    resizeMode: "contain",
    position: "absolute",
    alignSelf: 'flex-start',
    transform: [{ rotate: "180deg" }],
    marginTop: hp("-6%"),
  },
  logo: {
    width: wp("70%"),
    // alignSelf: "center",
    resizeMode: "contain",
  },
  logo_view: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginTop: hp("20%")
  },
  image_bottom: {
    resizeMode: "contain",
    height: hp("24%"),
    width: wp("98%"),
    // transform: [{ rotate: "180deg" }],
    // marginLeft: wp("-3%")

  },
  image_bg_bottom: {
    height: hp("31%"),
    width: wp("97%"),
    resizeMode: "contain",
    position: "absolute",
    marginTop: hp("-4.5%"),
  }
})

export default App;