import React from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput, Pressable} from 'react-native';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./App";

export const Dashboard = ({navigation, route}) => {
    const [uid, setUid] = React.useState("");
    const [email, setEmail] = React.useState("");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            const email = user.email;
            setUid(uid);
            setEmail(email);
        } else {
            navigation.navigate("Home");
        }
    });
    return (
        <View style={styles.container}>
            <Text>{uid}</Text>
            <Text>{email}</Text>
            <Pressable onPress={() => {
                signOut(auth).then(() => {
                    navigation.navigate("Home");
                }).catch((error) => {
                    // An error happened.
                    Alert.alert(error.message);
                });
            }}>
                <Text>Sign Out</Text>
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