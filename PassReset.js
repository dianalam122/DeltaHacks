import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert, TextInput} from 'react-native';
import {auth} from "./firebaseConfig";
import {sendPasswordResetEmail} from "firebase/auth";
export const ResetPassword = ({navigation}) => {
    const [email, onChangeEmail] = React.useState("");

    return (
        <View style={styles.container}>
            <TextInput
                className={"mx-2"}
                onChangeText={onChangeEmail}
                placeholder="Email"
                textContentType={"emailAddress"}
            />
            <Pressable onPress={() => {
                sendPasswordResetEmail(auth, email)
                    .then(() => {
                        // Password reset email sent!
                        Alert.alert("Password reset email sent!");
                        navigation.navigate("Login");
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        Alert.alert(errorMessage);
                    });
            }
            }>
                <Text>Reset Password</Text>
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