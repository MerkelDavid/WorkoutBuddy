import React, { Component } from 'react'
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import { StyleSheet, Text, View,Picker,AppRegistry, ScrollView, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import { StackNavigator, NavigationActions} from 'react-navigation';
import RootNavigator from './Router.js';

const styles =  require('./styles.js');
const ActionButton = require('./components/ActionButton');


export default class EditScheduleScreen extends Component {

  constructor(props){
    super(props)
    //this.itemsRef = firebaseApp.database().ref();
    this.state = {numDays:1}
  }

 updateNumDays = (numDays) => {
    this.setState({numDays:numDays});
 }

  render(){

    let Days=[
      { value: 'Monday '},
      { value: 'Tuesday'},
      { value: 'Wednesday'},
      { value: 'Thursday'},
      { value: 'Friday'},
      { value: 'Saturday'},
      { value: 'Sunday'},      
    ]

    let WorkoutTypes=[
      { value: 'Arms'},
      { value: 'Legs'},
      { value: 'Chest'},
      { value: 'Back'},      
      { value: 'Cardio'},
      { value: 'Yoga'},
      { value: 'Rest'},
      { value: 'Custom'},      
    ]    
    var ScheduleTable = [];


    var ScheduleInstance = {dayOfTheWeek:'Monday',Time:'12:00',workoutType:'Chest'};
    ScheduleHolder = [new scheduleInstance,new scheduleInstance,new scheduleInstance,
      new scheduleInstance,new scheduleInstance,new scheduleInstance,new scheduleInstance,];

 for(let i=0;i<7; i++){
   scheduleHolder[i].dayOfTheWeek = Days[i];

   ScheduleTable.push(
   <View style={styles.EditScheduleTable}>
      <View style={{flex:1}}>
         <Text style={styles.TextColor}>{Days[i].value}</Text>
      </View> 
      <View style={{flex:1}}>
         <Dropdown 
          label = 'Workout Type'
          data = {WorkoutTypes}
          onChangeText={(text) => Schedule[i].workoutType = {text} }
      />                    
      </View> 
      <View style={{flex:1}}>
      <DatePicker
        style={{width: 100,marginTop:30,marginLeft:20}}
        date={this.state.time}
        mode="time"
        placeholder="select time"
        format=" HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minuteInterval={10}
        onDateChange={(time) => Schedule[i].Time = {time}}
      />
      </View>                             
   </View>
   )
  }

    return (
      <ScrollView style={{backgroundColor:'#96FFFB'}}>
      <View style={styles.padding}></View>
      <View style={styles.TableBoarder}>
      {ScheduleTable}
      </View>
        <ActionButton
          title="Confirm Schedule"
        />
      </ScrollView>
    )
  }
}
