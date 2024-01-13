import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
export const SignUp = ({navigation}) => {
  return (
  <>
    <Button
        title="SignUp"
        onPress={() => navigation.navigate('Login')}
    />
    </>
  );
};