import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { withRouter } from 'react-router-dom';
import { AsyncStorage } from "react-native"
import { AuthService } from '../App';


export default class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (

            <View style={styles.container}>
                <Text style={styles.heading}>Sorry, this page does not exist.</Text><br />
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