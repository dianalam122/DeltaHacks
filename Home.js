import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
export const HomeScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>App Name</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
              <Text>Login</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("SignUp", {isBusiness: false})}>
              <Text>Sign Up</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("SignUp", {isBusiness: true})}>
              <Text>Business Sign Up</Text>
          </Pressable>
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
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});