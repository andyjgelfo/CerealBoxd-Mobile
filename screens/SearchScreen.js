import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, ScrollView, SafeAreaView} from 'react-native';
import styles from "../Styles/Search.js";
import AOS from 'aos';
import Ionicons from 'react-native-vector-icons/Ionicons';

global.search = '';
global.jsonSearch;

export default class SearchScreen extends Component {

	constructor() {
		super()
		this.state = {
			 searchCriteria: '\n ',
			 newCard: '\n '
		}
	}

	

	render() {
		this.populateCereals();

		return (
			<View style={styles.container}>
				<Image style={styles.background} source={require("../assets/background.png")} />
				<View style={styles.profileBar}>
					<Image style={styles.logo} source={require("../assets/trimlogo.png")} />
					<Text style={{fontSize:100}}> </Text>
					<View style={styles.profileLogo}>
						{/* <Button title='' onPress={this.props.navigation.navigate('Login')} /> */}
					</View>
				</View>
				<TextInput
					style={styles.searchBar}
					placeholder="SEARCH"
					onChangeText={(val) => {this.changeSearchHandler(val)}}
				/>
				<ScrollView style={{flexDirection: 'column', alignSelf: 'center'}}>
					<Text>{this.state.searchCriteria}</Text>
					{global.jsonSearch.results.map(image => {
						return <Image style={{justifyContent: 'flex-start'}} source={{width: 100, height: 140, uri: image.image}} />
					})}
					<Text> </Text>
					<View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
						<Text>   </Text>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
						<Text>   </Text>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
					</View>
					<Text> </Text>
					<View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
						<Text>   </Text>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
						<Text>   </Text>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
					</View>
					<Text> </Text>
					<View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
						<Text>   </Text>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
						<Text>   </Text>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
					</View>
					<Text> </Text>
					<View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
						<Text>   </Text>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
						<Text>   </Text>
						<Image
							style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}} 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
					</View>
					<Text> </Text>
					<View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
						<Image 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
						<Text>   </Text>
						<Image 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
						<Text>   </Text>
						<Image 
							source={{
								width: 100,
								height: 140,
								uri: "https://picsum.photos/100/140",
							}}
						/>
					</View>
				</ScrollView>
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

	handleSearch = async () => {
		var obj = {
			collection: "box",
			column: "name",
			target: global.search
		};
		var js = JSON.stringify(obj);

		try {
			const response = await fetch('https://cerealboxd.herokuapp.com/api/search', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			var res = JSON.parse(await response.text());

			var cerealData = res.results;

			var resultText = '';
			for (var i = 0; i < cerealData.length; i++) {
				resultText += cerealData[i].image + i;
				if (i < cerealData.length - 1) {
					resultText += '\n';
				}
			}
			resultText += '\n';
			global.jsonSearch = res;

			this.setState({searchCriteria: resultText});
		}
		catch(e) {
			this.setState({searchCriteria: e.message});
		}
	}

	changeSearchHandler = async (val) => {
		global.search = val;
		this.handleSearch();
	}

	populateCereals  = async () => {
		var obj = {
			collection: "box",
			column: "name",
			target: ''
		};
		var js = JSON.stringify(obj);

		try {
			const response = await fetch('https://cerealboxd.herokuapp.com/api/search', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			global.jsonSearch = JSON.parse(await response.text());
		}
		catch(e) {
			this.setState({searchCriteria: e.message});
		}
	}
}