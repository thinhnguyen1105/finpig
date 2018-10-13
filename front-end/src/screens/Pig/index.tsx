import React from 'react';
import { Animated, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import { AppState } from '../../store/state';
import styles from './styles';
import BasicLayout from '../../components/BasicLayout';
import AppText from '../../components/AppText';
import config from '../../config';
import ScreenNames from '../screen-names';

export interface Props extends NavigationScreenProps {
    number: number;
    updateNumber: () => void;
}
export interface State {

}

class Pig extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            opacity: new Animated.Value(1),
        };
    }

    render(): React.ReactNode {
        return (
            <BasicLayout noHeader>
                <View style={styles.container}>
                    <View style={{ backgroundColor: config().primaryColor, paddingHorizontal: 20, borderRadius: 5, paddingVertical: 20 }}>
                        <AppText style={{ flexWrap: 'wrap', textAlign: 'center', color: '#fff', fontSize: 18 }}>You haven't fed the pig yet. Give it some food!</AppText>
                        <TextInput
                            style={{
                                borderBottomColor: '#fff',
                                borderBottomWidth: 1,
                                fontSize: 24,
                                color: '#fff',
                                textAlign: 'center',
                                fontFamily: 'iciel-bold',
                                marginVertical: 20,
                                paddingBottom: 8
                            }} />
                    </View>
                    <Image
                        source={require('../../../assets/images/pig.png')}
                        style={{ width: 110, height: 200, marginBottom: '5%' }} />
                    <View style={{ width: '100%', paddingHorizontal: '5%' }}>
                        <View style={{ marginVertical: '3%', width: '100%' }}>
                            <TouchableOpacity style={{ ...styles.button, backgroundColor: '#bb457b' }}
                                onPress={() => this.props.navigation.navigate(ScreenNames.MainScreen)}>
                                <Text style={styles.textButton}>ACCEPT</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ marginVertical: '3%', width: '100%' }}>
                            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(ScreenNames.MainScreen)}>
                                <Text style={styles.textButton}>I'LL DO IT LATER</Text>
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
});

export default connect(mapState, mapDispatch as any)(Pig);

