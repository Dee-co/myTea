import React, { useEffect, useState } from 'react';
import { View, Text,Button } from 'react-native';

const Home = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>

      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Button title='Move to Login' color={'red'} onPress={ ()=>props.navigation.navigate('Login')}></Button>
    </View>
  )
}
export default Home;