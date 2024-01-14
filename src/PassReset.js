import React from 'react';
import {Text, View, Pressable, Alert, TextInput} from 'react-native';
import {auth} from "./firebaseConfig";
import {sendPasswordResetEmail} from "firebase/auth";
import {styles} from "./PageStyles";

export const ResetPassword = ({navigation}) => {
    const [email, onChangeEmail] = React.useState("");

    return (
        <>
            <Text style={styles.title}>Reset Password</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Email</Text>
                <TextInput style={styles.inputBox}
                           onChangeText={onChangeEmail}
                           placeholder="Email"
                           textContentType={"emailAddress"}
                />
                <View style={{
                    flex: 1,
                    alignSelf: 'flex-start',
                }}>
                    <Pressable style={styles.buttonContainer} onPress={() => {
                        sendPasswordResetEmail(auth, email)
                            .then(() => {
                                // Password reset email sent!
                                Alert.alert("Password reset email sent!");
                                navigation.navigate("Login");
                            })
                            .catch((error) => {
                                const errorMessage = error.message;
                                Alert.alert(errorMessage);
                            });
                    }
                    }>
                        <Text style={styles.buttonText}>Reset Password</Text>
                    </Pressable>
                    <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.buttonText}>Back to Login</Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
};