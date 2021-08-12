import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const DialogList = ({ list }) => {
  return (
    <View style={dialogList.container}>
      <FlatList
        data={list}
        renderItem={({item}) =>
            <ListItem
                id={item.key}
                fullName={item.fullName}
                lastMsg={item.lastMsg}
            />
        }
      />
    </View>
  );
}

const dialogList = StyleSheet.create({
    container: {
        flex: 11,
        paddingLeft: 10,
    },
});

export default DialogList;