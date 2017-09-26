import React, { Component } from 'react';
import {View,Text,Button,FlatList} from 'react-native'
import { connect } from 'react-redux';

import * as gameSelectors from '../store/game/reducer'
import * as topicsActions from '../store/game/actions'
import Square from '../components/Square'

class Game extends Component {

    componentWillMount(){
        this.props.dispatch(topicsActions.resetGame());
    } //when render

    render() {
        const {colorToGuess, colors, gameWin} = this.props;
        return (
            <View>
                <Text>{colorToGuess}</Text>
                <Text>{(gameWin)? 'not playing' : 'playing'}</Text>
                <Button
                    onPress={() => {this.props.dispatch(topicsActions.resetGame())}}
                    title ={(gameWin)? "Play Again" : "New Colors"}
                    color="#841584"
                />
                <FlatList
                    data={colors}
                    renderItem = {({item}) => {
                        return (
                            <Square
                                color={item}
                                onPress={() => this.props.dispatch(topicsActions.guessColor(item))}
                            />)
                        }
                    }
                    numColumns="2"
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