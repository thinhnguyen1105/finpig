import React from 'react';
import { Animated, View, Text } from 'react-native';
import { Button } from 'native-base';
import ScreenNames from '../screen-names';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import { AppState } from '../../store/state';

export interface Props extends NavigationScreenProps {
    number: number;
    updateNumber: () => void;
}
export interface State {

}

class Test1 extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            opacity: new Animated.Value(1),
        };
    }

    render(): React.ReactNode {
        return (
            <View>
                <Text>step 1/6</Text>
                <Button onPress={() => this.props.navigation.navigate(ScreenNames.Test2)}>
                    <Text>Go to test2</Text>
                </Button>
                <Text>{this.props.number}</Text>

                <Button onPress={() => this.props.updateNumber()}>
                    <Text>Update number</Text>
                </Button>
            </View>
        );
    }
}
const mapState = (state: AppState) => ({
    number: state.appState.number,
});

const mapDispatch = ({ appState }: RematchDispatch<models>) => ({
    updateNumber: (value: string) => { appState.updateNumber('' as any); },

});

export default connect(mapState, mapDispatch as any)(Test1);

