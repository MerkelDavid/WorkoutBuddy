import React, {Component} from 'react';
import { StyleSheet, Text, View,AppRegistry, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import { StackNavigator, NavigationActions} from 'react-navigation';
import RootNavigator from './Router.js';
import firebase from 'firebase';

const styles =  require('./styles.js');

export class WorkoutScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {};
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth()+1; //January is 0!
      let yyyy = today.getFullYear();

      if(dd<10) {
          dd = '0'+dd
      } 

      if(mm<10) {
          mm = '0'+mm
      } 

      this.currentDate = mm + '/' + dd + '/' + yyyy;
      console.log(this.currentDate);

      this.Dotw= today.getDay();

      this.Days =[
          { value: 'Sunday'}, 
          { value: 'Monday '},
          { value: 'Tuesday'},
          { value: 'Wednesday'},
          { value: 'Thursday'},
          { value: 'Friday'},
          { value: 'Saturday'},     
        ];

      this.Dotw = this.Days[this.Dotw].value;

      let workoutType = '';
      firebase.database().ref("Schedules/"+firebase.auth().currentUser.uid+"/"+this.Dotw+"/workoutType").on('value',function(snapshot){
          console.log(snapshot.val());
          this.workoutType = snapshot.val();
      });

    }

    ComponentWillMount(){
    }
    


    render() {
        const  {navigate}  = this.props.navigation;
        return (
            <View>

            
            </View>
        )
    }
}

export default WorkoutScreen;