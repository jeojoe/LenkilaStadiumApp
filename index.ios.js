/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import FBSDK, { LoginButton } from 'react-native-fbsdk'; // eslint-disable-line
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

export default class LenkilaStadiumApp extends Component {
  state = {
    isLoggedIn: false,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <View>
          <LoginButton
            publishPermissions={['publish_actions']}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  Alert.alert(`Login failed with error: ${result.error}`);
                } else if (result.isCancelled) {
                  Alert.alert('Login was cancelled');
                } else {
                  Alert.alert(`Login was successful with permissions: ${result.grantedPermissions}`);
                }
              }
            }
            onLogoutFinished={() => Alert.alert('User logged out')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('LenkilaStadiumApp', () => LenkilaStadiumApp);
