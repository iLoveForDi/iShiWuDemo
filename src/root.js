import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,

} from 'react-native';

const { Provider } = require('react-redux');

import configureStore from './store/index'
import App from './pages/App'

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>

        )
    }
}
