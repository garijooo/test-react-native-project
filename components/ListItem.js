import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { PRESSED_LINK_COLOR } from '../constants/colors';
import ProfileImage from './ProfileImage';

const ListItem = ({ id, fullName, lastMsg }) => {

    return (
            <Link
                to={`/dialog/${id}`}
                activeOpacity={.7}
                underlayColor={PRESSED_LINK_COLOR}
            >
                <View style={item.container}>
                    <ProfileImage size="big" />
                    <View style={item.textSection}>
                        <Text style={textSection.fullName}>{fullName}</Text>
                        <Text style={textSection.lastMsg}>{lastMsg}</Text>
                    </View>
                </View>
            </Link>
    );
}

const item = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        backgroundColor: "#fff",
    },
    textSection: {
        marginLeft: 10,
    },
    unread: {
        backgroundColor: "#d9d9d9",
    }
});

const textSection = StyleSheet.create({
    fullName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    lastMsg: {
        fontSize: 10,
    },
});

export default ListItem;