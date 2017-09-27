import React, { Component } from 'react';
import {View,Text,TouchableOpacity,FlatList} from 'react-native'
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
            <View style={{flex: 1}}>
                <View style={styles.headerStyle}>
                    <Text style={styles.h1}>Guess The Color</Text>
                    <Text style={styles.colorTextStyle}>{colorToGuess}</Text>
                    <View style={{justifyContent:'center'}}>
                        <TouchableOpacity
                            style={styles.buttonContainerStyle}
                            onPress={() => {this.props.dispatch(topicsActions.resetGame())}}
                        >
                            <Text style={styles.buttonTextStyle}>{(gameWin)? "Play Again" : "New Colors"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.gridStyle}>
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
            </View>
        );
    }
}

const styles = {
    headerStyle : {
        flex: 1,
        justifyContent:'space-around',
        backgroundColor: '#F2F4F5',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 12
    },
    gridStyle : {
        flex: 3,
        alignItems: 'center'
    },
    h1 : {
        fontSize: 28,
        fontWeight: '300',
        color: '#8F63B8',
    },
    colorTextStyle: {
        fontSize: 36,
        fontWeight: '200',
    },
    buttonContainerStyle: {
        backgroundColor: '#8F63B8',
        justifyContent: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 24,
        paddingRight: 24,
        height: 36,
        borderRadius: 6,
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 12,
        shadowOffset: {
            height: 2,
            width: 2
        }
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '300'
    }
};

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        colorToGuess: gameSelectors.getColorToGuess(state),
        colors: gameSelectors.getColors(state),
        gameWin:gameSelectors.getGameWinStatus(state)
    };
}

export default connect(mapStateToProps)(Game);