import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, ScrollView, SafeAreaView} from 'react-native';
import styles from "../Styles/Search.js";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FavoritesScreen extends Component {

	constructor() {
		super()
		this.state = {
			 searchCriteria: '\n ',
			 newCard: '\n '
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
				<Text>Favorites!</Text>
			</View>
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