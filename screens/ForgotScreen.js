import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import jwt_decode from "jwt-decode";
import styles from "../Styles/Login";

let username = ''

export default class ForgotScreen extends Component {

	constructor() {
		super()
		this.state = {
			 message: ' ',
		}
	};

	render() {

		return (
			<SafeAreaView style={styles.container}>
				<Image style={styles.background} source={require("../assets/background.png")} />
				<Image style={styles.logo} source={require("../assets/trimlogo.png")} />
				<KeyboardAvoidingView style={styles.inputBox} behavior="padding" enabled>
					<Text style={{fontSize:20}}> </Text>
					<Text style={styles.title}>Forgot Password?</Text>
					<Text style={{fontSize:20}}> </Text>
					<Text style={{fontFamily: 'SemiBold15', textAlign: 'center'}}>Enter your username and your temporary password will be sent to your main email and your recovery email if applicable</Text>
					<Text style={{fontSize:20}}> </Text>
					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="USERNAME"
							onChangeText={(val) => {this.changeTextHandler(val)}}
						/>        
					</View>
					
					<Text style={{fontSize:5}}> </Text>
					<Text style={{fontSize:15, color:'red',}}>{this.state.message}</Text>
					<Text style={{fontSize:5}}> </Text>
					<View style={styles.button}>
						<TouchableOpacity onPress={this.handleClick} style={styles.appButtonContainer}>
							<Text style={styles.appButtonText}>SUBMIT</Text>
						</TouchableOpacity>
					</View>
					<Text style={{fontSize:25}}> </Text>
				
				</KeyboardAvoidingView>
				{/* <Image source={require("../assets/splash.png")} /> */}
			</SafeAreaView>
		);
	}

	usernameTaken = async () => {
		try {
			var obj = {
				username: username,
			};
			var js = JSON.stringify(obj);

			const response = await fetch('https://cerealboxd.herokuapp.com/api/checkUsername', {
				method: 'POST',
				body: js,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			var res = JSON.parse(await response.text());

			if (res.results == 1) {
				return true;
			}
			return false;
		}
		catch(e) {
			this.setState({error: e.message});
			return true;
		}
	}

	sendEmail = async () => {
		global.code = Math.floor(100000 + Math.random() * 900000);
	}
	
	handleClick = async () => {
		this.setState({message: ' '});
		if (await this.usernameTaken()) {
			let password = '';
			const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			for (var i = 0; i < 16; i++) {
				password += chars[Math.floor(Math.random() * chars.length)];
			}

			try {
				var obj = {
					username: username,
					password: password
				};
				var js = JSON.stringify(obj);
				
				const response = await fetch('https://cerealboxd.herokuapp.com/api/forgotPassword', {
					method: 'POST',
					body: js,
					headers: {
						'Content-Type': 'application/json'
					}
				});
				
				var res = JSON.parse(await response.text());

				try {
					var obj = {
						to: res.email,
						subject: "Temporary Password",
						output: 'Your temporary password is: ' + password + "<br><br> Please be sure to change your password once logged in"
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

				this.props.navigation.navigate('Login');

			}
			catch(e) {
				this.setState({message: e.message});
			}
		}
		else {
			this.setState({message: 'Username does not exist'})
		}
	} 
	
	changeTextHandler = async (val) => {
		username = val;
	} 
}