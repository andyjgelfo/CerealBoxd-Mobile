import React, {Component, useState} from "react";
import {Image} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./HomeScreen.js";
import SearchScreen from "./SearchScreen";
import FavoritesScreen from "./FavoritesScreen";

const Tab = createBottomTabNavigator();

export default class Tabs extends Component {
	render() {
		return (
			<NavigationContainer>
				<Tab.Navigator initialRouteName={'Search'} screenOptions={({route}) => ({
					tabBarIcon: ({focused}) => {
						if (route.name === 'Home') {
							return iconName = focused?
							<Image style={{width: 45, height: 45, top: 2}} source={require('../assets/navBarIcons/home.png')} />:
							<Image style={{width: 45, height: 45, top: 2}} source={require('../assets/navBarIcons/home-inactive.png')} />;
						}
						else if (route.name === 'Search') {
							return iconName = focused?
							<Image style={{width: 35, height: 35, top: 2}} source={require('../assets/navBarIcons/search.png')} />:
							<Image style={{width: 35, height: 35, top: 2}} source={require('../assets/navBarIcons/search-inactive.png')} />;
						}
						else if (route.name === 'Favorites') {
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
					tabBarActiveBackgroundColor: '#F2EAC1',
				})}>
					<Tab.Screen name="Home" component={HomeScreen} />
					<Tab.Screen name="Search" component={SearchScreen} />
					<Tab.Screen name="Favorites" component={FavoritesScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		)
	}
}