import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import jwt_decode from "jwt-decode";
import styles from "../Styles/Login";

let code = ''

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
					<Text style={{fontFamily: 'SemiBold15', textAlign: 'center'}}>A verification code has been sent to {global.email}, please enter it</Text>
					<Text style={{fontSize:20}}> </Text>
					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="CODE"
							onChangeText={(val) => {this.changeCodeHandler(val)}}
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
	
	handleClick = async () => {
		if (code == global.code) {
			try {
				var obj = {
					_id: global.id,
				};
				var js = JSON.stringify(obj);
				
				const response = await fetch('https://cerealboxd.herokuapp.com/api/confirmEmail', {
					method: 'POST',
					body: js,
					headers: {
						'Content-Type': 'application/json'
					}
				});
				
				var res = JSON.parse(await response.text());

				this.setState({message: res.error});
				this.props.navigation.navigate('Login');

			}
			catch(e) {
				this.setState({message: e.message});
			}
		}
		else {
			this.setState({message: "Incorrect code"});
		}
	} 
	
	changeCodeHandler = async (val) => {
		code = val;
	} 
}