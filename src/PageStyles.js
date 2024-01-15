import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    inputText: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },
    inputContainer: {
        paddingHorizontal: 40,
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
        width: '100%',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
        paddingHorizontal: 20,
        padding: 10,
    },

    buttonContainer: {
        paddingHorizontal: 20,
        backgroundColor: '#EE7270',
        width: '100%',
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