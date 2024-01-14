import React from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput, Pressable} from 'react-native';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./App";
import { auth } from "./App";

export const Dashboard = ({navigation, route}) => {
    const [uid, setUid] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            const docRef = doc(db, "User", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setEmail(docSnap.data().email);
                setUid(uid);
                setName(docSnap.data().name);
            } else {
                // doc.data() will be undefined in this case
                Alert.alert("No such document!");
            }

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
            <Text>{name}</Text>
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