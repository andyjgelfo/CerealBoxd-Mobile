import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import jwt_decode from "jwt-decode";
import styles from "../Styles/Login";

global.localName = '';
global.password = '';
global.userId = -1;
global.firstName = '';
global.lastName = '';
global.search = '';
global.card = '';

export default class Verification extends Component {

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
					<Text style={styles.title}>Confirm Email</Text>
					<Text style={{fontSize:20}}> </Text>
					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="CODE"
							onChangeText={(val) => {this.changeLoginNameHandler(val)}}
						/>        
					</View>
					<Text style={{fontSize:10}}> </Text>

					
					<Text style={{fontSize:5}}> </Text>
					<Text style={{fontSize:15, color:'red',}}>{this.state.message}</Text>
					<Text style={{fontSize:5}}> </Text>
					<View style={styles.button}>
						<TouchableOpacity onPress={this.handleClick} style={styles.appButtonContainer}>
							<Text style={styles.appButtonText}>SUBMIT</Text>
						</TouchableOpacity>
					</View>
					<Text style={{fontSize:5}}> </Text>
				
					<Text> &nbsp; </Text>
					<Text> &nbsp; </Text>
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