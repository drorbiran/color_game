// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import * as types from './actionsTypes'
import _ from 'lodash';


const INITIAL_STATE = {
    colorToGuess: "rgb(0,0,0)",
    colors: ["rgb(0,0,0)","rgb(1,1,1)"],
    gameWin: false
};

export default function reduce(state = INITIAL_STATE, action = {}){
    switch (action.type) {
        case types.GAME_RESET:
             return {...state,colorToGuess: action.newColorToGuess, colors: action.newColors, gameWin: false};
        case types.COLOR_GUESSED:
            return {...state, gameWin: action.gameWin, colors: action.newColors};
        default:
            return state;
    }
};



//selectors
export function getColorToGuess(state) {
    return state.game.colorToGuess;
}

export function getColors(state) {
    return state.game.colors;
}

export function getGameWinStatus(state) {
    return state.game.gameWin;
}

