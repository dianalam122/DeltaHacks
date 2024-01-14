import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert, TextInput} from 'react-native';
import axios from "axios";
export const Login = ({navigation}) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const handleSubmission = async () => {
        if (email === "") {
            Alert.alert("Please enter an email");
        } else if (password === "") {
            Alert.alert("Please enter a password");
        } else {
            await axios.post('http://localhost:3000/login', {
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            })
                .then((json) => {
                    if (json.status === 400) {
                        Alert.alert("Username or password is incorrect");
                    } else if (json.status === 200) {
                        Alert.alert("Login successful");
                        navigation.navigate('Dashboard', {email: email, name: json.data.name});
                    } else {
                        Alert.alert('Something went wrong');
                    }
                })
                .catch((error) => {
                    console.error(error);
                });

        }
  };
  return (
      <View style={styles.container}>
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
        <Pressable
            onPress={handleSubmission}
        >
            <Text>Login</Text>
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