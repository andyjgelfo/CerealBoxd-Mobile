import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, ScrollView, SafeAreaView} from 'react-native';
import {createStackNavigator, createAppContainer, } from 'react-navigation';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "../Styles/Home.js";

export default class CerealsScreen extends Component {

	constructor() {
		super()
		this.state = {
			 searchCriteria: '\n ',
			 newCard: '\n '
		}
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Image style={styles.background} source={require("../assets/background.png")} />
				<Text>Cereals!</Text>
			</SafeAreaView>
		)
	}
}