import React, {Component} from 'react';
import {View,TouchableOpacity} from 'react-native';

const Square = ({color, onPress}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
            <View onPress={onPress} style={[styles.squareStyle, {backgroundColor: color}]}/>
        </TouchableOpacity>
    )
};

styles = {
    containerStyle: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareStyle: {
        width:'80%',
        height:'80%',
        borderRadius: 12,
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 12,
        shadowOffset: {
            height: 2,
            width: 2
        }
    }
};

export default Square;
