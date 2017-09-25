import * as types from './actionsTypes';

export const resetGame = (color) => {
    return {
        type: types.GAME_RESET,
        payload: color
    }
};

// export const asyncAction = (text) => {
//     return async(dispatch, getState) => {
//         console.log(`getState() = ${getState()}`);
//         const newText = await someAsyncfunction();
//         dispatch({type: types.<ACTION_TYPE>, payload: newText})
//     }
// };