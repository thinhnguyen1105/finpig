/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { Component } from 'react';
import { StyleProvider, Root } from 'native-base';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { getPersistor } from '@rematch/persist';
import store, { dispatch } from '../store';
import { Provider } from 'react-redux';
import getTheme from '../native-base-theme/components';
import AppNavigator from './app-navigator';

const persistor = getPersistor();

interface Props { }
class App extends Component<Props> {
    render(): React.ReactNode {
        return (
            <StyleProvider style={getTheme()}>
                    <PersistGate persistor={persistor}>
                        <Provider store={store}>
                            <AppNavigator />
                        </Provider>
                    </PersistGate>
            </StyleProvider>
        );
    }
}

export default (App);
