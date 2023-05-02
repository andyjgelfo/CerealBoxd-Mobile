import React, {Component, useState} from "react";
import {Image} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./HomeScreen.js";
import SearchScreen from "./SearchScreen";
import CerealScreen from "./CerealScreen.js";
import FavoritesScreen from "./FavoritesScreen";
import LoginScreen from "./LoginScreen.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SearchTab() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Search"
				component={SearchScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Cereal"
				component={CerealScreen}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
}

export default class Tabs extends Component {
	render() {
		return (
			<NavigationContainer>
				<Tab.Navigator initialRouteName={'HomeTab'} screenOptions={({route}) => ({
					tabBarIcon: ({focused}) => {
						if (route.name === 'HomeTab') {
							return iconName = focused?
							<Image style={{width: 45, height: 45, top: 2}} source={require('../assets/navBarIcons/home.png')} />:
							<Image style={{width: 45, height: 45, top: 2}} source={require('../assets/navBarIcons/home-inactive.png')} />;
						}
						else if (route.name === 'SearchTab') {
							return iconName = focused?
							<Image style={{width: 35, height: 35, top: 2}} source={require('../assets/navBarIcons/search.png')} />:
							<Image style={{width: 35, height: 35, top: 2}} source={require('../assets/navBarIcons/search-inactive.png')} />;
						}
						else if (route.name === 'FavoritesTab') {
							return iconName = focused?
							<Image style={{width: 40, height: 40, top: 2}} source={require('../assets/navBarIcons/cereal.png')} />:
							<Image style={{width: 40, height: 40, top: 2}} source={require('../assets/navBarIcons/cereal-inactive.png')} />;
						}
					},
					tabBarStyle: {
						backgroundColor: '#1C2143',
						tabBarActiveBackgroundColor: 'red',
						borderTopWidth: 0,
					},
					headerShown: false,
					tabBarShowLabel: false,
					tabBarActiveBackgroundColor: '#F2EAC1',
				})}>
					<Tab.Screen name="HomeTab" component={HomeScreen} />
					<Tab.Screen name="SearchTab" component={SearchTab} />
					<Tab.Screen name="FavoritesTab" component={FavoritesScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		)
	}
}