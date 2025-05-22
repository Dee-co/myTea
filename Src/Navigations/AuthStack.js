import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import ProfileScreen from '../../Screens/ProfileScreen';
import CartScreen from '../../Screens/CartScreen';
import FavoriteScreen from '../../Screens/FavoriteScreen';
import {Dimensions, StatusBar, View} from 'react-native';
import {colors} from '../Config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductDetails from '../../Screens/ProductDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const {width, height} = Dimensions.get('window');
const tabScreens = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'home',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    icon: 'person',
  },
  {
    name: 'Cart',
    component: CartScreen,
    icon: 'cart',
  },
  {
    name: 'Favorite',
    component: FavoriteScreen,
    icon: 'heart',
  },
];
const TabNavigator= () => {
  return (
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.success,
          tabBarInactiveTintColor: '#999',
          animationEnabled: false,
          tabBarStyle: {
            backgroundColor: '#ffff',
            paddingTop: 10,
            paddingBottom: 10,
            height: height * 0.07,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            overflow: 'hidden',
            shadowOpacity: .9,
            shadowRadius: 0,
            elevation: 10,
          },
          tabBarHideOnKeyboard: true,
        }}>
        {tabScreens.map(({name, component, icon}) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              animationEnabled: false,
              tabBarIcon: ({color}) => (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name={icon} color={color} size={30} />
                </View>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
  );
}
const AuthStack = () => {
  return (
    <>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"></StatusBar>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
