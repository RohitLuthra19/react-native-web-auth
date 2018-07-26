import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { withRouter } from 'react-router-dom';
import { AsyncStorage } from "react-native"
import { AuthService } from '../App';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        console.log("Dashboard");
        this.state = {
            userEmail: '',
        };
    }

    componentDidMount() {
        this._retrieveData();
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('userEmail');

            if (value !== null) {
                this.setState({
                    userEmail: value
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    _removeData = async () => {
        try {
            await AsyncStorage.removeItem('userEmail');
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.heading}>Welcome {this.state.userEmail} to Dashboard Page!</Text><br />

                <button onClick={() => {
                    this._removeData();
                    this.props.history.push("/");
                }}>Sign out</button>
            </View>

        );
    }
}

export default Dashboard;

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