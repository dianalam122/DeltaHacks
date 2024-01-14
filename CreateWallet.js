import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert, TextInput} from 'react-native';
import {db} from "./firebaseConfig";
import {doc, getDoc, updateDoc} from "firebase/firestore";
export const CreateWallet = ({navigation, route}) => {
    const [walletId, onChangeWalletId] = React.useState("");

    return (
        <View style={styles.container}>
            <TextInput
                className={"mx-2"}
                onChangeText={onChangeWalletId}
                placeholder="Enter Wallet ID"
            />
            <Pressable
                onPress={async () => {
                    const docRef = doc(db, "User", route.params.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                    } else {
                        // doc.data() will be undefined in this case
                        Alert.alert("No such document!");
                    }

                    await updateDoc(docRef, {
                        "walletId": walletId
                    });
                    navigation.navigate("Dashboard");
                }
                }
            >
                <Text>Submit Wallet ID</Text>
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