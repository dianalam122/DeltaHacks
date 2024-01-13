import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './Home';
import {Login} from './Login';

export default function App() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
                          name="Login"
                          component={Login}
                        />
            {/*<Stack.Screen name="Profile" component={ProfileScreen} />*/}
          </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
