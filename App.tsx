
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { state } from './src/state';
import Root from './src/Root';
import * as SampleModule from './src/modules';

const store = createStore(SampleModule.reducer, state);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}