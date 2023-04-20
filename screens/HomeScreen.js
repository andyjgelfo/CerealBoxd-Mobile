import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, ScrollView, SafeAreaView} from 'react-native';
import {createStackNavigator, createAppContainer, } from 'react-navigation';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "../Styles/Home.js";

export default class HomeScreen extends Component {

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
				<View style={styles.inputBox}>
					<View style={{flexDirection:'row'}}>
						<Text style={{fontSize:20}}>Search Criteria: </Text>
						<TextInput
							style={styles.textInput}
							placeholder="Search"
							onChangeText={(val) => {this.changeSearchHandler(val)}}
						/>				
						<Button
							style={styles.button}
							title="Search"
							onPress={this.handleSearchClick}
						/>
					</View>
					<Text style={{fontSize:20}}>{this.state.searchCriteria} </Text>

					<View style={{flexDirection:'row'}}>
						<Text style={{fontSize:20}}>Card to Add: </Text>
						<TextInput
							style={styles.textInput}
							placeholder="Card"
							onChangeText={(val) => {this.changeCardHandler(val)}}
						/>
						<Button
							style={styles.button}
							title=" Add "
							onPress={this.handleCardClick}
						/>

					</View>
					<Text style={{fontSize:20}}>{this.state.newCard}</Text>
				</View>
				<View style={styles.profileBar}>
					<Image style={styles.logo} source={require("../assets/logo.png")} />
					<Text style={{fontSize:100}}> </Text>
					<View style={styles.profileLogo} />
				</View>
			</SafeAreaView>
		)
	}

	handleCardClick = async () => {
		var obj = {
			userId: global.userId,
			card: global.card
		};
		var js = JSON.stringify(obj);

		try {
			const response = await fetch('https://cop4331-10.herokuapp.com/api/addcard', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			var res = JSON.parse(await response.text());

			this.setState({newCard: "Your card has been added"});
		}
		catch(e) {
			this.setState({newCard: e.message});
		}
	}

	handleSearchClick = async () => {
		var obj = {
			userId: global.userId,
			search: global.search
		};
		var js = JSON.stringify(obj);

		try {
			const response = await fetch('https://cop4331-10.herokuapp.com/api/searchcards', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			var res = JSON.parse(await response.text());

			var _results = res.results;

			var resultText = '';
			for (var i=0; i<_results.length; i++) {
				resultText += _results[i];
				if (i < _results.length - 1) {
					resultText += '\n';
				}
			}
			resultText += '\n';

			this.setState({searchCriteria: resultText});
		}
		catch(e) {
			this.setState({searchCriteria: e.message});
		}
	}

	changeSearchHandler = async (val) => {
		global.search = val;
	}

	changeCardHandler = async (val) => {
		global.card = val;
	}
}