import React, {Component} from 'react';
import { StyleSheet, Text, View,AppRegistry, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import  firebase from 'firebase';
import LoginForm from './components/LoginForm.js';

  //including components
  const StatusBar = require('./components/StatusBar');
  const ActionButton = require('./components/ActionButton');
  const styles =  require('./styles.js')

  class ProfileScreen extends Component {
    render(){
      return(
      <View style={styles.container}>
        <Text> You </Text>

      </View>
      )
    }
  }

export default ProfileScreen;