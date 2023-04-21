import React, {Component, useState} from 'react';
import {ActivityIndicator, Button, View, Text, TextInput, Image, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import jwt_decode from "jwt-decode";
import styles from "../Styles/Login.js"

global.localName = '';
global.password = '';
global.repassword = '';
global.userId = -1;
global.fName = '';
global.lName = '';
global.search = '';
global.card = '';

export default class Register extends Component {

	constructor() {
		super()
		this.state = {
			message: ' '
		}
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Image style={styles.background} source={require("../assets/background.png")} />
				<Image style={styles.logo} source={require("../assets/logo.png")} />
				<KeyboardAvoidingView style={styles.inputBox} behavior="padding" enabled>
					<Text style={{fontSize:20}}> </Text>
					<Text style={styles.title}>REGISTER</Text>
					<Text style={{fontSize:20}}> </Text>
					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="First Name"
							onChangeText={(val) => {this.changeFirstNameHandler(val)}}
						/>        
					</View>
					<Text style={{fontSize:10}}> </Text>

					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="Last Name"
							onChangeText={(val) => {this.changeLastNameHandler(val)}}
						/>        
					</View>
					<Text style={{fontSize:10}}> </Text>

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
							placeholder="Email"
							onChangeText={(val) => {this.changeEmailHandler(val)}}
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
					<Text style={{fontSize:10}}> </Text>

					<View style={{flexDirection:'row'}}>
						<TextInput
							style={styles.textInput}
							placeholder="Retype Password"
							secureTextEntry={true}
							onChangeText={(val) => {this.changeRePasswordHandler(val)}}
						/>
					</View>
					<Text style={{fontSize:5}}> </Text>
					<Text style={{fontSize:15, color:'red',}}>{this.state.message}</Text>
					<Text style={{fontSize:5}}> </Text>
					<View style={styles.button}>
						<Button
							title="Sign Up"
							color="#fff"
							onPress={this.handleClick}
						/>
					</View>
					<Text style={{fontSize:25}}> </Text>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}

	goToLogin = async () =>
	{
		this.props.navigation.navigate('Login');
	}

	handleClick = async () =>
	{
		if (this.state.message.localeCompare(" ") == 0) {
			try
			{
				var obj = {
					fName: global.fName.trim(),
					lName: global.lName.trim(),
					userName: global.userName.trim(),
					password: global.password.trim(),
					email: global.email.trim()
				};
				var js = JSON.stringify(obj);

				const response = await fetch('https://cerealboxd.herokuapp.com/api/register',
					{method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

				var res = JSON.parse(await response.text());

				if( res.id <= 0 )
				{
					this.setState({message: "User/Password combination incorrect" });
				}
				else
				{
					global.userName = res.userName;
					global.password = res.password;
					global.fName = res.fName;
					global.lName = res.lName;
					global.email = res.email;
					global.userId = res.id;
					this.props.navigation.navigate('Home');
				}
			}
			catch(e)
			{
				this.setState({message: e.message });
			}
		}
	}	

	changeFirstNameHandler = async (val) =>
	{
		global.fName = val;
	}	

	changeLastNameHandler = async (val) =>
	{
		global.lName = val;
	}	

	changeUsernameHandler = async (val) =>
	{
		global.userName = val;
	}	

	changePasswordHandler = async (val) =>
	{
		global.password = val;
	}	

	changeRePasswordHandler = async (val) =>
	{
		global.repassword = val;
		if (global.repassword.localeCompare(global.password) != 0) {
			this.setState({message: "Passwords do not match!"});
		}
		else {

			this.setState({message: ' '});
		}
	}	

	changeEmailHandler = async (val) =>
	{
		global.email = val;
	} 
}