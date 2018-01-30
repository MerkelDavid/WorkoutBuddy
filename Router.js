import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from "./Auth.js";  
import ProfileScreen from "./Profile.js";
import HomeScreen from "./Home.js";
import SettingsScreen from "./Settings.js";
import ScheduleMenuScreen from "./ScheduleMenu.js";
import EditScheduleScreen from "./EditSchedule.js";
import ViewScheduleScreen from "./ViewSchedule.js";

const RootNavigator = StackNavigator({
    Login: {screen: AuthScreen},
    Home: {screen: HomeScreen },
    Profile: {screen: ProfileScreen },
    Settings: {screen: SettingsScreen},
    ScheduleMenu: {screen: ScheduleMenuScreen},
    EditSchedule: {screen: EditScheduleScreen},
    ViewSchedule: {screen: ViewScheduleScreen}
  });
  
  export default RootNavigator;