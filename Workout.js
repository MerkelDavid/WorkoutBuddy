import React, {Component} from 'react';
import { StyleSheet, Text,ListView, View,AppRegistry,TouchableHighlight, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import { StackNavigator, NavigationActions} from 'react-navigation';
import RootNavigator from './Router.js';
import firebase from 'firebase';

const styles =  require('./styles.js');
const ActionButton = require('./components/ActionButton');

export class WorkoutScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {isReady:false,workout: []};

      //getting current date
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

      //getting Day of the weeks
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

      //getting workout type
      let workoutType = '';
      firebase.database().ref("Schedules/"+firebase.auth().currentUser.uid+"/"+this.Dotw+"/workoutType").on('value',function(snapshot){
          console.log(snapshot.val());
          this.workoutType = snapshot.val();
      });

    }

    componentWillMount(){

              //getting workout
      var currentWorkout = []
     
      firebase.database().ref('Workouts/'+this.workoutType).once('value',snapshot =>{
      snapshot.forEach(function(snapshot){
          let result= snapshot.val();
          console.log(snapshot);
          result["key"] = data.key;
          currentWorkout.push(result);
      })
      })
          
      this.setState({workout: currentWorkout})

      console.log(this.state.workout.length);

      this.state.workout.map(function(x){
        console.log(x.name);
      })

    }

    beginingScreen(){
        if(!this.state.isReady){
            return(
                <View>
                    <Text style = {styles.messageBoxTitleText}>Are you Ready?</Text>
                    <Text style={styles.messageBoxBodyText}>Press to begin your workout.</Text>
                </View>
            )
        }
        else{
            return(
                <View>
                    <Text style = {styles.messageBoxTitleText}>Wow you did it! Good job!</Text>
                </View>
            )
        }

    }


    render() {
        const  {navigate}  = this.props.navigation;
        return (
            <View Style = {styles.workoutContainer}>
            <View style= {{flex:1 ,backgroundColor:'#96FFFB'}}>
                <View style={styles.padding}></View>
                <TouchableHighlight
                onPress={() => { this.setState({isReady : 'true' });}}>
                    <View style = {styles.messageBox}>
                        {this.beginingScreen()}
                    </View>
                </TouchableHighlight>

            </View>
            </View>
        )
    }
}

export default WorkoutScreen;