import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
export const Login = ({navigation}) => {
  return (
  <>
    <Button
        title="Login"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
    </>
  );
};