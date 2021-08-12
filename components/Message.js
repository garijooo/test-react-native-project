import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../constants/colors';

const Message = ({ text: messageText, date: messageDate, isMe }) => {
    return (
        <View style={isMe ? me : recipient}>
            <Text style={isMe ? text.me : text.recipient}>{messageText}</Text>
            <Text style={isMe ? date.me : date.recipient}>{messageDate}</Text>
        </View>
    );
};

const message = StyleSheet.create({
    container: {
        borderRadius: 8,
        marginBottom: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    me: {
        backgroundColor: MAIN_COLOR,
        borderTopRightRadius: 0,
        alignItems: "flex-end",
        minWidth : 240,
        marginRight: 20,
    },
    recipient: {
        backgroundColor: "#e4e4e4",
        borderTopLeftRadius: 0,
        minWidth : 220,
        marginLeft: 10,
    },
});

const me = StyleSheet.compose(message.container, message.me);
const recipient = StyleSheet.compose(message.container, message.recipient);
const text = StyleSheet.create({
    me: {
        color: "#fff",
    },
    recipient: {
        color: "#000",
    }
});
const date = StyleSheet.create({
    me: {
        color: "#fff",
        fontSize: 8,
    },
    recipient: {
        color: "#000",
        fontSize: 8,
    },
});

export default Message;