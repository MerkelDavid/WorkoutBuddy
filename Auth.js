import React, {Component} from 'react';
import { StyleSheet, Text, View,AppRegistry, TextInput,Button, Image, TouchableOpacity,Alert } from 'react-native';
import RootNavigator from './Router';
import  firebase from 'firebase';
import LoginForm from './components/LoginForm.js';
import TitledInput from './components/TitledInput';
import LoadingSpinner from './components/LoadingSpinner';
import { StackNavigator,NavigationActions } from 'react-navigation';

  //including components
  const StatusBar = require('./components/StatusBar');
  const ActionButton = require('./components/ActionButton');
  const styles =  require('./styles.js')
  
class AuthScreen extends Component {
  
    constructor(props) {
        super(props);
        this.state = { email: 'TestBoy@test.com', password: 'TestBoy123!',error: '', loading:false };
        this.buttonText = {text:''};     
      }

      componentWillMount(){
        if (!firebase.apps.length) {
          firebase.initializeApp({ // Initialize Firebase
            apiKey: "AIzaSyBMDOJ2efVwI427-VGhG0VVe5-zoP2e_xo",
            authDomain: "workout-buddy-2f3d1.firebaseapp.com",
            databaseURL: "https://workout-buddy-2f3d1.firebaseio.com",
            projectId: "workout-buddy-2f3d1",
            storageBucket: "workout-buddy-2f3d1.appspot.com",
            messagingSenderId: "923628828402"
          });
      }
    
      }

    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { 
                this.setState({ error: '', loading: false });
                this.props.navigation.dispatch(
                    NavigationActions.reset({
                        index:0,
                        actions: [NavigationActions.navigate({ routeName:'Home'},firebase.auth().GetCurrentUser)]
                    })
                )
            })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
        }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <LoadingSpinner />;    
        }
        return <Button onPress={this.onLoginPress.bind(this)} title="Log in" />;
    }

    render() {
        return (          
            <View>
                    <TitledInput 
                        label='Email Address'
                        placeholder='you@domain.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TitledInput 
                        label='Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButtonOrSpinner()}
            </View>
        );
    }
}
const authStyles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default AuthScreen