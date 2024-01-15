import React from 'react';
import {Text, View, Pressable, Alert, TextInput} from 'react-native';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {setDoc, doc} from "firebase/firestore";
import {db, auth} from "./firebaseConfig";
import {styles} from "./PageStyles";

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
        <>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Create an account to start your journey</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Name</Text>
                <TextInput style={styles.inputBox}
                           onChangeText={onChangeName}
                           placeholder={"Name"}
                           placeholderTextColor="#000"
                           textContentType={"name"}
                />
                <Text style={styles.inputText}>Email</Text>
                <TextInput style={styles.inputBox}
                           onChangeText={onChangeEmail}
                           placeholder="Email"
                           placeholderTextColor="#000"
                           textContentType={"emailAddress"}
                />
                <Text style={styles.inputText}>Password</Text>
                <TextInput style={styles.inputBox}
                           onChangeText={onChangePassword}
                           placeholder="Password"
                           placeholderTextColor="#000"
                           textContentType={"newPassword"}
                />
                <Text style={styles.inputText}>Confirm Password</Text>
                <TextInput style={styles.inputBox}
                           onChangeText={onChangeConfirmPassword}
                           placeholder="Confirm Password"
                           placeholderTextColor="#000"
                           textContentType={"newPassword"}
                />
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={{
                        color: '#EE7270',
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginTop: -15,
                        marginBottom: 20
                    }}>Already have an account? Login</Text>
                </Pressable>
                <Pressable
                    style={styles.buttonContainer}
                    onPress={handleSubmission}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
            </View>
        </>
    );
};