import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../constants/colors';

const Header = () => {
    return (
        <View style={header.container}>
            <Text style={header.title}>Messages</Text>
        </View>
    );
};

const header = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default Header;