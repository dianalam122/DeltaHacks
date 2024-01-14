import React from 'react';
import VelvetSun from './assets/VelvetSun.jpg';
import {StyleSheet, Text, Pressable, ImageBackground} from 'react-native';

export const HomeScreen = ({navigation}) => {
    return (
        <ImageBackground
            source={VelvetSun}
            style={styles.background}>

            <Text style={styles.title}>BizFund.</Text>
            <Text style={styles.subtitle}>Restoring small businesses by increasing capital</Text>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Login')}>
                <Text>Login</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}
                       onPress={() => navigation.navigate("SignUp", {isBusiness: false})}>
                <Text>Sign Up</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("SignUp", {isBusiness: true})}>
                <Text>Business Sign Up</Text>
            </Pressable>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    title: {
        textAlign: 'left',
        marginStart: 30,
        marginTop: 30,
        fontSize: 60,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    subtitle: {
        textAlign: 'left',
        marginStart: 30,
        marginTop: 5,
        marginBottom: 20,
        fontSize: 17,
        color: '#FFFFFF',
    },

    button: {
        // backgroundColor: '#FFFFFF',
        padding: 10,
    },

    buttonContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        marginTop: 20,
        width: '50%',
        height: '5%',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
