import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { StyleSheet, Text, View,AppRegistry, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import { StackNavigator, NavigationActions} from 'react-navigation';
import RootNavigator from './Router.js';

const styles =  require('./styles.js');

export default class ViewScheduleScreen extends Component {

  constructor(props){
    super(props)
    this.state = {time:"12:00"}
  }
 
  render(){
    return (
        <DatePicker
        style={{width: 200}}
        date={this.state.time}
        mode="time"
        placeholder="select time"
        format=" HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minuteInterval={10}
        onDateChange={(time) => {this.setState({time: time});}}
      />
    )
  }
}