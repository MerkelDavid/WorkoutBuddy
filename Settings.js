import React, {Component} from 'react';
import { StyleSheet, Text, View,AppRegistry, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import { StackNavigator, NavigationActions} from 'react-navigation';
import RootNavigator from './Router.js';
import firebase from 'firebase';

const styles =  require('./styles.js');
const ActionButton = require('./components/ActionButton');

export class SettingsScreen extends Component {

    logout(navigate){
        firebase.auth().signOut();
        this.props.navigation.dispatch(
            NavigationActions.reset({
                index:0,
                actions: [NavigationActions.navigate({ routeName:"Login"})]
            })
        ) 
    }

    render() {
        const  {navigate}  = this.props.navigation;
        return (
            <View style={styles.container}>
                <ActionButton
                    onPress= {()=>this.logout(navigate)}
                    title="Log out"
                />
            </View>
        );
    } 
}

export default SettingsScreen