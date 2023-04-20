import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginScreen from './screens/LoginScreen';
import Tabs from './screens/Tabs';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  },
  Tab: {
    screen: Tabs,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  }
},{
  initialRouteName: "Login"
});

const AppContainer = createAppContainer(AppNavigator);