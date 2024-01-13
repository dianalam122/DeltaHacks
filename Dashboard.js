import React from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
export const Dashboard = ({navigation, route}) => {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    return (
        <>
            <Text>{route.params.email}</Text>
        </>
    );
};