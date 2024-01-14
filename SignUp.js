import React from 'react';
import VelvetSun from './assets/VelvetSun.jpg';
import {StyleSheet, Text, View, Pressable, Alert, TextInput, ImageBackground} from 'react-native';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {setDoc, doc} from "firebase/firestore";
import {db, auth} from "./firebaseConfig";

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
                        await setDoc(doc(db, "User", user.uid), {
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
        <ImageBackground
            source={VelvetSun}
            style={styles.background}>

            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Create an account to start your journey</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputBox}
                           onChangeText={onChangeName}
                           placeholder={"Name"}
                           placeholderTextColor="#FFFFFF"
                           textContentType={"name"}
                />
                <TextInput style={styles.inputBox}
                           onChangeText={onChangeEmail}
                           placeholder="Email"
                           placeholderTextColor="#FFFFFF"
                           textContentType={"emailAddress"}
                />
                <TextInput style={styles.inputBox}
                           onChangeText={onChangePassword}
                           placeholder="Password"
                           placeholderTextColor="#FFFFFF"
                           textContentType={"newPassword"}
                />
                <TextInput style={styles.inputBox}
                           onChangeText={onChangeConfirmPassword}
                           placeholder="Confirm Password"
                           placeholderTextColor="#FFFFFF"
                           textContentType={"newPassword"}
                />
            </View>

            <Pressable
                style={styles.buttonContainer}
                onPress={handleSubmission}
            >
                <Text>Sign Up</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}
                       onPress={() => navigation.navigate('Login')}
            >
                <Text>Login</Text>
            </Pressable>
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
        marginBottom: 30,
        fontSize: 17,
        color: '#FFFFFF',
    },

    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',

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
        justifyContent: 'center',
        alignItems: 'center',
    },
});