import * as types from './actionsTypes';

export const resetGame = () => {
    const newColor = randomColor();
    return {
        type: types.GAME_RESET,
        payload: newColor
    }
};

const randomColor = () => {
    //pick a red from 0-255
    const r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    const g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}


// export const asyncAction = (text) => {
//     return async(dispatch, getState) => {
//         console.log(`getState() = ${getState()}`);
//         const newText = await someAsyncfunction();
//         dispatch({type: types.<ACTION_TYPE>, payload: newText})
//     }
// };