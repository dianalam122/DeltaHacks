import React from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import {onAuthStateChanged, signOut} from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "./App";

export const Dashboard = ({navigation, route}) => {
    const [uid, setUid] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [hasWallet, setHasWallet] = React.useState(false);
    const [walletId, setWalletId] = React.useState("");

    const getData = async (uid) => {
        const docRef = doc(db, "User", uid);
        return await getDoc(docRef);
    };

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            const docSnap = await getData(uid);

            if (docSnap.exists()) {
                Alert.alert("Document data:", docSnap.data());
                setHasWallet(docSnap.data().walletId !== "");
                setWalletId(docSnap.data().walletId);
                setEmail(docSnap.data().email);
                setUid(uid);
                setName(docSnap.data().name);
            } else {
                // doc.data() will be undefined in this case
                // Alert.alert("No such document!");
            }

            setUid(uid);
        } else {
            navigation.navigate("Home");
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            {hasWallet ?
                <Text>{walletId}</Text>
                :
                <Pressable onPress={() => {
                    navigation.navigate("CreateWallet", {uid: uid});
                }}>
                    <Text>Create Wallet</Text>
                </Pressable>
            }
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