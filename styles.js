import React from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    item: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: "center"
    },
    text: {
        fontSize: 18
    },
    input: {
        borderColor: "#C8D3F9",
        paddingLeft: 30,
        borderWidth: 2,
        borderRadius: 25
    },
    buttonLogin: {
        borderWidth: 2,
        borderColor: "#C8D3F9",
        width: 200,
        marginTop: 20,
        height: 50,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: '#8699DA'
    },
    imageLogin: {
        alignSelf: "center",
        height: 200,
        width: 200,
        margin: 20
    }
});
export default styles;