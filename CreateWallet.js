import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert, TextInput} from 'react-native';
import {db} from "./App";
import {doc, getDoc, updateDoc} from "firebase/firestore";
export const CreateWallet = ({navigation}) => {
    const [walletId, onChangeWalletId] = React.useState("");
    return (
        <View style={styles.container}>
            <TextInput
                className={"mx-2"}
                onChangeText={onChangeWalletId}
                placeholder="walletId"
            />
            <Pressable
                onPress={async () => {
                    const docRef = doc(db, "User", navigation.routes.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }

                    await updateDoc(docRef, {
                        "walletId": walletId
                    });
                    navigation.navigate("Home");
                }
                }
            >
                <Text>Enter Wallet ID</Text>
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