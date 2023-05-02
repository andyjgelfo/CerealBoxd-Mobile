import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginScreen from './screens/LoginScreen';
import Tabs from './screens/Tabs';
import RegisterScreen from './screens/RegisterScreen';
import Verification from './screens/Verification';
import ForgotScreen from './screens/ForgotScreen';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

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
	Verify: {
		screen: Verification,
		navigationOptions: {
			headerShown: false
		}
	},
	Forgot: {
		screen: ForgotScreen,
		navigationOptions: {
			headerShown: false
		}
	}
}, {
	initialRouteName: "Login"
});

const AppContainer = createAppContainer(AppNavigator);