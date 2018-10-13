/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { Component } from 'react';
import { StyleProvider, Spinner } from 'native-base';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { getPersistor } from '@rematch/persist';
import store, { dispatch } from '../store';
import { Provider } from 'react-redux';
import getTheme from '../native-base-theme/components';
import AppNavigator from './app-navigator';
import { Font, AppLoading } from 'expo';
import { preloadAssetsAsync } from './preload';

const persistor = getPersistor();

interface Props { }

export interface State {
    isReady: boolean;
}
class App extends Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount(): Promise<any> {
        await preloadAssetsAsync();
        setTimeout(() => this.setState({
            isReady: true
        }), 500)

    }

    render(): React.ReactNode {
        if (!this.state.isReady) {
            return (
                <AppLoading />
            )
        }
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
