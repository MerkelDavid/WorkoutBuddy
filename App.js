import React, {Component} from 'react';
import { StyleSheet, Text, View,AppRegistry, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import  firebase from 'firebase';
import LoginForm from './components/LoginForm.js';

  //including components
  const StatusBar = require('./components/StatusBar');
  const ActionButton = require('./components/ActionButton');
  const styles =  require('./styles.js')


export class ProfileScreen extends Component {
  render(){
    return(
    <View style={styles.container}>
      <Text> Fuck You </Text>
      <ActionButton title="Add" onpress={() => {}} />
    </View>
    )
  }
}

export class AuthScreen extends Component {
  
  componentWillMount(){
    firebase.initializeApp({ // Initialize Firebase
        apiKey: "AIzaSyBMDOJ2efVwI427-VGhG0VVe5-zoP2e_xo",
        authDomain: "workout-buddy-2f3d1.firebaseapp.com",
        databaseURL: "https://workout-buddy-2f3d1.firebaseio.com",
        projectId: "workout-buddy-2f3d1",
        storageBucket: "workout-buddy-2f3d1.appspot.com",
        messagingSenderId: "923628828402"
    });
  }
  
  render(){
    return(
    <View style={styles.container}>
      <LoginForm />
    </View>
    )
  }
}

export class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.buttonText = {text:''};
  }

  _onPressButton() {
   Alert.alert('You fuckin did it bud.');
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <View style={{flex:5,flexDirection :'row'}}>
            <View style={styles.TopLeft}>
              <Button
                style ={styles.homeScreenButtons}
                onPress={this._onPressButton}
                title="Press Me"
              />
            </View>
            <View style={styles.TopRight}>
            <Button
                style ={styles.homeScreenButtons}
                onPress={this._onPressButton}
                title="Press Me"
              />
            </View>
          </View>
          <View style={{flex:5,flexDirection :'row'}}>
            <View style={styles.BottomLeft}>
            <Button
                style ={styles.homeScreenButtons}
                onPress={this._onPressButton}
                title="Press Me"
              />
            </View>

            <View style={styles.BottomRight} >
            <Button
                style ={styles.homeScreenButtons}
                onPress={()=>navigate('Profile')}
                title="Other Screen"
              />
            </View>  
          </View>          
        </View>
    );
  } 
}

const RootNavigator = StackNavigator({
  Login: {screen: AuthScreen},
  Home: {screen: HomeScreen },
  Profile: {screen: ProfileScreen },
});

export default RootNavigator;


