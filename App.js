import { StyleSheet, Text, View, Button } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './Home';
import {Login} from './Login';
import {SignUp} from './SignUp';
import {Dashboard} from './Dashboard';
export default function App() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Dashboard" component={Dashboard}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
}