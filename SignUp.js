import React from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
export const SignUp = ({navigation}) => {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");


    const handleSubmission = () => {
      if (name === "") {
          Alert.alert("Please enter a name");
      } else if (email === "") {
            Alert.alert("Please enter an email");
      } else if (password === "") {
            Alert.alert("Please enter a password");
      } else if (confirmPassword === "") {
            Alert.alert("Please confirm your password");
      } else if (password === confirmPassword) {
          fetch('https://localhost/signup:4000', {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  name: name,
                  email: email,
                password: password,
              }),
          })
              .then(r => r.json())
              .then(r => console.log(r));
            navigation.navigate('Login');
        } else {
        Alert.alert("Passwords do not match");
    }
  };

  return (
      <>
        <TextInput
            onChangeText={onChangeName}
            placeholder={"Name"}
            textContentType={"name"}
        />
        <TextInput
            onChangeText={onChangeEmail}
            placeholder="Email"
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

        <Button
            title="Sign Up"
            onPress={handleSubmission}
        />
      </>
  );
};