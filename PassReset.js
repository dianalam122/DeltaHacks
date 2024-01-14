import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert, TextInput, ImageBackground} from 'react-native';
import {auth} from "./firebaseConfig";
import {sendPasswordResetEmail} from "firebase/auth";
import VelvetSun from "./assets/VelvetSun.jpg";

export const ResetPassword = ({navigation}) => {
    const [email, onChangeEmail] = React.useState("");

    return (
        <ImageBackground
            source={VelvetSun}
            style={styles.background}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputBox}
                           className={"mx-2"}
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
                <Text>Reset Password</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },

});