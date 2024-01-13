import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
export const HomeScreen = ({navigation}) => {
  return (
  <>
    <Text>Title</Text>
    <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
    />
    <Button title="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
        />
    </>
  );
};