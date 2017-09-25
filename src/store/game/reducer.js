// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import * as types from './actionsTypes'
import _ from 'lodash';


const INITIAL_STATE = {
    colorToGuess: "#FFFFFF",
    colors: ["#FFFFFF","#000000"]
};

export default function reduce(state = INITIAL_STATE, action = {}){
    switch (action.type) {
        case types.GAME_RESET:
             return {...state,colorToGuess: action.payload};
        default:
            return state;
    }
};

//selectors
export function colorToGuess(state) {
    return state.game.colorToGuess;
}
