import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      careTakerId: '',
      jobId: '',
      type: '',
    };
  }

  onSubmit() {
    const { careTakerId, jobId, type } = this.state;
    Alert.alert('Details', `${careTakerId} + ${jobId}  + ${type}`);
  }
  onCheckIn() {
    console.log("Check-In");
  }
  onCheckOut() {
    console.log("Check-Out");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Details: </Text>
        <View style={styles.group}>
          <Text>CareTakerID: </Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.careTakerId}
          />
        </View>
        <View style={styles.group}>
          <Text>JobID: </Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.jobId}
          />
        </View>
        <View style={styles.group}>
        <Button
        title={'Check-In'}
        style={styles.button}
        onPress={() => {
          this.onCheckOut();
        }}
        />
        <Button
          title={'Check-In'}
          style={styles.button}
          onPress={() => {
            this.onCheckIn();
          }}
        />
        </View>
        <Button
          title={'Submit'}
          style={styles.button}
          onPress={() => {
            this.onSubmit();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  group: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: 40,
    margin: 5
  },
  textinput: {
    height: 20,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    width: 200,
    height: 44,
    borderWidth: 1,
    borderColor: 'black',
  },
});
