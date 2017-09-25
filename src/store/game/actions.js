import * as types from './actionsTypes';

export const resetGame = () => {
    const newColorToGuess = randomColor();
    const newColors = generateRandomColors(2);
    return {
        type: types.GAME_RESET,
        payload: {newColorToGuess,newColors}
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

const generateRandomColors = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
};


// export const asyncAction = (text) => {
//     return async(dispatch, getState) => {
//         console.log(`getState() = ${getState()}`);
//         const newText = await someAsyncfunction();
//         dispatch({type: types.<ACTION_TYPE>, payload: newText})
//     }
// };