import React, {Component} from 'react';
import { StyleSheet, Text, View,AppRegistry, TextInput,Button, Image, TouchableHighlight,Alert } from 'react-native';
import { StackNavigator, NavigationActions} from 'react-navigation';
import RootNavigator from './Router.js';
import firebase from 'firebase';

const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const styles =  require('./styles.js');

export class HomeScreen extends Component {

    constructor(props) {
      super(props);
    }

    _onPressButton() {
     Alert.alert('You did it bud.');
    }

    render() {
      const  {navigate}  = this.props.navigation;
      return (
        <View style={styles.container}>
          <View style={{flex:5,flexDirection :'row'}}>

            <View style = {styles.TopLeft}>
              <View style = {{flex : 1 }}>
                <Text style = {styles.HomePageTextStyle} >Workout</Text>
              </View>
              <View style = {{flex: 4}}>
                <TouchableHighlight onPress = {()=>navigate('Workout')} style ={styles.homeScreenImages}>
                  <Image source={require('./assets/transparent_muscle.png')} style ={styles.homeScreenImages}/>
                </TouchableHighlight> 
              </View>
            </View>

            <View style = {styles.TopRight}>
              <View style = {{flex : 1 }}>
                <Text style = {styles.HomePageTextStyle}> Progress </Text>
              </View>
              <View style = {{flex :4}}>
                <TouchableHighlight onPress = {this._onPressButton} style ={styles.homeScreenImages}>
                  <Image source={require('./assets/transparent_clipboard.png')} style ={styles.homeScreenImages}/>
                </TouchableHighlight>
              </View>
            </View>

          </View>

          <View style={{flex:5,flexDirection :'row'}}>

          <View style = {styles.BottomLeft}>
            <View style = {{flex : 1 }}>
              <Text style = {styles.HomePageTextStyle}> Schedule </Text>
            </View>
            <View style = {{flex :4}}>
              <TouchableHighlight onPress = {() =>navigate('EditSchedule')} style ={styles.homeScreenImages}>
                <Image source={require('./assets/transparent_scale.png')} style ={styles.homeScreenImages}/>
              </TouchableHighlight>  
            </View>
          </View>

          <View style = {styles.BottomRight}>
            <View style = {{flex : 1 }}>
              <Text style = {styles.HomePageTextStyle}> Settings </Text>
            </View>
            <View style = {{flex :4}}>
              <TouchableHighlight onPress = {() =>navigate('Settings')} style={styles.homeScreenImages} >
                <Image source={require('./assets/settings.png')} style ={styles.homeScreenImages}/>
              </TouchableHighlight> 
            </View>
          </View>

          </View>          
        </View>
      );
    } 
  }

  export default HomeScreen;