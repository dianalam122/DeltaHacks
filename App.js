import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './src/Home';
import {Login} from './src/Login';
import {SignUp} from './src/SignUp';
import {Dashboard} from './src/Dashboard';
import {ResetPassword} from "./src/PassReset";
import {CreateWallet} from "./src/CreateWallet";
import {ImageBackground, StatusBar, StyleSheet} from "react-native";
import VelvetSun from "./src/assets/VelvetSun.jpg";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <ImageBackground
            source={VelvetSun}
            style={styles.background}>
            <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle="light-content"
            />
            <NavigationContainer theme={{
                colors: {
                'background': 'transparent',
            }}}>

                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                    contentStyle: {
                        backgroundImage: VelvetSun,
                        backgroundColor: 'transparent',
                        flex: 1,
                        resizeMode: 'cover',
                    },
                }}>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="SignUp" component={SignUp}/>
                    <Stack.Screen name="Reset" component={ResetPassword}/>
                    <Stack.Screen name="Dashboard" component={Dashboard}/>
                    <Stack.Screen name="CreateWallet" component={CreateWallet}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
});