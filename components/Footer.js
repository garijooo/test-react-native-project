import React from 'react';
import { View, StyleSheet } from 'react-native';

const Footer = ({ children }) => {
    return (
        <View style={footer.container}>
            {children}
        </View>
    );
}

const footer = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: "center",
        flex: 0,
        flexDirection: "row",
        backgroundColor: "#f0f2f5",
    },
});

export default Footer;