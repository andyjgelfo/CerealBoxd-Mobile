import React, {Component, useEffect, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, ScrollView, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import styles from "../Styles/Search.js";

let search = '';
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

let items = Array.apply(null, Array(global.jsonSearch.results.length)).map((v, i) => {
  return {
	id: i,
	src: global.jsonSearch.results[i]? global.jsonSearch.results[i].image: 'l',
	cereal: global.jsonSearch.results[i]
  };
});

export default class SearchScreen extends Component {

	render() {

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
				<FlatList
				  data={items}
				  renderItem={({item}) => (
					<TouchableOpacity
					  onPress={() => this.handleClick(item.cereal)}
					  style={{
						flexDirection: 'column',
						margin: 12,
						shadowOpacity: 0.5,
						shadowOffset: {
							width: 0,
							height: 3
						}
					  }}>
					  <Image
						resizeMode='stretch'
						style={styles.cerealImage}
						source={{uri: item.src}}
					  />
					</TouchableOpacity>
				  )}
				  //Setting the number of column
				  numColumns={3}
				  keyExtractor={(item, index) => index}
				/>
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
			target: search
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
		}
	}

	changeSearchHandler = async (val) => {
		search = val;
		await this.handleSearch();
	}
}