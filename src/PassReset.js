import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert, TextInput} from 'react-native';
import {auth} from "./firebaseConfig";
import {sendPasswordResetEmail} from "firebase/auth";

export const ResetPassword = ({navigation}) => {
    const [email, onChangeEmail] = React.useState("");

    return (
        <View style={styles.background}>
            <Text style={styles.title}>Reset Password</Text>
                <Text style={styles.inputText}>Email</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputBox}
                               onChangeText={onChangeEmail}
                               placeholder="Email"
                               textContentType={"emailAddress"}
                    />
                </View>
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
        marginBottom: 30,
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
        width: '50%',
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