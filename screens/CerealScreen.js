import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, ScrollView, SafeAreaView} from 'react-native';
import styles from "../Styles/Search.js";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class CerealScreen extends Component {

	constructor() {
		super()
		this.state = {
			message: global.cereal._id + '\n' + 
			global.cereal.name + '\n' + 
			global.cereal.description + '\n' + 
			global.cereal.releaseDate + '\n' + 
			global.cereal.willItKillYou + '\n' + 
			global.cereal.manufacturer + '\n' + 
			global.cereal.rating + '\n' + 
			global.cereal.image + '\n' + 
			global.cereal.ingredients
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.background} source={require("../assets/background.png")} />
				<View style={styles.profileBar}>
					<Image style={styles.logo} source={require("../assets/trimlogo.png")} />
					<Text style={{fontSize:100}}> </Text>
					<View style={styles.profileLogo} />
				</View>
				<Text>{this.state.message}</Text>
			</View>
		)
	}
}