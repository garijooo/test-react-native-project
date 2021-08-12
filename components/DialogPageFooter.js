import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { MAIN_COLOR } from '../constants/colors';
import { DEFAULT_ICON_SIZE } from '../constants/iconSizes';
import Footer from './Footer';


const MainPageFooter = ({ onSendMessage }) => {
    const [text, setText] = useState('');

    const onPressHandler = () => {
        const date = new Date();
        onSendMessage(text, date, true);
        setText('');
    }

    return (
        <Footer>
            <View style={footer.container}>
                <TextInput
                    style={footer.input}
                    placeholder="type a message..."
                    onChangeText={(value) => setText(value)}
                    value={text}
                />
                <Icon
                    name="send"
                    size={DEFAULT_ICON_SIZE}
                    onPress={onPressHandler}
                    color={MAIN_COLOR}
                />
            </View>
        </Footer>
    );
}

const footer = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    input: {
        flex: 1,
    }
});

export default MainPageFooter;