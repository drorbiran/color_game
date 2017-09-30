import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as gameSelectors from '../store/game/reducer';
import * as topicsActions from '../store/game/actions';


class OptionsBar extends Component {

    selectedColor(number){
        return {
            color: (number === this.props.level)? 'white' : '#542790'
        }
    }

    render () {

        return (
            <View style={styles.optionsBarStyle}>
                <TouchableOpacity
                    onPress={() => this.props.dispatch(topicsActions.resetGame(2))}
                >
                    <Text style={this.selectedColor(2)}>EASY</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.dispatch(topicsActions.resetGame(4))}
                >
                    <Text style={this.selectedColor(4)}>MEDIUM</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.dispatch(topicsActions.resetGame(6))}
                >
                    <Text style={this.selectedColor(6)}>HARD</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = {
    optionsBarStyle : {
        height: 30,
        backgroundColor: 'rgba(255,255,255,0.1)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:'100%',
        alignItems: 'center',
    },
};

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        level: gameSelectors.getLevel(state)
    };
}

export default connect(mapStateToProps)(OptionsBar);

