import React from 'react';
import { Animated, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import { AppState } from '../../store/state';
import styles from './styles';
import BasicLayout from '../../components/BasicLayout';
import ScreenNames from '../screen-names';

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
            <BasicLayout >
                <View style={styles.container}>
                    <Text style={{ fontFamily: 'iciel-bold', fontSize: 28, paddingVertical: '15%' }}>CHOOSE YOUR SAVING</Text>
                    <View style={{ width: '100%', paddingHorizontal: '5%' }}>
                        <View style={{ marginVertical: '3%', width: '100%' }}>

                            <TouchableOpacity style={{ ...styles.button, backgroundColor: '#bb457b' }}
                                onPress={() => this.props.navigation.navigate(ScreenNames.Pig)}>
                                <Text style={styles.textButton}>BANK ACCOUNT</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ marginVertical: '3%', width: '100%' }}>
                            <TouchableOpacity style={styles.button}
                                onPress={() => this.props.navigation.navigate(ScreenNames.Pig)}>
                                <Text style={styles.textButton}>PHONE ACCOUNT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </BasicLayout >
        );
    }
}
const mapState = (state: AppState) => ({
    number: state.appState.number,
});

const mapDispatch = ({ appState }: RematchDispatch<models>) => ({
    updateNumber: (value: string) => { appState.updateNumber(''); },

});

export default connect(mapState, mapDispatch as any)(Test1);

