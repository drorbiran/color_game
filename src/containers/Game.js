import React, { Component } from 'react';
import {View,Text,Button} from 'react-native'
import { connect } from 'react-redux';

import * as gameSelectors from '../store/game/reducer'
import * as topicsActions from '../store/game/actions'

class Game extends Component {

    componentWillMount(){
        this.props.dispatch(topicsActions.resetGame());
    } //when render

    render() {
        const {colorToGuess, colors} = this.props;
        return (
            <View>
                <Text>{colorToGuess}</Text>
                <Button
                    onPress={() => {this.props.dispatch(topicsActions.resetGame())}}
                    title ="reset"
                    color="#841584"
                />
                <Text>{colors}</Text>
            </View>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        colorToGuess: gameSelectors.getColorToGuess(state),
        colors: gameSelectors.getColors(state)
    };
}

export default connect(mapStateToProps)(Game);