import React, { Component } from 'react';
import {View,Text,Button} from 'react-native'
import { connect } from 'react-redux';

import * as gameSelectors from '../store/game/reducer'
import * as topicsActions from '../store/game/actions'

class Game extends Component {

    componentWillMount(){
        // this.props.dispatch(topicsActions.resetGame("#000000"));
    } //when render

    render() {
        return (
            <View>
                <Text>{this.props.colorToGuess}</Text>
                <Button
                    onPress={() => {this.props.dispatch(topicsActions.resetGame("#000000"))}}
                    title ="reset"
                    color="#841584"
                />
            </View>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        colorToGuess: gameSelectors.colorToGuess(state)
    };
}

export default connect(mapStateToProps)(Game);