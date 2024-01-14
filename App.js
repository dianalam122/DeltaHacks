import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './Home';
import {Login} from './Login';
import {SignUp} from './SignUp';
import {Dashboard} from './Dashboard';
import {ResetPassword} from "./PassReset";
import {CreateWallet} from "./CreateWallet";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
    <NavigationContainer>
          <Stack.Navigator screenOptions={{
                headerShown: false,
                gestureEnabled: false
          }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Reset" component={ResetPassword}/>
              <Stack.Screen name="Dashboard" component={Dashboard}/>
              <Stack.Screen name="CreateWallet" component={CreateWallet}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
}