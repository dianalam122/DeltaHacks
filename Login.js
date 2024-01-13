import React from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
export const Login = ({navigation}) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const handleSubmission = () => {
        if (email === "") {
            Alert.alert("Please enter an email");
        } else if (password === "") {
            Alert.alert("Please enter a password");
        } else {
            navigation.navigate('Dashboard', {email: email, password: password});
        }
  };
  return (
      <>
        <TextInput
            className={"mx-2"}
            onChangeText={onChangeEmail}
            placeholder="Email"
            textContentType={"emailAddress"}
        />
        <TextInput
            onChangeText={onChangePassword}
            placeholder="Password"
            textContentType={"password"}
        />
        <Button
            title="Login"
            onPress={handleSubmission}
        />
      </>
  );
};