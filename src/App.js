import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';

import reducers from './store/reducers';
import Game from './containers/Game'

class App extends Component {

    render() {
        const store = createStore(combineReducers(reducers),{},applyMiddleware(thunk));
        return (
            <Provider store={store}>
                <View style={{flex: 1, paddingTop: 24}}>
                    <Game/>
                </View>
            </Provider>
        )
    }
}

export default App;