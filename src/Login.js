import React from 'react';
import {Text, View, Pressable, Alert, TextInput} from 'react-native';
import {auth} from "./firebaseConfig";
import {signInWithEmailAndPassword} from "firebase/auth";
import {styles} from "./PageStyles";

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
        <>
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
                    marginTop: -15,
                }} onPress={() => navigation.navigate("Reset")}>
                    <Text style={{
                        color: '#EE7270',
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}>Forgot Your Password?</Text>
                </Pressable>

                <View style={{
                    flex: 1,
                    marginTop: 20,
                    alignSelf: 'flex-start'
                }}>
                    <Pressable
                        style={styles.buttonContainer}
                        onPress={handleSubmission}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>

                    <Pressable style={styles.buttonContainer}
                               onPress={() => navigation.navigate("SignUp", {isBusiness: false})}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
};