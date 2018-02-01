import React, { Component } from 'react'
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import { StyleSheet, Text, View,Picker,AppRegistry, ScrollView, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import { StackNavigator, NavigationActions} from 'react-navigation';
import RootNavigator from './Router.js';
import firebase from 'firebase';

const styles =  require('./styles.js');
const ActionButton = require('./components/ActionButton');


export default class EditScheduleScreen extends Component {

  constructor(props){
    super(props)
    this.state= {Monday:{Time:'12:00',workoutType:'Chest'},Tuesday:{Time:'12:00',workoutType:'Chest'},
    Wednesday: {Time:'12:00',workoutType:'Chest'},Thursday:{Time:'12:00',workoutType:'Chest'},
    Friday:{Time:'12:00',workoutType:'Chest'},Saturday:{Time:'12:00',workoutType:'Chest'},
    Sunday:{Time:'12:00',workoutType:'Chest'}};

    this.Days =[
      { value: 'Monday '},
      { value: 'Tuesday'},
      { value: 'Wednesday'},
      { value: 'Thursday'},
      { value: 'Friday'},
      { value: 'Saturday'},
      { value: 'Sunday'},      
    ]

  }


 updateNumDays = (numDays) => {
    this.setState({numDays:numDays});
 }

 updateSchedule(){

    console.log(this.state.Monday.workoutType);
    var itemsRef = firebase.database().ref("Schedules/"+firebase.auth().currentUser.uid+"/"+this.Days[0].value).set({
      "workoutType":this.state.Monday.workoutType,
      "workoutTime":this.state.Monday.Time
    });

    var itemsRef = firebase.database().ref("Schedules/"+firebase.auth().currentUser.uid+"/"+this.Days[1].value).set({
      "workoutType":this.state.Tuesday.workoutType,
      "workoutTime":this.state.Tuesday.Time
    });

    var itemsRef = firebase.database().ref("Schedules/"+firebase.auth().currentUser.uid+"/"+this.Days[2].value).set({
      "workoutType":this.state.Wednesday.workoutType,
      "workoutTime":this.state.Wednesday.Time
    });

    var itemsRef = firebase.database().ref("Schedules/"+firebase.auth().currentUser.uid+"/"+this.Days[3].value).set({
      "workoutType":this.state.Thursday.workoutType,
      "workoutTime":this.state.Thursday.Time
    });

    var itemsRef = firebase.database().ref("Schedules/"+firebase.auth().currentUser.uid+"/"+this.Days[4].value).set({
      "workoutType":this.state.Friday.workoutType,
      "workoutTime":this.state.Friday.Time
    });

    var itemsRef = firebase.database().ref("Schedules/"+firebase.auth().currentUser.uid+"/"+this.Days[5].value).set({
      "workoutType":this.state.Saturday.workoutType,
      "workoutTime":this.state.Saturday.Time
    });

    var itemsRef = firebase.database().ref("Schedules/"+firebase.auth().currentUser.uid+"/"+this.Days[6].value).set({
      "workoutType":this.state.Sunday.workoutType,
      "workoutTime":this.state.Sunday.Time
    });

    this.props.navigation.dispatch(
      NavigationActions.reset({
          index:0,
          actions: [NavigationActions.navigate({ routeName:'Home'},firebase.auth().GetCurrentUser)]
      })
    )
 }
  render(){



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
/*
 for(var i=0;i<7; i++){
  
   var day = this.Days[i].value;

   ScheduleTable.push(
   <View style={styles.EditScheduleTable}>
      <View style={{flex:1}}>
         <Text style={styles.TextColor}>{this.Days[i].value}</Text>
      </View> 
      <View style={{flex:1}}>
         <Dropdown 
          label = 'Workout Type'
          data = {WorkoutTypes}
          onChangeText={(text) =>{var stateCopy = Object.assign({}, this.state);
                                  StateCopy.day.workoutType = {text};
                                  this.setState(stateCopy);}}
      />                    
      </View> 
      <View style={{flex:1}}>
      <DatePicker
        style={{width: 100,marginTop:30,marginLeft:20}}
        date={this.state.day.Time}
        mode="time"
        placeholder="select time"
        format=" HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minuteInterval={10}
        onDateChange={(time) => (text) =>{var stateCopy = Object.assign({}, this.state);
                                          StateCopy.day.Time = {text};
                                          this.setState(stateCopy);}}
      />
      </View>                             
   </View>
   )
  }
*/
    return (
      <ScrollView style={{backgroundColor:'#96FFFB'}}>
      <View style={styles.padding}></View>
      <View style={styles.TableBoarder}>
      <View style={styles.EditScheduleTable}>
      <View style={{flex:1}}>
         <Text style={styles.TextColor}>{this.Days[0].value}</Text>
      </View> 
      <View style={{flex:1}}>
         <Dropdown 
          label = 'Workout Type'
          data = {WorkoutTypes}
          value = {this.state.Monday.workoutType}
          onChangeText={(text) => this.setState({Monday:{... this.state.Monday, workoutType: text}})}
      />                    
      </View> 
      <View style={{flex:1}}>
      <DatePicker
        style={{width: 100,marginTop:30,marginLeft:20}}
        date={this.state.Monday.Time}
        mode="time"
        placeholder="select time"
        format=" HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minuteInterval={10}
        onDateChange={(time) => this.setState({Monday:{... this.state.Monday,Time: time}})}
      />
      </View>                             
   </View>
   <View style={styles.EditScheduleTable}>
      <View style={{flex:1}}>
         <Text style={styles.TextColor}>{this.Days[1].value}</Text>
      </View> 
      <View style={{flex:1}}>
         <Dropdown 
          label = 'Workout Type'
          data = {WorkoutTypes}
          value = {this.state.Tuesday.workoutType}
          onChangeText={(text) => this.setState({Tuesday:{... this.state.Tuesday,workoutType: text}})}
      />                    
      </View> 
      <View style={{flex:1}}>
      <DatePicker
        style={{width: 100,marginTop:30,marginLeft:20}}
        date={this.state.Tuesday.Time}
        mode="time"
        placeholder="select time"
        format=" HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minuteInterval={10}
        onDateChange={(time) => this.setState({Tuesday:{... this.state.Tuesday,Time: time}})}
      />
      </View>                             
   </View>
   <View style={styles.EditScheduleTable}>
      <View style={{flex:1}}>
         <Text style={styles.TextColor}>{this.Days[2].value}</Text>
      </View> 
      <View style={{flex:1}}>
         <Dropdown 
          label = 'Workout Type'
          data = {WorkoutTypes}
          value = {this.state.Wednesday.workoutType}
          onChangeText={(text) => this.setState({Wednesday:{... this.state.Wednesday,workoutType: text}})}
      />                    
      </View> 
      <View style={{flex:1}}>
      <DatePicker
        style={{width: 100,marginTop:30,marginLeft:20}}
        date={this.state.Wednesday.Time}
        mode="time"
        placeholder="select time"
        format=" HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minuteInterval={10}
        onDateChange={(time) => this.setState({Wednesday:{... this.state.Wednesday,Time: time}})}
      />
      </View>                             
   </View>
   <View style={styles.EditScheduleTable}>
      <View style={{flex:1}}>
         <Text style={styles.TextColor}>{this.Days[3].value}</Text>
      </View> 
      <View style={{flex:1}}>
         <Dropdown 
          label = 'Workout Type'
          data = {WorkoutTypes}
          value = {this.state.Thursday.workoutType}
          onChangeText={(text) => this.setState({Thursday:{... this.state.Thursday,workoutType: text}})}
      />                    
      </View> 
      <View style={{flex:1}}>
      <DatePicker
        style={{width: 100,marginTop:30,marginLeft:20}}
        date={this.state.Thursday.Time}
        mode="time"
        placeholder="select time"
        format=" HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minuteInterval={10}
        onDateChange={(time) => this.setState({Thursday:{... this.state.Thursday,Time: time}})}
      />
      </View>                             
   </View>
   <View style={styles.EditScheduleTable}>
      <View style={{flex:1}}>
         <Text style={styles.TextColor}>{this.Days[4].value}</Text>
      </View> 
      <View style={{flex:1}}>
         <Dropdown 
          label = 'Workout Type'
          data = {WorkoutTypes}
          value = {this.state.Friday.workoutType}
          onChangeText={(text) => this.setState({Friday:{... this.state.Friday,workoutType: text}})}
      />                    
      </View> 
      <View style={{flex:1}}>
      <DatePicker
        style={{width: 100,marginTop:30,marginLeft:20}}
        date={this.state.Friday.Time}
        mode="time"
        placeholder="select time"
        format=" HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minuteInterval={10}
        onDateChange={(time) => this.setState({Friday:{... this.state.Friday,Time: time}})}
      />
      </View>                             
   </View>
   <View style={styles.EditScheduleTable}>
      <View style={{flex:1}}>
         <Text style={styles.TextColor}>{this.Days[5].value}</Text>
      </View> 
      <View style={{flex:1}}>
         <Dropdown 
          label = 'Workout Type'
          data = {WorkoutTypes}
          value = {this.state.Saturday.workoutType}
          onChangeText={(text) => this.setState({Saturday:{... this.state.Saturday,workoutType: text}})}
      />                    
      </View> 
      <View style={{flex:1}}>
      <DatePicker
        style={{width: 100,marginTop:30,marginLeft:20}}
        date={this.state.Saturday.Time}
        mode="time"
        placeholder="select time"
        format=" HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minuteInterval={10}
        onDateChange={(time) => this.setState({Saturday:{... this.state.Saturday,Time: time}})}
      />
      </View>                             
   </View>
   <View style={styles.EditScheduleTable}>
      <View style={{flex:1}}>
         <Text style={styles.TextColor}>{this.Days[6].value}</Text>
      </View> 
      <View style={{flex:1}}>
         <Dropdown 
          label = 'Workout Type'
          data = {WorkoutTypes}
          value = {this.state.Sunday.workoutType}
          onChangeText={(text) => this.setState({Sunday:{... this.state.Sunday,workoutType: text}})}
      />                    
      </View> 
      <View style={{flex:1}}>
      <DatePicker
        style={{width: 100,marginTop:30,marginLeft:20}}
        date={this.state.Sunday.Time}
        mode="time"
        placeholder="select time"
        format=" HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minuteInterval={10}
        onDateChange={(time) => this.setState({Sunday:{... this.state.Sunday,Time: time}})}
      />
      </View>                             
   </View>
      </View>
        <ActionButton
          onPress= {()=>this.updateSchedule()}
          title="Confirm Schedule"
        />
      </ScrollView>
    )
  }
}
