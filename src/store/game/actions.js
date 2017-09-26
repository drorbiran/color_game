import * as types from './actionsTypes';
import * as gameSelectors from './reducer'
import _ from 'lodash'

export const resetGame = () => {
    const newColors = generateRandomColors(6);
    const newColorToGuess = pickColor(newColors);
    return {
        type: types.GAME_RESET, newColorToGuess, newColors
    }
};

export const guessColor = (color) => {
    console.log(color);
    return (dispatch,getState) => {
        const gameWin = (gameSelectors.getColorToGuess(getState()) === color);
        let newColors = gameSelectors.getColors(getState());
        if (!gameWin) {
            newColors = newColors.filter((currentColor) => currentColor !== color);
        }
        dispatch({type: types.COLOR_GUESSED, gameWin, newColors})
    }
};

// export const asyncAction = (text) => {
//     return async(dispatch, getState) => {
//         console.log(`getState() = ${getState()}`);
//         const newText = await someAsyncfunction();
//         dispatch({type: types.<ACTION_TYPE>, payload: newText})
//     }
// };





const generateRandomColors = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
};

const pickColor = (colors) => {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

const randomColor = () => {
    //pick a red from 0-255
    const r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    const g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
};


