import React from 'react'
import Home from './src/screens/home/Home';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { StatusBar } from "react-native";
import { COLORS } from "./src/consts/colors";
import { NavigationContainer } from '@react-navigation/native';
import Details from './src/screens/details/Details';
export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
        <Stack.Navigator screenOptions={{header : () => null}}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
