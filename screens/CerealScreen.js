import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, ScrollView, SafeAreaView, Pressable, Icon} from 'react-native';
import {createStackNavigator, createAppContainer, } from 'react-navigation';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "../Styles/Cereal.js";
import * as Font from 'expo-font';
import Constants from 'expo-constants';

//Fonts
let customFonts = 
{
	'SemiBold15': require('../assets/Fonts/SharpGroteskSemiBold15.otf'),
	'Book20' : require('../assets/Fonts/SharpGroteskBook20.otf'),
	'SemiBold20' : require('../assets/Fonts/SharpGroteskSemiBold20.otf'),
}

//Image URLS
let heartWhiteUrl = '../assets/Heart.png';
let heartPinkUrl = '../assets/Heart_Pink.png';
let curHeartUrl = '../assets/Heart.png';

//Vars for cereal info
let cerealName = "";
let cerealReleaseDate = "";
let cerealManufacturer = "";
let cerealKillNum = "";
let cerealDescription = "";
let cerealNutritionFacts = "";
let cerealImgSrc = "";

//Vars for review info
let reviewText = "";
let reviewerName = "";
let reviewRating = "";

//Begin the code
export default class CerealScreen extends Component {

	//States
	constructor() {
		super()
		this.state = {
			 searchCriteria: '\n ',
			 getCerealCriteria: '\n',
			 getReviewCriteria: '\n',
			 newCard: '\n ',
			 fontsLoaded: false,
			 heartTint: 'white'

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


	//Render
	render() {

		//Get the cereal!
		this.handleGetCereal();

		//Get the reviews!
		//this.handleGetReview();

		//If the fonts didn't load, ret null
		if(!this.state.fontsLoaded) {
			return null;
		}

		return (

			
		<View style={styles.container}>

			{/*Main container*/}
			<SafeAreaView style={styles.container}>

				{/*Background img */}
				<Image style={styles.background} source={require("../assets/background.png")} />

				

				<ScrollView style={styles.scrollView}>

				


					{/*Container for the Cereal Box Image and Cereal Info*/}
					<View style={styles.boxImgAndInfoContainer} {...{justifyContent: 'center', width: 200, height: 150}}>

						{/* Container for cereal box image*/}
						<View style={styles.cerealBoxImgContainer} {...{justifyContent: 'center'}}>

							{/*Image*/}
							<Image style={styles.cerealBoxImg} source={{uri: cerealImgSrc}} resizeMode={'cover'} />

							{/*Container for media buttons*/}
							<View style={styles.mediaButtons} {...{justifyContent: 'center'}}>
								
								{/*Like*/}
								<Pressable onPressIn={() => alert("evan")} delayPressIn={0}   style={styles.Media}  android_ripple={{borderless: true, radius:50}}>
									<Image style= {styles.Like} {...{tintColor: this.state.heartTint}} source={require(curHeartUrl)}/>
								</Pressable>
								
								
								{/*Review*/}
								<Pressable onPress={this.goToFavorites} style={styles.Media} >
									<Image style={styles.Comment} source={require("../assets/chat-box.png")}/>
								</Pressable>

							</View>
						</View>

						<Text> &nbsp; </Text>
						<View>
							{/*Container for cereal info */}
							<View style={styles.cerealInfoBox} {...{justifyContent: 'center'}}>

								<Text style={{fontFamily: 'SemiBold20', textAlign: 'center', fontSize: '22'}}>{cerealName}</Text>
								<Text> &nbsp;</Text>

								<Text style={{fontFamily: 'SemiBold15', textAlign: 'center', fontSize: '20'}}>Released in {cerealReleaseDate}</Text>
								<Text> &nbsp;</Text>

								<Text style={{fontFamily: 'SemiBold15', textAlign: 'center', fontSize: '20'}}>Produced by {cerealManufacturer}</Text>
								<Text> &nbsp;</Text>

								<Text style={{fontFamily: 'SemiBold15', textAlign: 'center', fontSize: '20'}}>Will It Kill You Meter: {cerealKillNum}</Text>
							</View>

							{/*stars buttons*/}
							<View style={styles.ratingButtons} {...{justifyContent: 'center'}}>
									
								{/*Stars*/}
								<Pressable onPress={this.goToFavorites} style={styles.Stars}>
									<Image style={styles.Star}source={require("../assets/Star.png")}/>
								</Pressable>
								
								<Pressable onPress={this.goToFavorites} style={styles.Stars}>
									<Image style={styles.Star} source={require("../assets/Star.png")}/>
								</Pressable>

								<Pressable onPress={this.goToFavorites} style={styles.Stars}>
									<Image style={styles.Star}source={require("../assets/Star.png")}/>
								</Pressable>

								<Pressable onPress={this.goToFavorites} style={styles.Stars}>
									<Image style={styles.Star} source={require("../assets/Star.png")}/>
								</Pressable>

								<Pressable onPress={this.goToFavorites} style={styles.Stars}>
									<Image style={styles.Star}source={require("../assets/Star.png")}/>
								</Pressable>

							</View>
						</View>
					</View>


					{/* Spacing */}
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>


					{/*Box for Description & Nutritional Facts*/}
					<View style={styles.cerealDayBox} {...{justifyContent: 'center', width: 300, height: 150}} >

						<Text> &nbsp; </Text>


						{/*Description*/}
						<View>
							<Text style={{fontSize:25, textAlign: 'center', fontFamily: 'SemiBold20'}}>Description</Text>			
							<Text>&nbsp;</Text>			
							<Text style={{fontSize:15, textAlign: 'center', fontFamily: 'SemiBold15', width: 300}}>{cerealDescription}</Text>			
						</View>

						<Text> &nbsp; </Text>
						<Text> &nbsp; </Text>

				
						{/*Description*/}
						<View>
							<Text style={{fontSize:25, textAlign: 'center', fontFamily: 'SemiBold20'}}>Ingredients</Text>			
							<Text>&nbsp;</Text>			
							<Text style={{fontSize:15, textAlign: 'center', fontFamily: 'SemiBold15', width: 300}}>{cerealNutritionFacts}</Text>			
						</View>

						{/*Spacing*/}
						<Text> &nbsp; </Text>
						<Text> &nbsp; </Text>
					</View>


					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>


					{/*Box for Reviews*/}
					<View style={styles.cerealDayBox} {...{justifyContent: 'center', width: 300, height: 150, alignSelf: 'flex-start', alignItems: 'center'}} >

						<Text> &nbsp; </Text>


						{/*Reviews*/}
						<View>
							<Text style={{fontSize:25, textAlign: 'center', fontFamily: 'SemiBold20'}}>Reviews</Text>			
							<Text>&nbsp;</Text>			




							<Text style={{fontSize:15, textAlign: 'center', fontFamily: 'SemiBold15', width: 300}}>{reviewText} - {reviewerName}</Text>			
						</View>
						

						<Text> &nbsp; </Text>
						<Text> &nbsp; </Text>



						

						{/*Spacing*/}
						<Text> &nbsp; </Text>
						<Text> &nbsp; </Text>
					</View>

				<Text>&nbsp;</Text>

				</ScrollView>


				{/*Profile Bar*/}
				<View style={styles.profileBar}>
					<Image style={styles.logo} source={require("../assets/logo.png")} />
					<Text style={{fontSize:100}}> </Text>
					<View style={styles.profileLogo} />
				</View>



		</SafeAreaView>


			{/*NavBar*/}
			<View style={styles.NavContainer}>
				<View style={styles.NavBar}>
				<Pressable onPress={this.goToHome} style={styles.IconBehave} android_ripple={{borderless: true, radius:50}}>
					<Image source = {require('../assets/icons8-home-page-48.png')} style={styles.Icon} />
				</Pressable>
				<Pressable onPress={this.goToSearch} style={styles.IconBehave} android_ripple={{borderless: true, radius:50}}>
					<Image source = {require('../assets/icons8-search-64.png')} style={styles.Icon} />
				</Pressable>
				<Pressable onPress={this.goToCereals} style={styles.IconBehave} android_ripple={{borderless: true, radius:50}}>
					<Image source = {require('../assets/icons8-cereal-64.png')} style={styles.Icon} />
				</Pressable>
				<Pressable onPress={this.goToFavorites} style={styles.IconBehave} android_ripple={{borderless: true, radius:50}}>
					<Image source = {require('../assets/icons8-rating-48.png')} style={styles.Icon} />
				</Pressable>  
				</View>
			</View>

		</View>
			
		)
	}

	//API Call to get a Cereal's details via its ID
	handleGetCereal = async () => {
		
		//Object var
		var obj = {
			"collection": "box",
			"column": "_id",
			"target": "640cedc6dffdb4d4ce4bf16c" //ID - change this for every cereal
		}

		var js = JSON.stringify(obj);

		//Connect to the API
		try {
			const response = await fetch('https://cerealboxd.herokuapp.com/api/searchByID', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			//Get results
			var res = JSON.parse(await response.text());
			var results = res.results;

			//Populate current cereal data from the returned JSON
			cerealName = results.name;
			cerealReleaseDate = results.releaseDate;
			cerealManufacturer = results.manufacturer;
			cerealKillNum = results.willItKillYou;
			cerealDescription = results.description;
			cerealNutritionFacts = results.ingredients;
			cerealImgSrc = results.image;

			//Set state
			this.setState({getCerealCriteria: ''});

		}
		catch(error) {
			this.setState({getCerealCriteria: e.message});
		}
	}


	//API Call to get a Cereal's review details via its ID
	handleGetReview = async () => {
		
		//Object var
		var obj = {
			"collection": "reviews",
			"column": "_id",
			"target": "6444d82888ed540facf88139" //ID - change this for every cereal
		}

		var js = JSON.stringify(obj);

		//Connect to the API
		try {
			const response = await fetch('https://cerealboxd.herokuapp.com/api/searchByID', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			//Get results
			var res = JSON.parse(await response.text());
			var results = res.results;

			//Populate current cereal data from the returned JSON
			reviewText = results.body;
			reviewerName = results.reviewerName;
			reviewRating = results.rating;

			//Set state
			this.setState({getReviewCriteria: ''});

		}
		catch(error) {
			this.setState({getReviewCriteria: e.message});
		}
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

	userLikeCereal = async() => {

	}

	userReviewCereal = async() => {
		
	}

	tapHeart = async() => {
		
		//this.setState({heartTint: 'pink'});
		console.log("bruh")

	}


}