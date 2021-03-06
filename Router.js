import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from "./Auth.js";  
import ProfileScreen from "./Profile.js";
import HomeScreen from "./Home.js";
import SettingsScreen from "./Settings.js";
import EditScheduleScreen from "./EditSchedule.js";
import WorkoutScreen from "./Workout.js"

const RootNavigator = StackNavigator({
    Login: {screen: AuthScreen},
    Home: {screen: HomeScreen },
    Profile: {screen: ProfileScreen },
    Settings: {screen: SettingsScreen},
    EditSchedule: {screen: EditScheduleScreen},
    Workout: {screen: WorkoutScreen},
  });
  
  export default RootNavigator;