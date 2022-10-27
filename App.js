import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "./src/screens/HomeScreen";
import MovieScreen from "./src/screens/MovieScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator()

export default  () => {

  const [FontLoaded] = useFonts({
    Reguler: require("./assets/fonts/SourceSansPro-Regular.ttf"),
    Bold: require("./assets/fonts/SourceSansPro-Bold.ttf"),
    Black: require("./assets/fonts/SourceSansPro-Black.ttf"),
    SemiBold: require("./assets/fonts/SourceSansPro-SemiBold.ttf"),
    ExtraLight: require("./assets/fonts/SourceSansPro-ExtraLight.ttf"),
    Light: require("./assets/fonts/SourceSansPro-Light.ttf"),
  })

  return FontLoaded ? (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Movie"component={MovieScreen} options={{headerShown: false}} />
    </Stack.Navigator>
   </NavigationContainer>
  ) : (
    <AppLoading/>
  );
}