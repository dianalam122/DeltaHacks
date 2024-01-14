import React from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import { onAuthStateChanged } from "firebase/auth";
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
        <>
            <Text>{uid}</Text>
            <Text>{email}</Text>
        </>
    );
};