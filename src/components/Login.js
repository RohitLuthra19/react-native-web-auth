import React from 'react';
import { Redirect } from 'react-router-dom';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { AsyncStorage } from "react-native"

import Dashboard from './Dashboard';
import { AuthService } from '../App';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: '',
      redirectToReferrer: false
    };
  }

  onButtonPress = async () => {
    const userEmail = this.state.userEmail;
    const password = this.state.password;
    if (userEmail == "rohit" && password == "rohit") {
      AuthService.authenticate(() => {
        try {
          AsyncStorage.setItem('userEmail', userEmail);
          this.props.history.push('/dashboard');
        } catch (error) {
          console.log("Error Saving data.")
        }
      });
    } else {
      console.log("Wrong email and password!")
    }
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <View style={styles.page}>
        <View style={styles.container}>

          {/* <Text style={styles.heading}>Login Page</Text><br />

          <View style={styles.line} />
          <br /> */}
          <TextInput style={styles.input}
            autoCapitalize="none"
            value={this.state.userEmail}
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType='email-address'
            returnKeyType="next"
            placeholder='Email Address'
            placeholderTextColor='rgba(225,225,225,0.7)'
            autoCapitalize='none'
            onChangeText={userEmail => this.setState({ userEmail })} />

          <TextInput style={styles.input}
            returnKeyType="done"
            value={this.state.password}
            ref={(input) => this.passwordInput = input}
            placeholder='Password'
            placeholderTextColor='rgba(225,225,225,0.7)'
            onChangeText={password => this.setState({ password })}
            secureTextEntry />

          <br />
          <TouchableOpacity style={styles.buttonContainer}
            onPress={this.onButtonPress}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: '100%',
    width: '100%',
    margin: 'auto',
    backgroundColor: '#e2e1e0'//f6f7f8
  },
  container: {
    padding: 20,
    width: '40%',
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '5px',
    //boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  },
  heading: {
    color: '#2980b6',
    fontWeight: '700',
    textAlign: 'center'
  },
  line: {
    borderBottomColor: '#2980b6',
    borderBottomWidth: '3px',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});