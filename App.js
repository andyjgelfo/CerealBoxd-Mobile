import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginScreen from './screens/LoginScreen';
import Tabs from './screens/Tabs';
import RegisterScreen from './screens/RegisterScreen';
import CerealScreen from './screens/CerealScreen';

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
	Tabs: {
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
	Cereal: {
		screen: CerealScreen,
		navigationOptions: {
			headerShown: false
		}
	}
}, {
	initialRouteName: "Login"
});

const AppContainer = createAppContainer(AppNavigator);