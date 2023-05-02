import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import jwt_decode from "jwt-decode";
import styles from "../Styles/Login.js";
import * as Font from 'expo-font';

global.userId = '';
global.firstName = '';
global.lastName = '';
global.email = '';
global.id = -1;
global.code;



let password = '';

let customFonts = {
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
	}

	//Load in custom fonts
	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		this.setState({fontsLoaded: true});
	}
	
	componentDidMount() {
		this._loadFontsAsync();
	}

	render() {
		if (!this.state.fontsLoaded) {
			return null;
		}

		return (
			<SafeAreaView style={styles.container}>
				<Image style={styles.background} source={require("../assets/background.png")} />
				<Image style={styles.logo} source={require("../assets/trimlogo.png")} />
				<KeyboardAvoidingView style={styles.inputBox} behavior="padding" enabled>
					<Text style={{fontSize:20}}> </Text>
					<Text style={styles.title}>LOGIN</Text>
					<Text style={{fontSize:20}}> </Text>
					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="USERNAME"
							onChangeText={(val) => {this.changeLoginNameHandler(val)}}
						/>        
					</View>
					<Text style={{fontSize:10}}> </Text>

					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="PASSWORD"
							secureTextEntry={true}
							onChangeText={(val) => {this.changePasswordHandler(val)}}
						/>
					</View>
					<Text style={{fontSize:5}}> </Text>
					<Text style={{fontSize:15, color:'red',}}>{this.state.message}</Text>
					<Text style={{fontSize:5}}> </Text>
					<View style={styles.button}>
						<TouchableOpacity onPress={this.handleClick} style={styles.appButtonContainer}>
							<Text style={styles.appButtonText}>SIGN IN</Text>
						</TouchableOpacity>
					</View>
					<Text style={{fontSize:5}}> </Text>
					<Button
						title="Don't Have An Account? Register Here!"
						color="#1C2143"
						onPress={this.goToRegister}
					/>
					<Button
						title="Forgot Your Password?"
						color="#1C2143"
						onPress={this.goToForgotPassord}
					/>
					<Text style={{fontSize:5}}> </Text>
				</KeyboardAvoidingView>
				{/* <Image source={require("../assets/splash.png")} /> */}
			</SafeAreaView>
		);
	}

	sendEmail = async () => {
		global.code = Math.floor(100000 + Math.random() * 900000);
		try {
			var obj = {
				to: global.email,
				subject: "Confirm Your Email Address",
				output: 'Your verification code is ' + global.code
			};
			var js = JSON.stringify(obj);

			const response = await fetch('https://cerealboxd.herokuapp.com/api/sendemail', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			this.props.navigation.navigate('Verify');
		}
		catch(e) {
			this.setState({error: e.message});
		}
	}
	
	handleClick = async () => {
		this.setState({message: ' '});
		try {
			var obj = {
				login: global.loginName,
				password: password
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

				global.userId = decoded.userId;
				global.firstName = decoded.firstName;
				global.lastName = decoded.lastName;
				global.email = decoded.email;
				global.id = decoded.id;

				if (decoded.confirmed) {
					this.setState({message: ' '});
					this.props.navigation.navigate('Tabs');
				}
				else {
					this.setState({message: 'Email not confirmed yet'});
					await this.sendEmail();
					this.props.navigation.navigate('Verify');
				}
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
		password = val;
	} 
	
	goToRegister = async() => {
		this.props.navigation.navigate('Register');
	}

	goToForgotPassord = async() => {
		this.props.navigation.navigate('Forgot');
	}
}