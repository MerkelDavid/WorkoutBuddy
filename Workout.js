import React, {Component} from 'react';
import { StyleSheet, Text,ListView, View,AppRegistry,TouchableHighlight, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import { StackNavigator, NavigationActions} from 'react-navigation';
import RootNavigator from './Router.js';
import firebase from 'firebase';
import TitledInput from './components/TitledInput';

const styles =  require('./styles.js');
const ActionButton = require('./components/ActionButton');

export class WorkoutScreen extends Component {

    constructor(props) {
      super(props);

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
          workoutType = snapshot.val();
      });

      this.state = {isReady:false,
        workout: [],
        workoutType: workoutType,
        currentSet: 1,
        UserReps: 0,
        };
    }

    componentWillMount(){

      //getting workout
        var currentWorkout = [];

        let ref = firebase.database().ref('Workouts/'+this.state.workoutType);

        firebase.database().ref('Workouts/'+this.state.workoutType).once('value').then( snapshot =>{
            snapshot.forEach((child) =>{
                child.forEach((gchild) =>{   
                    var exercise = [];

                    gchild.forEach((ggchild)=>{           
                        var item = ggchild.val();
                        exercise.push(item);
                    })

                    currentWorkout.push(exercise);
                })   
            })
            this.setState({workout: currentWorkout});
            console.log(this.state.workout[0][0]);
        })

        setTimeout(() => {
            this.setState({currentDescription: this.state.workout[0][0],
                currentName: this.state.workout[0][1],
                currentReps: this.state.workout[0][2],
                currentSets:  this.state.workout[0][3]
            })
        }, 5000);

    }

    getNextMove(){
        if(this.state.currentSet=this.state.currentSets){
            this.setState({})
        }
    }

    beginingScreen(){
        if(!this.state.isReady){
            return(
                <View>
                    <View style={styles.TableBoarder}>
                        <View style={styles.EditScheduleTable}>
                            <Text style = {styles.messageBoxTitleText}>Are you Ready?</Text>
                        </View>
                        <View style={styles.EditScheduleTable}>
                        <Button
                            style ={styles.homeScreenButtons}
                            onPress={()=>this.setState({isReady:true})}
                            title="Press to begin your workout"
                        />
                        </View>
                    </View>
                </View>
            )
        }
        else{
            return(
                <View>
                <View style={styles.TableBoarder}>
                    <View style={styles.EditScheduleTable}>
                        <Text style = {styles.HomePageTextStyle}>{this.state.currentName}</Text>
                    </View>
                    <View style={styles.EditScheduleTable}>
                        <Text style = {{fontWeight:'bold'}}>Set:</Text>
                        <Text >{this.state.currentSet}/{this.state.currentSets}</Text>
                    </View>
                    <View style={styles.EditScheduleTable}>
                        <Text style = {{fontWeight:'bold'}}>Instructions:</Text>
                    </View>
                    <View style={styles.EditScheduleTable}>
                        <Text>{this.state.currentDescription}</Text>
                    </View>
                    <View style={styles.EditScheduleTable}>
                        <TitledInput 
                            label='Repititions'
                            placeholder= {this.state.currentReps}
                            value={this.state.UserReps}
                            onChangeText={UserReps => this.setState({UserReps})}
                        />                    
                    </View>
               </View>
               <ActionButton
                    onPress= {()=>this.getNextMove()}
                    title="Confirm Information"
                 />
                </View>
            )
        }

    }

    getNextMove(){


    }


    render() {
        const  {navigate}  = this.props.navigation;
        return (
            <View style={{backgroundColor:'#96FFFB',flex:1}}>
                <View style={styles.padding}></View>
                        {this.beginingScreen()}
            </View>
        )
    }
}

export default WorkoutScreen;