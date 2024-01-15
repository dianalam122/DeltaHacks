import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './src/Home';
import {Login} from './src/Login';
import {SignUp} from './src/SignUp';
import {Dashboard} from './src/Dashboard';
import {ResetPassword} from "./src/PassReset";
import {CreateWallet} from "./src/CreateWallet";
import {StatusBar, StyleSheet} from "react-native";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle="light-content"
            />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                    contentStyle: styles.background,
                }}>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="SignUp" component={SignUp}/>
                    <Stack.Screen name="Reset" component={ResetPassword}/>
                    <Stack.Screen name="Dashboard" component={Dashboard}/>
                    <Stack.Screen name="CreateWallet" component={CreateWallet}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});