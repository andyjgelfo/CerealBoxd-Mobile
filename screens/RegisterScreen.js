import React, { Component, useState } from 'react';
import { ActivityIndicator, Button, View, Text, TextInput } from 'react-native';

global.localName = '';
global.password = '';
global.userId = -1;
global.fName = '';
global.lName = '';
global.search = '';
global.card = '';

export default class Homescreen extends Component {

  constructor() 
  {
    super()
    this.state = 
    {
       message: ' '
    }
  }

  render(){
    return(
      <View style={{ backgroundColor:'#00ff00', flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View style={{alignItems: 'flex-end'}}>
      <View style={{ flexDirection:'row' }}>
        <Text style={{fontSize:20}}>First Name: </Text>
        <TextInput
          style={{height: 30,fontSize:20, backgroundColor:'#ffffff'}}
          placeholder="First Name"
          onChangeText={(val) => { this.changeFirstNameHandler(val) }}
        />        
      </View>
      <Text style={{fontSize:20}}> </Text>

      <View style={{ flexDirection:'row' }}>
        <Text style={{fontSize:20}}>Last Name: </Text>
        <TextInput
          style={{height: 30,fontSize:20, backgroundColor:'#ffffff'}}
          placeholder="Last Name"
          onChangeText={(val) => { this.changeLastNameHandler(val) }}
        />        
      </View>

      <View style={{ flexDirection:'row' }}>
        <Text style={{fontSize:20}}>Username: </Text>
        <TextInput
          style={{height: 30,fontSize:20, backgroundColor:'#ffffff'}}
          placeholder="Username"
          onChangeText={(val) => { this.changeUsernameHandler(val) }}
        />        
      </View>

      <View style={{ flexDirection:'row' }}>
        <Text style={{fontSize:20}}>Password: </Text>
        <TextInput
          style={{height: 30,fontSize:20, backgroundColor:'#ffffff'}}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(val) => { this.changePasswordHandler(val) }}
        />
      </View>

      <View style={{ flexDirection:'row' }}>
        <Text style={{fontSize:20}}>Email: </Text>
        <TextInput
          style={{height: 30,fontSize:20, backgroundColor:'#ffffff'}}
          placeholder="Email"
          secureTextEntry={true}
          onChangeText={(val) => { this.changeEmailHandler(val) }}
        />
      </View>

      <Text style={{fontSize:20}}>{this.state.message} </Text>
      </View>

      

      <Button
        title="Do Register"
        onPress={this.handleClick}
      />

    <Button
        title="Back to Login"
        onPress={this.goToLogin}
      />
    </View>
    );
  }

  goToLogin = async () =>
  {
    this.props.navigation.navigate('Login');
  }

  handleClick = async () =>
  {
    try
    {
      var obj = {fName:global.fName.trim(),lName:global.lName.trim(),userName:global.userName.trim(),password:global.password.trim(),email:global.email.trim()};
      var js = JSON.stringify(obj);

      const response = await fetch('https://cerealboxd.herokuapp.com/api/register',
        {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

      var res = JSON.parse(await response.text());

      if( res.id <= 0 )
      {
        this.setState({message: "Usere/Password combination incorrect" });
      }
      else
      {
        global.userName = res.userName;
        global.password = res.password;
        global.fName = res.fName;
        global.lName = res.lName;
        global.email = res.email;
        global.userId = res.id;
        this.props.navigation.navigate('Card');
      }
    }
    catch(e)
    {
      this.setState({message: e.message });
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

  changeEmailHandler = async (val) =>
  {
    global.email = val;
  } 



}
