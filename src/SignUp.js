import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert, TextInput} from 'react-native';
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
        <View style={styles.background}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Create an account to start your journey</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputBox}
                           onChangeText={onChangeName}
                           placeholder={"Name"}
                           placeholderTextColor="#000"
                           textContentType={"name"}
                />
                <TextInput style={styles.inputBox}
                           onChangeText={onChangeEmail}
                           placeholder="Email"
                           placeholderTextColor="#000"
                           textContentType={"emailAddress"}
                />
                <TextInput style={styles.inputBox}
                           onChangeText={onChangePassword}
                           placeholder="Password"
                           placeholderTextColor="#000"
                           textContentType={"newPassword"}
                />
                <TextInput style={styles.inputBox}
                           onChangeText={onChangeConfirmPassword}
                           placeholder="Confirm Password"
                           placeholderTextColor="#000"
                           textContentType={"newPassword"}
                />
            </View>

            <Pressable
                style={styles.buttonContainer}
                onPress={handleSubmission}
            >
                <Text>Sign Up</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={{
                    color: '#EE7270',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginStart: 45,
                }}>Already have an account? Login</Text>
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        paddingBottom: 100,
    },

    inputText: {
        alignSelf: 'flex-start',
        marginStart: 50,
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
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
        color: '#000',
    },

    subtitle: {
        textAlign: 'left',
        marginStart: 30,
        marginTop: 5,
        marginBottom: 50,
        fontSize: 17,
        color: '#000',
        fontWeight: 50
    },

    inputBox: {
        height: 40,
        width: '80%',
        borderColor: '#000',
        color: '#000',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
        paddingHorizontal: 20,
        padding: 10,
    },

    buttonContainer: {
        backgroundColor: '#EE7270',
        marginStart: 45,
        width: '30%',
        height: 40,
        alignSelf: 'flex-start',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});