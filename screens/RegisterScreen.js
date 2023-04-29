import React, {Component, useState} from 'react';
import {ActivityIndicator, AppButton, View, Text, TextInput, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import styles from "../Styles/Login.js"

let fName = '';
let lName = '';
let userName = '';
let email = '';
let password = '';
let repassword = '';

export default class Register extends Component {

	constructor() {
		super()
		this.state = {
			message: ' ',
			error: ' '
		}
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Image style={styles.background} source={require("../assets/background.png")} />
				<Image style={styles.logo} source={require("../assets/trimlogo.png")} />
				<KeyboardAvoidingView style={styles.inputBox} behavior="padding" enabled>
					<Text style={{fontSize:20}}> </Text>
					<Text style={styles.title}>REGISTER</Text>
					<Text style={{fontSize:20}}> </Text>
					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="FIRST NAME"
							onChangeText={(val) => {this.changeFirstNameHandler(val)}}
						/>        
					</View>
					<Text style={{fontSize:10}}> </Text>

					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="LAST NAME"
							onChangeText={(val) => {this.changeLastNameHandler(val)}}
						/>        
					</View>
					<Text style={{fontSize:10}}> </Text>

					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="USERNAME"
							onChangeText={(val) => {this.changeUserNameHandler(val)}}
						/>        
					</View>
					<Text style={{fontSize:10}}> </Text>

					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="EMAIL"
							onChangeText={(val) => {this.changeEmailHandler(val)}}
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
					<Text style={{fontSize:10}}> </Text>

					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="RETYPE PASSWORD"
							secureTextEntry={true}
							onChangeText={(val) => {this.changeRePasswordHandler(val)}}
						/>
					</View>
					<Text style={{fontSize:5}}> </Text>
					<Text style={{fontSize:15, fontFamily: 'SemiBold15', color:'red',}}>{this.state.message}</Text>
					<Text style={{fontSize:5}}> </Text>
					<View style={styles.button}>
						<TouchableOpacity onPress={this.handleClick} style={styles.appButtonContainer}>
							<Text style={styles.appButtonText}>SIGN UP</Text>
						</TouchableOpacity>
					</View>
					<Text style={{fontSize:5}}> </Text>
					<Text style={{fontSize:15, fontFamily: 'SemiBold15', color:'red',}}>{this.state.error}</Text>
					<Text style={{fontSize:5}}> </Text>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}

	usernameTaken = async () => {
		try {
			var obj = {
				username: userName,
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

	testValidity = async () => {
		if (fName.localeCompare('') == 0) {
			this.setState({message: "Enter your first name!"});
			return false;
		}
		if (lName.localeCompare('') == 0) {
			this.setState({message: "Enter your last name!"});
			return false;
		}
		if (userName.localeCompare('') == 0) {
			this.setState({message: "Enter a username!"});
			return false;
		}
		if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
			this.setState({message: 'Enter a valid email address!'});
			return false;
		}
		if (repassword.localeCompare(password) != 0) {
			this.setState({message: "Passwords do not match!"});
			return false;
		}
		if (password.localeCompare('') == 0) {
			this.setState({message: 'Enter a password!'});
			return false;
		}
		if (await this.usernameTaken()) {
			this.setState({message: "Username taken. Choose a different one!"});
			return false;
		}
		else {
			this.setState({message: ' '});
			return true;
		}
	}

	handleClick = async () => {
		this.setState({message: ' ', error: ' '});
		if (await this.testValidity()) {
			try {
				var obj = {
					fName: fName,
					lName: lName,
					userName: userName,
					password: password,
					email: email
				};
				var js = JSON.stringify(obj);

				const response = await fetch('https://cerealboxd.herokuapp.com/api/register', {
					method: 'POST',
					body: js,
					headers: {
						'Content-Type': 'application/json'
					}
				});

				var res = JSON.parse(await response.text());
				
				this.setState({message: ' '});
				this.props.navigation.navigate('Login');
			}
			catch(e) {
				this.setState({error: e.message});
			}
		}
	}	

	changeFirstNameHandler = async (val) => {
		fName = val.trim();
	}	

	changeLastNameHandler = async (val) => {
		lName = val.trim();
	}	

	changeUserNameHandler = async (val) => {
		userName = val.trim();
	}	

	changePasswordHandler = async (val) => {
		password = val;
	}	

	changeRePasswordHandler = async (val) => {
		repassword = val;
		if (repassword.localeCompare(password) != 0) {
			this.setState({message: "Passwords do not match!"});
		}
		else {
			this.setState({message: " "});
		}
	}	

	changeEmailHandler = async (val) => {
		email = val.trim();
	} 
}