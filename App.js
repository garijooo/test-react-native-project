/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View,
    ScrollView,
    Text,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import MainPage from './pages/MainPage';
import DialogPage from './pages/DialogPage';

const App = () => {
  return (
    <NativeRouter>
        <View style={app.container}>
            <Route exact path="/" component={MainPage} />
            <Route path="/dialog/:id" component={DialogPage} />
        </View>
    </NativeRouter>
  );
};
const app = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: "#fff",
    }
});

export default App;
