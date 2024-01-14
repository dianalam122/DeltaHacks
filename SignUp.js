import React from 'react';
import {View, Pressable, Alert, TextInput, StyleSheet, Text} from 'react-native';
import {auth} from "./App";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = ({navigation}) => {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");

    const handleSubmission = async () => {
      if (name === "") {
          Alert.alert("Please enter a name");
      } else if (email === "") {
            Alert.alert("Please enter an email");
      } else if (password === "") {
            Alert.alert("Please enter a password");
      } else if (confirmPassword === "") {
            Alert.alert("Please confirm your password");
      } else if (password === confirmPassword) {
          createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  Alert.alert('Signed up successfully. Please Login.');
                  navigation.navigate('Login');
              })
              .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                    if (errorCode === 'auth/email-already-in-use') {
                        Alert.alert('Email already in use');
                    } else {
                        Alert.alert(errorMessage);
                    }
              });
    } else {
        Alert.alert("Passwords do not match");
    }
  };

  return (
      <View style={styles.container}>
        <TextInput
            onChangeText={onChangeName}
            placeholder={"Name"}
            textContentType={"name"}
        />
        <TextInput
            onChangeText={onChangeEmail}
            placeholder="Email"
            inputType={"email-address"}
            textContentType={"emailAddress"}
        />
        <TextInput
            onChangeText={onChangePassword}
            placeholder="Password"
            textContentType={"newPassword"}
        />
        <TextInput
            onChangeText={onChangeConfirmPassword}
            placeholder="Confirm Password"
            textContentType={"newPassword"}
        />
        <Pressable
            onPress={handleSubmission}
        >
            <Text>Sign Up</Text>
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