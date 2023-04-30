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

global.reviews = {
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
		this.handleReviews();
		this.handleFavs();
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

				<View style={styles.favBar}{...{marginLeft: 50}}>
						<Text style={styles.barText}>Your Favorite Cereals</Text>
				</View>
				<ScrollView style={{flexDirection: 'column', height:'10%'}}>
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

				<View style={styles.favBar}>
						<Text style={styles.barText}>Your Reviews</Text>
				</View>	
				<Text>&nbsp;</Text>

				<ScrollView style={{flexDirection: 'column', height:'auto', width: 'auto', backgroundColor:'#1C2143', borderColor:'#F2EAC1', borderWidth: 3, borderRadius: 10}}>
							{/*Box for Reviews*/}
							<View style={styles.cerealDayBox} {...{justifyContent: 'center', width: 300, height: 150}} >
								{/*Reviews*/}
								{global.reviews.results.map((review) => {
									return (
										<View>
											<Text style={{fontSize:25, textAlign: 'left', fontFamily: 'SemiBold15', width: 300, color:'white', marginLeft: 10}}>{review.cerealName} - {review.rating}/5</Text>
											<Text style={{fontSize:20, textAlign: 'left', fontFamily: 'SemiBold15', width: 300 ,color:'white', marginLeft: 10}}>{review.body}</Text>
											<Text>&nbsp;</Text>
										</View>
									);
								})}
							</View>
				</ScrollView>

			</View>
		)
	}

	handleClick = async (val) => {
		global.cereal = val;
		this.props.navigation.navigate('Cereal');
	}

	handleFavs = async () => {
		var obj = {
			target: global.userId
		};
		var js = JSON.stringify(obj);

		try {
			const response = await fetch('https://cerealboxd.herokuapp.com/api/getFav', {
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

	handleReviews = async () => {
		
		//Object var
		var obj = {
			collection: "reviews",
			column: "reviewerID",
			target: global.userId //ID - change this for every cereal
		}

		var js = JSON.stringify(obj);

		//Connect to the API
		try {
			const response = await fetch('https://cerealboxd.herokuapp.com/api/searchByIDmulti', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			//Get results
			global.reviews = JSON.parse(await response.text());

			//Set state
			this.setState({getReviewCriteria: ''});

		}
		catch(e) {
			this.setState({getReviewCriteria: e.message});
		}
	}
}