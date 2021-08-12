import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Message from './Message';
import formatDate from '../utils/formatDate';
import ProfileImage from "./ProfileImage";

const Dialog = ({ messages }) => {
    return (
        <View style={dialog.container}>
            <FlatList
                data={messages}
                renderItem={
                    ({item}) => <View style={item.isMe ? me : recipient}>
                        {!item.isMe &&  <ProfileImage size="small" />}
                        <Message
                            text={item.text}
                            isMe={item.isMe}
                            date={formatDate(item.date)}
                        />
                    </View>
                }
            />
        </View>
    );
};

const dialog = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 20,
    },
    wrapper: {
        flex: 0,
    }
});

const me = StyleSheet.compose(dialog.wrapper, {
    alignItems: "flex-end",
});

const recipient = StyleSheet.compose(dialog.wrapper, {
    flexDirection: "row",
    alignItems: "flex-start",
});

export default Dialog;