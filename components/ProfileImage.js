import React from 'react';
import {Image, StyleSheet } from 'react-native';

const ProfileImage = ({ size }) => {
    return (
            <Image
                style={image[size]}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
    );
}

const image = StyleSheet.create({
    big: {
        width: 40,
        height: 40,
        backgroundColor: "#1788f0",
        borderRadius: 20,
    },
    medium: {
        width: 30,
        height: 30,
        backgroundColor: "#1788f0",
        borderRadius: 20,
    },
    small: {
        width: 20,
        height: 20,
        backgroundColor: "#1788f0",
        borderRadius: 20,
    },
});

export default ProfileImage;