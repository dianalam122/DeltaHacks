import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
export const HomeScreen = ({navigation}) => {
  return (
  <>
    <Text>Hi</Text>
    <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
    />
    </>
  );
};