import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert, TextInput} from 'react-native';
import {auth} from "./firebaseConfig";
import {signInWithEmailAndPassword} from "firebase/auth";
export const Login = ({navigation}) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const handleSubmission = async () => {
        if (email === "") {
            Alert.alert("Please enter an email");
        } else if (password === "") {
            Alert.alert("Please enter a password");
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    Alert.alert("Login successful");
                    navigation.navigate("Dashboard");

                })
                .catch((error) => {
                    const errorMessage = error.message;
                    Alert.alert(errorMessage);
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
            inputMode={"email"}
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
          <Pressable onPress={() => navigation.navigate("Reset")}>
              <Text>Forgot Password?</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("SignUp", {isBusiness: false})}>
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