import { StackNavigator } from 'react-navigation';


const RootNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
  });

export default RootNavigator;