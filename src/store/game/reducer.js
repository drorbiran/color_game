// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import * as types from './actionsTypes'
import _ from 'lodash';


const INITIAL_STATE = {
    colorToGuess: "",
    colors: []
};

export default function reduce(state = INITIAL_STATE, action = {}){
    switch (action.type) {
        case types.GAME_RESET:
             const {newColorToGuess,newColors} = action.payload;
             return {...state,colorToGuess: newColorToGuess, colors: newColors};
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

