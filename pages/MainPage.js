import React from 'react';
import { View } from 'react-native';
import MainPageHeader from '../components/MainPageHeader';
import DialogList from '../components/DialogList';
import MainPageFooter from '../components/MainPageFooter';
import list from '../utils/api';

const MainPage = () => {
    return (
        <>
            <MainPageHeader />
            <DialogList list={list} />
            <MainPageFooter />
        </>
    );
}

export default MainPage;