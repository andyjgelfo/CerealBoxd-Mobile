import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, ScrollView, SafeAreaView, Pressable, Icon} from 'react-native';
import {createStackNavigator, createAppContainer, } from 'react-navigation';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "../Styles/Home.js";

import * as Font from 'expo-font';
import Constants from 'expo-constants';

let customFonts = 
{
	'SemiBold15': require('../assets/Fonts/SharpGroteskSemiBold15.otf'),
	'Book20' : require('../assets/Fonts/SharpGroteskBook20.otf'),
	'SemiBold20' : require('../assets/Fonts/SharpGroteskSemiBold20.otf'),
}

let topCereals = "";

export default class HomeScreen extends Component {

	constructor() {
		super()
		this.state = {
			 searchCriteria: '\n ',
			 topCerealCriteria: '\n',
			 newCard: '\n ',
			 fontsLoaded: false
		}
	}

	//Load in custom fonts
	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		this.setState({fontsLoaded: true});
	}
	
	componentDidMount()
	{
		this._loadFontsAsync();
	}

	render() {

		//this.handleTopCereals();

		//If the fonts didn't load, ret null
		if(!this.state.fontsLoaded) {
			return null;
		}

		return (
		<View style={styles.container}>
			
			<View style={styles.container}>
				<Image style={styles.background} source={require("../assets/background.png")} />

				{/*Witty cereal pun*/ }
				<Text style={{fontSize:30, color:'white', fontFamily: 'SemiBold20', textAlign: 'center'}}>The Only (Raisin) Brand You Can Trust</Text>

				<Text> &nbsp; </Text>
				<Text> &nbsp; </Text>

				{/*First Box - Cereal of the Day*/}
				<View style={styles.cerealDayBox} {...{justifyContent: 'center', width: 200, height: 150}} >

					{/*Cereal of the Day*/}
					<View style={{flexDirection:'row'}}>
						<Text style={{fontSize:25, textAlign: 'center', fontFamily: 'SemiBold20'}}>Cereal of the Day!</Text>			
					</View>

					{/*Spacing*/}
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>

					{/*Cereal Title*/}
					<View style={{flexDirection:'row'}}>
						<Text style={{fontSize: 19, textAlign: 'center', fontFamily: 'SemiBold20'}}>Raisin Bran</Text>
					</View>

				</View>

				<Text>&nbsp;</Text>

				<View style={styles.topCerealsBox} {...{justifyContent: 'center', alignItems: 'center', width: 300, height: 300}}>

				<Text>&nbsp;</Text>
				<Text>&nbsp;</Text>
				<Text>&nbsp;</Text>
				<Text>&nbsp;</Text>
				<Text>&nbsp;</Text>
				<Text>&nbsp;</Text>


					<View style={{flexDirection:'row'}} >
						<Text style={{fontSize:25, textAlign: 'center', fontFamily: 'SemiBold20'}} >Current Top 5 Rated Cereals</Text>
					</View>

					<View style={{flexDirection:'row'}}>

						<Text style={{fontSize:20, textAlign: 'center', fontFamily:'SemiBold15'}}>
				
								{topCereals}
						</Text>
						

						<Text style={{fontSize:20, textAlign: 'center', fontFamily:''}}

							

							
						/>	
					</View>
					<Text style={{fontSize:20}}>{this.state.newCard}</Text>
				</View>
				<View style={styles.profileBar}>
					<Image style={styles.logo} source={require("../assets/trimlogo.png")} onLoad={() => {this.handleTopCereals()}} />
					<Text style={{fontSize:100}}> </Text>
					<View style={styles.profileLogo} />
				</View>
			</View>

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

	handleTopCereals = async () => {

		//alert("gamer");
		
		var obj = {
			"collection": "box",
			"column": "name",
			"order": "-1"
		}

		var js = JSON.stringify(obj);

		try {
			const response = await fetch('https://cerealboxd.herokuapp.com/api/sort', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			var res = JSON.parse(await response.text());

			var results = res.results;

			//results = JSON.stringify(results);

			//alert(results);

			var resultText = '\n';
			for (var i=0; i < 5; i++) 
			{
				let nameToAdd = results[i].name;
				nameToAdd = nameToAdd.toUpperCase();
				//alert(nameToAdd);

				//alert(results[i]);
				resultText += (i + 1) + ". " + nameToAdd + "\n\n";
				
			
			}
			resultText += '\n';

			//console.log(resultText);

			//alert("");

			topCereals = resultText;

			this.setState({topCerealCriteria: ''});
		}
		catch(e) {
			this.setState({topCerealCriteria: e.message});
		}

		/*var obj = {
			collection:"",
			column:"",
			order:""
		}

		** collection refers to the database collection you want, like user, box, or reviews

		** column refers to the field: like in user, it would be something like fName or lName.

		** order refers to ascending or descending. 1 is ascending, -1 is descending.

		** returns a json object with a variable inside called results... which is an array. */
	}

	changeSearchHandler = async (val) => {
		global.search = val;
	}

	changeCardHandler = async (val) => {
		global.card = val;
	}

	goToHome = async() => {
		this.props.navigation.navigate('Home');
	}

	goToSearch = async() => {
		this.props.navigation.navigate('Search');
	}

	goToCereal = async() => {
		this.props.navigation.navigate('Evan');
	}

	goToFavorites = async() => {
		this.props.navigation.navigate('Cereal');
	}
}