import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
export const HomeScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>App Name</Text>
        <Button
            title="Login"
            onPress={() => navigation.navigate('Login')}
        />
        <Button title="Sign Up"
                onPress={() => navigation.navigate("SignUp")}
        />
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});