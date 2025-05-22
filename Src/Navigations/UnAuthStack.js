import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Auth/Loginpage';
import { colors } from '../Config/colors';
const Stack =createNativeStackNavigator();
const UnAuthStack = () => {
  return (
    <>
    <StatusBar backgroundColor={colors.white} barStyle='dark-content'/>
    <Stack.Navigator screenOptions={{ headerShown: false,backgroundColor:colors.white }}>
    <Stack.Screen options={{backgroundColor:colors.white}} name="Login" component={Login} />
  </Stack.Navigator></>
  )
}

export default UnAuthStack;