import React, {Component} from 'react';
import { StyleSheet, Text, View,AppRegistry, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import { StackNavigator, NavigationActions} from 'react-navigation';
import RootNavigator from './Router.js';
import firebase from 'firebase';

const styles =  require('./styles.js');

export class ScheduleMenuScreen extends Component {

    render() {
        const  {navigate}  = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.ScheduleMenuOption}>
                <Button
                    style ={styles.homeScreenButtons}
                    onPress={()=>navigate('EditSchedule')}
                    title="Edit My Schedule"
                />
                </View>
                <View style={styles.ScheduleMenuOption}>
                <Button
                    style ={styles.homeScreenButtons}
                    onPress={()=>navigate('ViewSchedule')}
                    title="View My Schedule"
                />
                </View>
            </View>
        );
    } 
}

export default ScheduleMenuScreen