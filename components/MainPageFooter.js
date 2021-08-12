import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { ACTIVE_LINK_COLOR, MAIN_COLOR } from '../constants/colors';
import { DEFAULT_ICON_SIZE } from '../constants/iconSizes';
import Footer from './Footer';

const MainPageFooter = () => {
    return (
        <Footer>
            <View style={footer.container}>
                <IconMaterialIcons
                    color={MAIN_COLOR}
                    name="question-answer"
                    size={DEFAULT_ICON_SIZE}
                    style={footer.active}
                />
                <IconIonicons
                    color={MAIN_COLOR}
                    name="ios-file-tray-full-sharp"
                    size={DEFAULT_ICON_SIZE}
                />
                <IconFontAwesome
                    color={MAIN_COLOR}
                    name="user-circle-o"
                    size={DEFAULT_ICON_SIZE}
                />
            </View>
        </Footer>
    );
}

const footer = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        paddingHorizontal: 60,
        paddingVertical: 5,
        flexDirection: "row",
        flex:1,
    },
    active: {
        color: ACTIVE_LINK_COLOR,
    }
});

export default MainPageFooter;