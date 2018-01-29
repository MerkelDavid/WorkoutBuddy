import React, {Component} from 'react';
import { StyleSheet, Text, View,AppRegistry, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';

const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const styles =  require('./styles.js')

export class HomeScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {text: ''};
      this.buttonText = {text:''};
    }
  
    _onPressButton() {
     Alert.alert('You did it bud.');
    }
  
    logout(){
        firebase.auth().signOut();
        Alert.alert('You did it bud.');
        ()=>navigate('Profile');
    }

    render() {
      const  {navigate}  = this.props.navigation;
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
                <Text>User Info:</Text>
                <Text>{firebase.auth().uid}</Text>
              </View>
            </View>
            <View style={{flex:5,flexDirection :'row'}}>
              <View style={styles.BottomLeft}>
              <Button
                  style ={styles.homeScreenButtons}
                  onPress={this.logout}
                  title="Log out"
                />
              </View>
  
              <View style={styles.BottomRight} >
              <Button
                  style ={styles.homeScreenButtons}
                  onPress={()=>navigate('Profile')}
                  title="Profile screen"
                />
              </View>  
            </View>          
          </View>
      );
    } 
  }

  export default HomeScreen;