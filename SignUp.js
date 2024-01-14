import React from 'react';
import {View, Pressable, Alert, TextInput, StyleSheet, Text} from 'react-native';
import {auth} from "./App";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from "./App";

export const SignUp = ({navigation, route}) => {
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
              .then(async (userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  Alert.alert('Signed up successfully. Please Login.');
                  try {
                      const docRef = await setDoc(doc(db, "User", user.uid), {
                          name: name,
                          email: email,
                          isBusiness: route.params.isBusiness,
                          walletId: ""
                      });
                  } catch (e) {
                      Alert.alert("Error adding document: ", e);
                  }

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
          <TextInput inputMode={"text"} placeholder="Name" onChangeText={onChangeName}
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
          <Pressable
              onPress={() => navigation.navigate('Login')}
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