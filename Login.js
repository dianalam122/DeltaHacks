import React from 'react';
import VelvetSun from './assets/VelvetSun.jpg';
import {StyleSheet, Text, View, Pressable, Alert, TextInput, ImageBackground} from 'react-native';
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
    <ImageBackground
        source={VelvetSun}
        style={styles.background}>

            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Sign into your BizFund account</Text>

            <View style={styles.inputContainer}>

                <TextInput style={styles.inputBox}
                    className={"mx-2"}
                    onChangeText={onChangeEmail}
                    placeholder="Email"
                    placeholderTextColor="#FFFFFF" 
                    textContentType={"emailAddress"}
                />
                <TextInput style={styles.inputBox}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                    placeholderTextColor="#FFFFFF" 
                    textContentType={"password"}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Pressable color='#fff'
            onPress={handleSubmission}
        >
            <Text>Login</Text>
        </Pressable>
          <Pressable onPress={() => navigation.navigate("Reset")} color='#fff'>
              <Text>Forgot Password?</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("SignUp", {isBusiness: false})} color='#fff'>
              <Text>Sign Up</Text>
          </Pressable>
            </View>
            
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        paddingBottom: 100,
    },

    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    title: {
        textAlign: 'left',
        marginStart: 30,
        marginTop: 30,
        fontSize: 60,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
  
    subtitle: {
      textAlign: 'left',
      marginStart: 30,
      marginTop: 5,
      marginBottom: 50,
      fontSize: 17,
      color: '#FFFFFF',
    },

    inputBox: {
        height: 40,
        width: '80%',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 20, 
        paddingHorizontal: 20,
        padding: 10, 
    },

    buttonContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      marginTop: 20,
      width: '40%',
      height: 40,
      alignSelf: 'center',
      borderRadius: 20,
      borderWidth: 0.5,
      borderColor: '#FFFFFF',
    },

});