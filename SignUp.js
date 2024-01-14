import React from 'react';
import {View, Pressable, Alert, TextInput, StyleSheet, Text} from 'react-native';
import axios from "axios";
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
          await axios.post('/signup', {
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
              .then(r => {
                  if (r.status === 200) {
                      Alert.alert("Signed up successfully. Please Login.");
                      navigation.navigate('Login');
                  } else {
                      Alert.alert("Error signing up");
                  }
              })
              .catch(e => {
                  console.log(e);
                  if (e.status === 400) {
                      Alert.alert("Email already in use");
                  } else {
                        Alert.alert("Error signing up");
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