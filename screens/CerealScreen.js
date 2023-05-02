import React, { Component, useState } from 'react';
import { ActivityIndicator, Button, View, Text, TextInput, Image, ScrollView, SafeAreaView, TouchableOpacity, Icon } from 'react-native';
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

let otherReviewPlaceholder = "No reviews yet...";
let yourReviewPlaceholder = "Write a Review!";
let addOrEdit = "ADD";
let smileyOrDelete = "😃";
//let didYouAddStars = "";

//Globals (not sure if these need to be global aaa)
let yourReviewText = '';
let reviewRating = 0;

global.cerealReviews = {
	results: []
};


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
			heartTint: 'white',
			star1Tint: 'white',
			star2Tint: 'white',
			star3Tint: 'white',
			star4Tint: 'white',
			star5Tint: 'white',
			addOrEdit: 'ADD',
			smileyOrDelete: 'DELETE',
			didYouAddStars: ''

		}
	}


	//Render
	render() {

		//Check if the cereal is favorited by the user!
		//this.handleCheckFavorite();

		//this.handleCheckRating();

		//Get the cereal!
		//this.handleGetCereal();

		//Get the reviews!
		//this.handleGetReviews();


		return (




			<View style={styles.container}>

				{/*Main container*/}
				<View style={styles.container}>

					{/*Background img */}
					<Image style={styles.background} source={require("../assets/background.png")} />


					{/*Profile Bar*/}
					<View style={styles.profileBar}>
						<Image style={styles.logo} source={require("../assets/trimlogo.png")} />
						<Text style={{ fontSize: 100 }}> </Text>
					</View>

					<ScrollView nestedScrollEnabled={true}>

						<View style={{ alignItems: 'center' }}>

							{/*Container for the Cereal Box Image and Cereal Info*/}
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>

								{/* Container for cereal box image*/}

								<View style={{ shadowOpacity: 0.5, shadowOffset: { width: 0, height: 3 } }}>
									{/*Image*/}
									<Image style={styles.cerealBoxImg} source={{ uri: global.cereal.image }} resizeMode={'stretch'} />


								</View>


								<Text> &nbsp;</Text>
								<View>
									{/*Container for cereal info */}
									<View style={styles.cerealInfoBox} {...{ justifyContent: 'center' }}>

										<Text style={{ fontFamily: 'SemiBold20', textAlign: 'center', fontSize: 22 }}>{global.cereal.name}</Text>
										<Text> &nbsp;</Text>

										<Text style={{ fontFamily: 'SemiBold15', textAlign: 'center', fontSize: 20 }}>Released in {global.cereal.releaseDate}</Text>
										<Text> &nbsp;</Text>

										<Text style={{ fontFamily: 'SemiBold15', textAlign: 'center', fontSize: 20 }}>Produced by {global.cereal.manufacturer}</Text>
										<Text> &nbsp;</Text>

										<Text style={{ fontFamily: 'SemiBold15', textAlign: 'center', fontSize: 20 }}>Will It Kill You Meter: {global.cereal.willItKillYou}</Text>
									</View>
								</View>
							</View>
							<Text> &nbsp;</Text>
							{/*Container for media buttons*/}
							<View style={styles.mediaButtons}>
								<Text>    </Text>

								{/*Like*/}
								<TouchableOpacity onPress={this.handleFavoriteCereal}>
									<Image style={styles.Like} {...{ tintColor: this.state.heartTint }} source={require("../assets/Heart.png")} onLoad={() => { this.handleCheckBeforeLoad() }} />
								</TouchableOpacity>

								{/*Review*/}
								{/*<TouchableOpacity onPress={() => this.goToReview}>
								<Image style={styles.Comment} source={require("../assets/chat-box.png")}/>
							</TouchableOpacity>*/}

								<Text>           </Text>
								{/*Stars*/}
								<TouchableOpacity onPress={this.tapStar1}>
									<Image style={styles.Star} {...{ tintColor: this.state.star1Tint }} source={require("../assets/Star.png")} />
								</TouchableOpacity>

								<TouchableOpacity onPress={this.tapStar2}>
									<Image style={styles.Star} {...{ tintColor: this.state.star2Tint }} source={require("../assets/Star.png")} />
								</TouchableOpacity>

								<TouchableOpacity onPress={this.tapStar3}>
									<Image style={styles.Star} {...{ tintColor: this.state.star3Tint }} source={require("../assets/Star.png")} />
								</TouchableOpacity>

								<TouchableOpacity onPress={this.tapStar4}>
									<Image style={styles.Star} {...{ tintColor: this.state.star4Tint }} source={require("../assets/Star.png")} />
								</TouchableOpacity>

								<TouchableOpacity onPress={this.tapStar5}>
									<Image style={styles.Star} {...{ tintColor: this.state.star5Tint }} source={require("../assets/Star.png")} />
								</TouchableOpacity>
							</View>

							<Text> &nbsp;</Text>

							{/*Box for Description & Nutritional Facts*/}
							<View style={styles.cerealDayBox}>

								<Text> &nbsp; </Text>


								{/*Description*/}
								<View>
									<Text style={{ fontSize: 25, textAlign: 'center', fontFamily: 'SemiBold20' }}>Description</Text>
									<Text>&nbsp;</Text>
									<Text style={{ fontSize: 15, textAlign: 'center', fontFamily: 'SemiBold15', width: 300 }}>{global.cereal.description}</Text>
								</View>

								<Text> &nbsp; </Text>
								<Text> &nbsp; </Text>


								{/*Description*/}
								<View>
									<Text style={{ fontSize: 25, textAlign: 'center', fontFamily: 'SemiBold20' }}>Ingredients</Text>
									<Text>&nbsp;</Text>
									<Text style={{ fontSize: 15, textAlign: 'center', fontFamily: 'SemiBold15', width: 300 }}>{global.cereal.ingredients}</Text>
								</View>

								{/*Spacing*/}
								<Text> &nbsp; </Text>
								<Text> &nbsp; </Text>
							</View>






							<Text> &nbsp; </Text>
							<Text> &nbsp; </Text>
							<Text> &nbsp; </Text>



							<View style={styles.favBar}>
								<Text style={styles.barText}>Write a Review</Text>
							</View>
							<Text>&nbsp;</Text>


							<View style={{ flexDirection: 'column', height: 35, borderColor: '#1C2143', backgroundColor: '#F2EAC1', borderWidth: 3, borderRadius: 10, height: 'auto' }}>
								{/*Box for Reviews*/}
								<View style={{ justifyContent: 'center', width: 350, height: 'auto' }} >
									{/*Reviews*/}
									<Text>&nbsp;</Text>

									<TextInput
										multiline
										editable
										style={styles.textInput}
										placeholder={yourReviewPlaceholder}
										onChangeText={(val) => { this.changeYourReviewTextHandler(val) }}
									/>

									<Text>&nbsp;</Text>

									<View style={styles.mediaButtons}>
										<TouchableOpacity onPress={this.handleAddEditClick} style={styles.appButtonContainer}>
											<Text style={styles.appButtonText}>{this.state.addOrEdit}</Text>
										</TouchableOpacity>

										<Text>&nbsp;</Text>
										<Text>&nbsp;</Text>
										<Text>&nbsp;</Text>

										<TouchableOpacity onPress={this.handleSmileyDeleteClick} style={styles.appButtonContainer}>
											<Text style={styles.appButtonText}>{this.state.smileyOrDelete}</Text>
										</TouchableOpacity>
									</View>



									<Text>&nbsp;</Text>

									<Text style={{ color: 'red', textAlign: 'center' }}>{this.state.didYouAddStars}</Text>

									<Text>&nbsp;</Text>




								</View>

							</View>


							<Text>&nbsp;</Text>
							<Text>&nbsp;</Text>


						</View>

						<Text> &nbsp; </Text>
						<Text> &nbsp; </Text>
						<Text> &nbsp; </Text>


						<View style={{alignItems: 'center'}}>
							<View style={styles.favBar}>
								<Text style={styles.barText}>Reviews</Text>
							</View>
							<Text>&nbsp;</Text>
						</View>

						<ScrollView nestedScrollEnabled={true} style={{ flexDirection: 'column', height: 35, backgroundColor: '#1C2143', borderColor: '#F2EAC1', borderWidth: 3, borderRadius: 10, height: 500 }}>
							{/*Box for Reviews*/}
							<View style={{ justifyContent: 'center', width: 350, height: 'auto' }} >
								{/*Reviews*/}
								<Text>&nbsp;</Text>
								{global.cerealReviews.results.map((review) => {
									return (
										<View>
											<Text style={{ fontSize: 25, textAlign: 'left', fontFamily: 'SemiBold15', width: 300, color: 'white', marginLeft: 10 }}>{review.rating}/5</Text>
											<Text style={{ fontSize: 20, textAlign: 'left', fontFamily: 'SemiBold15', width: 300, color: 'white', marginLeft: 10 }}>"{review.body}" - @{review.reviewerName}</Text>
											<Text>&nbsp;</Text>
											<Text>&nbsp;</Text>
										</View>
									);
								})}
							</View>
						</ScrollView>




					</ScrollView>







				</View>

			</View>

		)
	}

	handleCheckFavorite = async () => {

		//alert("starting");

		//Object var
		var obj = {
			"collection": "favorites",
			"column1": "cerealID",
			"target1": global.cereal._id, //ID - change this for every cereal
			"column2": "userID",
			"target2": global.id
		}

		var js = JSON.stringify(obj);

		//Connect to the API
		try {
			const response = await fetch('https://cerealboxd.herokuapp.com/api/searchByTwoID', {
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

			if (results != null) {
				this.setState({ heartTint: "#c41e3a" })
			}


		}
		catch (e) {
			this.setState({ heartTint: e.message });
		}
	}


	handleCheckRating = async () => {

		//alert("starting");

		//Object var
		var obj = {
			"collection": "reviews",
			"column1": "cerealID",
			"target1": global.cereal._id, //ID - change this for every cereal
			"column2": "reviewerID",
			"target2": global.id
		}

		var js = JSON.stringify(obj);

		//Connect to the API
		try {
			const response = await fetch('https://cerealboxd.herokuapp.com/api/searchByTwoID', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			//Get results
			var res = JSON.parse(await response.text());
			var results = res.results;

			reviewRating = 0;
			yourReviewPlaceholder = "Write a Review!";


			//If the user HAS left a review!
			if (results != null) {
				//Assign their current numeric rating
				reviewRating = results.rating;

				//Get the user's review text
				yourReviewText = results.body;

				//Define the placeholder for the textbox based on if there was a written review
				if (results.body != "") {
					yourReviewPlaceholder = results.body;
				}
				else {
					yourReviewPlaceholder = "Edit Review!";
				}

				//Change the review buttons to their edit/del versions
				/*addOrEdit = "EDIT";
				smileyOrDelete = "DELETE";*/

				this.setState({ addOrEdit: 'EDIT' });
				this.setState({ smileyOrDelete: 'DELETE' });

			}

			//Depending on the user rating, light up the correct number of stars!
			switch (reviewRating) {
				case 1:
					this.setState({ star1Tint: '#40bcf4' });
					break;
				case 2:
					this.setState({ star1Tint: '#40bcf4' });
					this.setState({ star2Tint: '#40bcf4' });
					break;
				case 3:
					this.setState({ star1Tint: '#40bcf4' });
					this.setState({ star2Tint: '#40bcf4' });
					this.setState({ star3Tint: '#40bcf4' });
					break;
				case 4:
					this.setState({ star1Tint: '#40bcf4' });
					this.setState({ star2Tint: '#40bcf4' });
					this.setState({ star3Tint: '#40bcf4' });
					this.setState({ star4Tint: '#40bcf4' });
					break;
				case 5:
					this.setState({ star1Tint: '#40bcf4' });
					this.setState({ star2Tint: '#40bcf4' });
					this.setState({ star3Tint: '#40bcf4' });
					this.setState({ star4Tint: '#40bcf4' });
					this.setState({ star5Tint: '#40bcf4' });
					break;
				default:
					this.setState({ star1Tint: 'white' });
					this.setState({ star2Tint: 'white' });
					this.setState({ star3Tint: 'white' });
					this.setState({ star4Tint: 'white' });
					this.setState({ star5Tint: 'white' });
					break;
			}
		}
		catch (e) {
			this.setState({ star1Tint: e.message });
		}
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
			this.setState({ getCerealCriteria: '' });

		}
		catch (e) {
			this.setState({ getCerealCriteria: e.message });
		}
	}


	//API Call to get a Cereal's review details via its ID
	handleGetReviews = async () => {


		this.setState({ didYouAddStars: "" });


		//Object var
		var obj = {
			collection: "reviews",
			column: "cerealID",
			target: global.cereal._id //ID - change this for every cereal
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
			global.cerealReviews = JSON.parse(await response.text());

			//Set state
			this.setState({ getReviewCriteria: '' });

		}
		catch (e) {
			this.setState({ getReviewCriteria: e.message });
		}
	}

	handleFavoriteCereal = async () => {


		//alert("user ID: " + global.userId);
		//alert("cereal ID: " + global.cereal._id);

		//Object var
		var obj = {
			"userID": global.id,
			"cerealID": global.cereal._id //ID - change this for every cereal
		}

		var js = JSON.stringify(obj);



		//If the user is trying to HEART this cereal
		if (this.state.heartTint == "white") {
			//Connect to the API - addFavorite
			try {
				const response = await fetch('https://cerealboxd.herokuapp.com/api/addFavorite', {
					method: 'POST',
					body: js,
					headers: {
						'Content-Type': 'application/json'
					}
				});

				//Get results
				var res = JSON.parse(await response.text());
				var results = res.results;

				this.setState({ heartTint: '#c41e3a' });

			}
			catch (e) {
				this.setState({ heartTint: 'white' });

			}
		}

		//If the user is trying to UNHEART this cereal
		else if (this.state.heartTint == "#c41e3a") {
			//Connect to the API - deleteFavorite
			try {
				const response = await fetch('https://cerealboxd.herokuapp.com/api/deleteFavorite', {
					method: 'POST',
					body: js,
					headers: {
						'Content-Type': 'application/json'
					}
				});

				//Get results
				var res = JSON.parse(await response.text());
				var results = res.results;

				this.setState({ heartTint: 'white' });

			}
			catch (e) {
				this.setState({ heartTint: e.message });

			}
		}


	}

	goToHome = async () => {
		this.props.navigation.navigate('Home');
	}

	goToSearch = async () => {
		this.props.navigation.navigate('Search');
	}

	goToCereal = async () => {
		this.props.navigation.navigate('Evan');
	}

	goToFavorites = async () => {
		this.props.navigation.navigate('Cereal');
	}

	goToReview = async () => {
		this.props.navigation.navigate('Review');
	}

	goToLogin = async () => {
		this.props.navigation.navigate('Login');
	}

	tapHeart = async () => {


		if (this.state.heartTint == '#c41e3a') {
			this.setState({ heartTint: 'white' });

		}
		else {
			this.setState({ heartTint: '#c41e3a' });
		}
		//console.log("bruh")

	}

	tapStar1 = async () => {

		this.setState({ star1Tint: '#40bcf4' });
		this.setState({ star2Tint: 'white' });
		this.setState({ star3Tint: 'white' });
		this.setState({ star4Tint: 'white' });
		this.setState({ star5Tint: 'white' });

		reviewRating = 1;

	}

	tapStar2 = async () => {

		this.setState({ star1Tint: '#40bcf4' });
		this.setState({ star2Tint: '#40bcf4' });
		this.setState({ star3Tint: 'white' });
		this.setState({ star4Tint: 'white' });
		this.setState({ star5Tint: 'white' });

		reviewRating = 2;


	}

	tapStar3 = async () => {

		this.setState({ star1Tint: '#40bcf4' });
		this.setState({ star2Tint: '#40bcf4' });
		this.setState({ star3Tint: '#40bcf4' });
		this.setState({ star4Tint: 'white' });
		this.setState({ star5Tint: 'white' });

		reviewRating = 3;


	}

	tapStar4 = async () => {

		this.setState({ star1Tint: '#40bcf4' });
		this.setState({ star2Tint: '#40bcf4' });
		this.setState({ star3Tint: '#40bcf4' });
		this.setState({ star4Tint: '#40bcf4' });
		this.setState({ star5Tint: 'white' });

		reviewRating = 4;


	}

	tapStar5 = async () => {

		this.setState({ star1Tint: '#40bcf4' });
		this.setState({ star2Tint: '#40bcf4' });
		this.setState({ star3Tint: '#40bcf4' });
		this.setState({ star4Tint: '#40bcf4' });
		this.setState({ star5Tint: '#40bcf4' });

		reviewRating = 5;


	}

	changeYourReviewTextHandler = async (val) => {
		yourReviewText = val;
	}

	handleAddEditClick = async () => {


		//If the user hasn't added a review yet - ADD
		if (this.state.addOrEdit == "ADD") {

			//Check to ensure that the user added a numeric rating before reviewing
			if (reviewRating <= 0) {
				//Give a message and break
				this.setState({ didYouAddStars: "You forgot to leave a rating above!" });
			}
			else {

				try {
					var obj = {
						reviewerID: global.id,
						cerealID: global.cereal._id,
						rating: reviewRating,
						body: yourReviewText
					};
					var js = JSON.stringify(obj);

					const response = await fetch('https://cerealboxd.herokuapp.com/api/addReview', {
						method: 'POST',
						body: js,
						headers: {
							'Content-Type': 'application/json'
						}
					});

					var res = JSON.parse(await response.text());



					//Now that we've added a review, change addOrEdit to EDIT, and placehold the review box with the prev review
					addOrEdit = "EDIT";
					yourReviewPlaceholder = yourReviewText;
					smileyOrDelete = "DELETE"


					//This will refresh the reviews! Yippee!!
					//RNRestart.Restart();
					this.handleCheckBeforeLoad();



				}
				catch (e) {
					this.setState({ message: e.message });
				}

			}

		}
		else if (this.state.addOrEdit == "EDIT") {
			try {
				var obj = {
					reviewerID: global.id,
					cerealID: global.cereal._id,
					rating: reviewRating,
					body: yourReviewText
				};
				var js = JSON.stringify(obj);

				const response = await fetch('https://cerealboxd.herokuapp.com/api/editReview', {
					method: 'POST',
					body: js,
					headers: {
						'Content-Type': 'application/json'
					}
				});

				var res = JSON.parse(await response.text());

				yourReviewPlaceholder = yourReviewText;

				//This will refresh the reviews! Yippee!!
				//RNRestart.Restart();
				this.handleCheckBeforeLoad();
			}
			catch (e) {
				this.setState({ message: e.message });
			}
		}

	}


	handleSmileyDeleteClick = async () => {


		//  const {reviewerID, cerealID, rating, body} = req.body;

		//If the user hasn't added a review yet - ADD
		if (this.state.addOrEdit == "EDIT") {
			try {
				var obj = {
					reviewerID: global.id,
					cerealID: global.cereal._id,
				};
				var js = JSON.stringify(obj);

				const response = await fetch('https://cerealboxd.herokuapp.com/api/deleteReview', {
					method: 'POST',
					body: js,
					headers: {
						'Content-Type': 'application/json'
					}
				});

				var res = JSON.parse(await response.text());

				//Now that we've added a review, change addOrEdit to EDIT, and placehold the review box with the prev review
				this.setState({ addOrEdit: 'ADD' });
				yourReviewPlaceholder = "Write a Review!";

				//This will refresh the reviews! Yippee!!
				//RNRestart. Restart();
				this.handleCheckBeforeLoad();
			}
			catch (e) {
				this.setState({ smileyOrDelete: e.message });
			}
		}
		else {
			this.setState({didYouAddStars: "You can't delete a review you haven't written!"})
		}

	}


	handleCheckBeforeLoad = async () => {

		yourReviewText = "";

		this.handleCheckRating();
		this.handleCheckFavorite();
		this.handleGetReviews();

	}


}