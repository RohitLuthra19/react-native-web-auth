import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: '',
      show: false
    };
  }

  onButtonPress = () => {
    const m = encodeURIComponent(this.state.userEmail);
    const p = encodeURIComponent(this.state.password);
    console.log(m + p);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput style={styles.input}
          autoCapitalize="none"
          value={this.state.userEmail}
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Email Address'
          placeholderTextColor='rgba(225,225,225,0.7)' 
          onChangeText={userEmail => this.setState({ userEmail })}/>

        <TextInput style={styles.input}
          returnKeyType="go"
          value={this.state.password}
          ref={(input) => this.passwordInput = input}
          placeholder='Password'
          placeholderTextColor='rgba(225,225,225,0.7)'
          onChangeText={password => this.setState({ password })}
          secureTextEntry />

        <TouchableOpacity style={styles.buttonContainer}
          onPress={this.onButtonPress}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
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