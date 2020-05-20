import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome";

const ListItem = ( {item} ) => {
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            <Icon name="remove" size={20} color="firebrick" />
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',        // off-white
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',         // View is Column by default
        justifyContent: "space-between",          // remaining space between icon & text
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    }
})

export default ListItem;