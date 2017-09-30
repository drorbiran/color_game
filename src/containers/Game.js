import React, { Component } from 'react';
import {View,Text,TouchableOpacity,FlatList,TabBarIOS,Image} from 'react-native'
import { connect } from 'react-redux';

import * as gameSelectors from '../store/game/reducer'
import * as topicsActions from '../store/game/actions'
import Square from '../components/Square'
import OptionsBar from '../components/OptionsBar'

class Game extends Component {

    componentWillMount(){
        this.props.dispatch(topicsActions.resetGame(this.props.level));
    } //when render

    renderHelperImage(){
        if(this.props.level === 2) {
            return (
                <View style={{paddingBottom: 24}}>
                    <Image source={require('../res/img/rgb.png')} />
                </View>
            )
        }
    }

    render() {
        const {colorToGuess, colors, gameWin, level} = this.props;
        const bgColor = {
            backgroundColor: (gameWin)? colorToGuess : '#8F63B8'
        };
        const buttonTextColor = {
            color: (gameWin)? colorToGuess : '#8F63B8'
        };

        return (
            <View style={{flex: 1}}>

                <View style={[styles.headerStyle, bgColor]}>
                    <Text style={styles.h1}>{(gameWin)? "" : "Guess The Color"}</Text>
                    <Text style={styles.colorTextStyle}>{(gameWin)? 'Good Job' : colorToGuess.toUpperCase()}</Text>
                    <View style={{justifyContent:'center'}}>
                        <TouchableOpacity
                            style={styles.buttonContainerStyle}
                            onPress={() => {this.props.dispatch(topicsActions.resetGame(level))}}
                        >
                            <Text style={[styles.buttonTextStyle, buttonTextColor]}>{(gameWin)? "Play Again" : "New Colors"}</Text>
                        </TouchableOpacity>
                    </View>
                    <OptionsBar/>
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
                    {this.renderHelperImage()}
                </View>
            </View>
        );
    }
}

const styles = {
    headerStyle : {
        flex: 1,
        justifyContent:'space-between',
        alignItems: 'center',
        paddingTop: 24,
    },
    gridStyle : {
        flex: 3,
        alignItems: 'center'
    },
    h1 : {
        fontSize: 20,
        fontWeight: '200',
        color: '#FFFFFF',
    },
    colorTextStyle: {
        fontSize: 28,
        fontWeight: '300',
        color: "#FFFFFF",
    },
    buttonContainerStyle: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingLeft: 18,
        paddingRight: 18,
        marginTop: 6,
        marginBottom: 6,
        height: 30,
        borderRadius: 6,
        shadowColor: "#FFFFFF",
        shadowOpacity: 0.4,
        shadowRadius: 6,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },
    buttonTextStyle: {
        fontSize: 15,
        fontWeight: '400'
    }
};

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        colorToGuess: gameSelectors.getColorToGuess(state),
        colors: gameSelectors.getColors(state),
        gameWin:gameSelectors.getGameWinStatus(state),
        level: gameSelectors.getLevel(state)
    };
}

export default connect(mapStateToProps)(Game);