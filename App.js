import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './Home';
import {Login} from './Login';
import {SignUp} from './SignUp';
import {Dashboard} from './Dashboard';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {ResetPassword} from "./PassReset";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDm0NHKWOXH3RwVnQb1-gupBqCyjvlroqo",
    authDomain: "deltahacks-x-ac810.firebaseapp.com",
    projectId: "deltahacks-x-ac810",
    storageBucket: "deltahacks-x-ac810.appspot.com",
    messagingSenderId: "554149153194",
    appId: "1:554149153194:web:af1743fd509916fdd943d3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
    <NavigationContainer>
          <Stack.Navigator screenOptions={{
                headerShown: false
          }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Reset" component={ResetPassword}/>
              <Stack.Screen name="Dashboard" component={Dashboard}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
}