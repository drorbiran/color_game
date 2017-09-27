import React, {Component} from 'react';
import {View,TouchableOpacity,Dimensions} from 'react-native';

const Square = ({color, onPress}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
            <View onPress={onPress} style={[styles.squareStyle, {backgroundColor: color}]}/>
        </TouchableOpacity>
    )
};

const styles = {
    containerStyle: {
        width: Dimensions.get('window').height/4.2,
        height: Dimensions.get('window').height/4.2,
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
