import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import getDateDifference from "../utils/getDateDifference";
import { DEFAULT_ICON_SIZE, EXPANDED_ICON_SIZE } from '../constants/iconSizes';
import { MAIN_COLOR } from '../constants/colors';
import ProfileImage from './ProfileImage';

const DialogPageHeader = ({ fullName, date }) => {
    return (
            <View style={header.container}>
                <View style={content.start}>
                    <Link to="/" style={header.link} activeOpacity={.1} underlayColor="transparent">
                        <IconIonicons
                            name="chevron-back-outline"
                            size={DEFAULT_ICON_SIZE}
                            color={MAIN_COLOR}
                        />
                    </Link>
                    <View style={header.section}>
                        <ProfileImage size="medium" />
                        <View style={header.textSection}>
                            <Text style={textSection.fullName}>{fullName}</Text>
                            <Text style={textSection.date}>
                                {getDateDifference(date) ? `Seen ${getDateDifference(date)} ago` : 'Is now Online'}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={content.end}>
                    <IconFontAwesome
                        name="phone"
                        size={EXPANDED_ICON_SIZE}
                        color={MAIN_COLOR}
                    />
                    <IconIonicons
                        name="md-videocam"
                        size={EXPANDED_ICON_SIZE}
                        color={MAIN_COLOR}
                    />
                </View>
            </View>
    );
}

const header = StyleSheet.create({
    container: {
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        justifyContent: "space-between",
    },
    link: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    section: {
          flexDirection: "row",
        backgroundColor: "#fff",
    },
    textSection: {
        justifyContent: "center",
        marginLeft: 5,
    },
});

const textSection = StyleSheet.create({
    fullName: {
        fontSize: 14,
        fontWeight: "bold",
    },
    date: {
        fontSize: 8,
    },
});

const content = StyleSheet.create({
    start: {
        flexDirection: "row",
        flex: 2,
    },
    end: {
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: .7,
    },
});

export default DialogPageHeader;