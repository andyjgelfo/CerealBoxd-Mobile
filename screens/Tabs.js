import React, {Component, useState} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./HomeScreen.js";
import SearchScreen from "./SearchScreen"
import styles from "../Styles/Home.js";

const Tab = createBottomTabNavigator();

export default function Tabs() {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName={'Home'} screenOptions={({route}) => ({
				tabBarIcon: ({focused, color, size}) => {
					let iconName;
					let rn = route.name;
					alert(rn);

					if (rn === 'Home') {
						iconName = focused? 'home': 'home-outline';
					}
					else if (rn === 'Search') {
						iconName = focused? 'list': 'list-outline';
					}
					return <Ionicons name={iconName} size={size} color={color}/>;
				}
			})}>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Search" component={SearchScreen} />
				<Tab.Screen name="Verification" component={VerificationScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}