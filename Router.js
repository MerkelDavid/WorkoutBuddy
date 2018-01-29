import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from "./Auth.js";  
import ProfileScreen from "./Profile.js";
import HomeScreen from "./Home.js";

const RootNavigator = StackNavigator({
    Login: {screen: AuthScreen},
    Home: {screen: HomeScreen },
    Profile: {screen: ProfileScreen },
  });
  
  export default RootNavigator;