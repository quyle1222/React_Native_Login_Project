import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginComponents from './components/LoginComponent';
import DetailsComponents from './components/DetailsComponent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={LoginComponents}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsComponents}
          options={{headerLeft: null, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
