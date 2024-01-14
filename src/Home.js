import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

export const HomeScreen = ({navigation}) => {
    return (
        <>
            <Text style={styles.title}>BizFund.</Text>
            <Text style={styles.subtitle}>Restoring small businesses by increasing capital</Text>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}
                       onPress={() => navigation.navigate("SignUp", {isBusiness: false})}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("SignUp", {isBusiness: true})}>
                <Text style={styles.buttonText}>Business Sign Up</Text>
            </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'left',
        marginStart: 30,
        marginTop: 100,
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
    buttonContainer: {
        backgroundColor: '#fff',
        marginBottom: 20,
        width: '70%',
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    }

});
