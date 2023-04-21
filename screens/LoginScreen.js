import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import jwt_decode from "jwt-decode";
import styles from "../Styles/Login.js";

global.localName = '';
global.password = '';
global.userId = -1;
global.firstName = '';
global.lastName = '';
global.search = '';
global.card = '';

import * as Font from 'expo-font';
let customFonts = 
{
	'SemiBold15': require('../assets/Fonts/SharpGroteskSemiBold15.otf'),
	'Book20' : require('../assets/Fonts/SharpGroteskBook20.otf'),
	'SemiBold20' : require('../assets/Fonts/SharpGroteskSemiBold20.otf'),
}

export default class Login extends Component {

	constructor() {
		super()
		this.state = {
			 message: ' ',
			 fontsLoaded: false
		}
	};

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

		//If the fonts didn't load, ret null
		if(!this.state.fontsLoaded) {
			return null;
		}

		return (
			<SafeAreaView style={styles.container}>
				<Image style={styles.background} source={require("../assets/background.png")} />
				<Image style={styles.logo} source={require("../assets/logo.png")} />
				<KeyboardAvoidingView style={styles.inputBox} behavior="padding" enabled>
					<Text style={{fontSize:20}}> </Text>
					<Text style={styles.title}>LOGIN</Text>
					<Text style={{fontSize:20}}> </Text>
					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="Username"
							onChangeText={(val) => {this.changeLoginNameHandler(val)}}
						/>        
					</View>
					<Text style={{fontSize:10}}> </Text>

					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="Password"
							secureTextEntry={true}
							onChangeText={(val) => {this.changePasswordHandler(val)}}
						/>
					</View>
					<Text style={{fontSize:5}}> </Text>
					<Text style={{fontSize:15, color:'red',}}>{this.state.message}</Text>
					<Text style={{fontSize:5}}> </Text>
					<View style={styles.button}>
						<Button
							title="Sign In"
							color="#fff"
							onPress={this.handleClick}
						/>
					</View>
					<Text style={{fontSize:5}}> </Text>
					<Button
						title="Don't Have An Account? Register Here!"
						color="#1C2143"
						onPress={this.goToRegister}
					/>
					<Text style={{fontSize:5}}> </Text>
				</KeyboardAvoidingView>
				{/* <Image source={require("../assets/splash.png")} /> */}
			</SafeAreaView>
		);
	}
	
	handleClick = async () => {
		// this.props.navigation.navigate('Home');
		try {
			var obj = {
				login: global.loginName,
				password: global.password
			};
			var js = JSON.stringify(obj);
			
			const response = await fetch('https://cerealboxd.herokuapp.com/api/login', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});
			
			var res = JSON.parse(await response.text());
			
			if (res.accessToken != undefined) {
				var decoded = jwt_decode(res.accessToken);
				global.firstName = decoded.firstName;
				global.lastName = decoded.lastName;
				global.userId = decoded.id;
				this.setState({message: ' '});
				this.props.navigation.navigate('Home');
			}
			else if (res.error != undefined) {
				this.setState({message: res.error});
			}
			else {
				this.setState({message: "Error"});
			}
		}
		catch(e) {
			this.setState({message: e.message});
		}
	} 
	
	changeLoginNameHandler = async (val) => {
		global.loginName = val;
	} 
	
	changePasswordHandler = async (val) => {
		global.password = val;
	} 
	
	goToRegister = async() => {
		this.props.navigation.navigate('Register');
	}
	
}


				// <Image 
				// 	source={{
				// 		width: 200,
				// 		height: 200,
				// 		uri: "https://picsum.photos/200/200",
				// 	}}
				// />