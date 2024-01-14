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
                .then(() => {
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
        <View style={styles.background}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Sign into your BizFund account</Text>

            <View style={styles.inputContainer}>
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
                           textContentType={"password"}
                />
                <Pressable style={{
                    alignSelf: 'flex-start',
                    marginStart: 45,
                    marginTop: -10,
                }} onPress={() => navigation.navigate("Reset")}>
                    <Text style={{
                        color: '#EE7270',
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}>Forgot Your Password?</Text>
                </Pressable>
            </View>

            <View>
                <Pressable color='#fff'
                           style={styles.buttonContainer}
                           onPress={handleSubmission}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

                <Pressable style={styles.buttonContainer}
                           onPress={() => navigation.navigate("SignUp", {isBusiness: false})}
                           color='#fff'>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
            </View>
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
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
        paddingHorizontal: 20,
        padding: 10,
    },

    buttonContainer: {
        backgroundColor: '#EE7270',
        marginTop: 20,
        marginStart: 45,
        width: '30%',
        height: 40,
        alignSelf: 'flex-start',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});