import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from "../Styles/Search.js";
import AOS from 'aos';
import Ionicons from 'react-native-vector-icons/Ionicons';

global.search = '';
global.cereal = {
	_id: "",
	name: "",
	description: "",
	releaseDate: -1,
	willItKillYou: -1,
	manufacturer: "",
	rating: -1,
	image: "",
	ingredients: ""
}

global.jsonSearch = {
	results: []
};

export default class SearchScreen extends Component {

	constructor() {
		super()
		this.state = {
			 searchCriteria: '\n ',
			 newCard: '\n '
		}
	}

	render() {
		this.handleSearch();
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
				<ScrollView style={{flexDirection: 'column'}}>
					<Text> </Text>
					<View style={{flexDirection: 'row', justifyContent: 'center'}}>
						<View>
							{global.jsonSearch.results.map(cereal => {
								if (global.jsonSearch.results.indexOf(cereal) % 3 == 0)
									return (
									<View key={global.jsonSearch.results.indexOf(cereal)} style={styles.cerealColumn}>
										<TouchableOpacity onPress={() => {this.handleClick(cereal)}}>
											<Image
												resizeMode='stretch'
												style={styles.cerealImage}
												source={{width: 100, height: 140, uri: cereal.image}}
											/>
										</TouchableOpacity>
										<Text> </Text>
									</View>
									)
							})}
						</View>
						<Text>      </Text>
						<View>
							{global.jsonSearch.results.map(cereal => {
								if (global.jsonSearch.results.indexOf(cereal) % 3 == 1)
									return (
									<View key={global.jsonSearch.results.indexOf(cereal)} style={styles.cerealColumn}>
										<TouchableOpacity onPress={() => {this.handleClick(cereal)}}>
											<Image
												resizeMode='stretch'
												style={styles.cerealImage}
												source={{width: 100, height: 140, uri: cereal.image}}
											/>
										</TouchableOpacity>
										<Text> </Text>
									</View>
									)
							})}
						</View>
						<Text>      </Text>
						<View>
							{global.jsonSearch.results.map(cereal => {
								if (global.jsonSearch.results.indexOf(cereal) % 3 == 2)
									return (
									<View key={global.jsonSearch.results.indexOf(cereal)} style={styles.cerealColumn}>
										<TouchableOpacity onPress={() => {this.handleClick(cereal)}}>
											<Image
												resizeMode='stretch'
												style={styles.cerealImage}
												source={{width: 100, height: 140, uri: cereal.image}}
											/>
										</TouchableOpacity>
										<Text> </Text>
									</View>
									)
							})}
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}

	handleClick = async (val) => {
		global.cereal = val;
		this.props.navigation.navigate('Cereal');
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

			global.jsonSearch = JSON.parse(await response.text());

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
}