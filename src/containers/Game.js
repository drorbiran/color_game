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
        const {colorToGuess, colors, gameWin} = this.props;
        console.log(typeof colors[0]);
        return (
            <View>
                <Text>{colorToGuess}</Text>
                <Text>{(gameWin)? 'not playing' : 'playing'}</Text>
                <Button
                    onPress={() => {this.props.dispatch(topicsActions.resetGame())}}
                    title ="reset"
                    color="#841584"
                />
                <Button
                    onPress={() => this.props.dispatch(topicsActions.guessColor(colors[0]))}
                    title={colors[0]}
                    color={colors[0]}
                />
                <Button
                    onPress={() => this.props.dispatch(topicsActions.guessColor(colors[1]))}
                    title={colors[1]}
                    color={colors[1]}
                />
            </View>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        colorToGuess: gameSelectors.getColorToGuess(state),
        colors: gameSelectors.getColors(state),
        gameWin:gameSelectors.getGameWinStatus(state)
    };
}

export default connect(mapStateToProps)(Game);