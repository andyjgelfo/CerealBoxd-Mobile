import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, ScrollView, TouchableOpacity, Icon} from 'react-native';
import styles from "../Styles/Cereal.js";

//Image URLS
let heartWhiteUrl = '../assets/Heart.png';
let heartPinkUrl = '../assets/Heart_Pink.png';
let curHeartUrl = '../assets/Heart.png';

//Vars for cereal info
let cerealName = global.cereal.name;
let cerealReleaseDate = global.cereal.releaseDate;
let cerealManufacturer = global.cereal.manufacturer;
let cerealKillNum = global.cereal.willItKillYou;
let cerealDescription = global.cereal.description;
let cerealNutritionFacts = global.cereal.ingredients;
let cerealImgSrc = global.cereal.image;

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


	//Render
	render() {

		//Get the cereals!
		this.handleGetCereal();

		//Get the reviews!
		// this.handleGetReview();

		return (

			
		<View style={styles.container}>

			{/*Main container*/}
			<View style={styles.container}>

				{/*Background img */}
				<Image style={styles.background} source={require("../assets/background.png")} />

				
				{/*Profile Bar*/}
				<View style={styles.profileBar}>
					<Image style={styles.logo} source={require("../assets/trimlogo.png")} />
					<Text style={{fontSize:100}}> </Text>
					<View style={styles.profileLogo} />
				</View>

				<ScrollView>

					<View style={{alignItems: 'center'}}>

						{/*Container for the Cereal Box Image and Cereal Info*/}
						<View style={{flexDirection: 'row', alignItems: 'center'}}>

							{/* Container for cereal box image*/}

							<View style={{shadowOpacity: 0.5, shadowOffset: {width: 0, height: 3}}}>
								{/*Image*/}
								<Image style={styles.cerealBoxImg} source={{uri: cerealImgSrc != ""? cerealImgSrc: global.jsonSearch.results[0].image}} resizeMode={'stretch'} />
							</View>


							<Text> &nbsp;</Text>
							<View>
								{/*Container for cereal info */}
								<View style={styles.cerealInfoBox} {...{justifyContent: 'center'}}>

									<Text style={{fontFamily: 'SemiBold20', textAlign: 'center', fontSize: 22}}>{cerealName}</Text>
									<Text> &nbsp;</Text>

									<Text style={{fontFamily: 'SemiBold15', textAlign: 'center', fontSize: 20}}>Released in {cerealReleaseDate}</Text>
									<Text> &nbsp;</Text>

									<Text style={{fontFamily: 'SemiBold15', textAlign: 'center', fontSize: 20}}>Produced by {cerealManufacturer}</Text>
									<Text> &nbsp;</Text>

									<Text style={{fontFamily: 'SemiBold15', textAlign: 'center', fontSize: 20}}>Will It Kill You Meter: {cerealKillNum}</Text>
								</View>
							</View>
						</View>
							<Text> &nbsp;</Text>
						{/*Container for media buttons*/}
						<View style={styles.mediaButtons}>
							<Text>    </Text>
								
							{/*Like*/}
							<TouchableOpacity onPress={() => alert("evan")}>
								<Image style= {styles.Like} source={require("../assets/Heart.png")}/>
							</TouchableOpacity>
							
							{/*Review*/}
							<TouchableOpacity onPress={() => this.goToFavorites}>
								<Image style={styles.Comment} source={require("../assets/chat-box.png")}/>
							</TouchableOpacity>
								
							<Text>           </Text>
							{/*Stars*/}
							<TouchableOpacity onPress={() => this.goToFavorites}>
								<Image style={styles.Star}source={require("../assets/Star.png")}/>
							</TouchableOpacity>
							
							<TouchableOpacity onPress={() => this.goToFavorites}>
								<Image style={styles.Star} source={require("../assets/Star.png")}/>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => this.goToFavorites}>
								<Image style={styles.Star}source={require("../assets/Star.png")}/>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => this.goToFavorites}>
								<Image style={styles.Star} source={require("../assets/Star.png")}/>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => this.goToFavorites}>
								<Image style={styles.Star}source={require("../assets/Star.png")}/>
							</TouchableOpacity>
						</View>

						<Text> &nbsp;</Text>

						{/*Box for Description & Nutritional Facts*/}
						<View style={styles.cerealDayBox}>

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
						<View style={styles.cerealDayBox} {...{justifyContent: 'center', width: 300, height: 150}} >

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
					</View>


				</ScrollView>





		</View>


			{/*NavBar*/}
			{/* <View style={styles.NavContainer}>
				<View style={styles.NavBar}>
				<TouchableOpacity onPress={() => this.goToHome} style={styles.IconBehave} android_ripple={{borderless: true, radius:50}}>
					<Image source = {require('../assets/icons8-home-page-48.png')} style={styles.Icon} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.goToSearch} style={styles.IconBehave} android_ripple={{borderless: true, radius:50}}>
					<Image source = {require('../assets/icons8-search-64.png')} style={styles.Icon} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.goToCereals} style={styles.IconBehave} android_ripple={{borderless: true, radius:50}}>
					<Image source = {require('../assets/icons8-cereal-64.png')} style={styles.Icon} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.goToFavorites} style={styles.IconBehave} android_ripple={{borderless: true, radius:50}}>
					<Image source = {require('../assets/icons8-rating-48.png')} style={styles.Icon} />
				</TouchableOpacity>  
				</View>
			</View> */}

		</View>
			
		)
	}

	//API Call to get a Cereal's details via its ID
	handleGetCereal = async () => {
		
		//Object var
		var obj = {
			"collection": "box",
			"column": "_id",
			"target": global.cereal._id //ID - change this for every cereal
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
		catch(e) {
			this.setState({getCerealCriteria: e.message});
		}
	}


	//API Call to get a Cereal's review details via its ID
	handleGetReview = async () => {
		
		//Object var
		var obj = {
			"collection": "reviews",
			"column": "_id",
			"target": global.cereal._id //ID - change this for every cereal
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
		catch(e) {
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