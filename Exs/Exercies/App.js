/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.number_into} >
            <Text style={styles.text}> 1 </Text>
          </View>
          <View style={styles.number_into} >
            <Text> 2 </Text>
          </View>
          <View style={styles.number_into} >
            <Text> 3 </Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.number_into} >
            <Text> 4 </Text>
          </View>
          <View style={styles.number_into} >
            <Text> 5 </Text>
          </View>
          <View style={styles.number_into} >
            <Text> 6 </Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.number_into} >
            <Text> 7 </Text>
          </View>
          <View style={styles.number_into} >
            <Text> 8 </Text>
          </View>
          <View style={styles.number_into} >
            <Text> 9 </Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.number_into} >
            <Text> Back </Text>
          </View>
          <View style={styles.number_into} >
            <Text> 0 </Text>
          </View>
          <View style={styles.number_into} >
            <Text> Clear </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100,
    paddingBottom: 50,
    flexDirection: "column",
  },

  text: {
     
    

  },
  number_into: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'gray',
  },
  column: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: "row",
    marginBottom: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
