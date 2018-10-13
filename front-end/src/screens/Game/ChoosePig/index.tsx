import React from 'react';
import { Animated, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../../store';
import { AppState } from '../../../store/state';
import { getLayout } from '../../../helpers/get-layout';
import styles from './styles';
import { Item, Input, Icon, Button, CheckBox } from 'native-base';
import BasicLayout from '../../../components/BasicLayout';
import AppText from '../../components/AppText';
import config from '../../../config';
import ScreenNames from '../../screen-names';

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
                    <Text style={{ fontFamily: 'iciel-bold', fontSize: 28, color: config().primaryColor }}>PIG RACING</Text>
                    <Text style={{ fontFamily: 'iciel-regular', fontSize: 14, color: config().primaryColor, textAlign: 'center', paddingHorizontal: '15%' }}>
                        You need to choose a pig that you believe it can win
                    </Text>
                    <View style={{ width: '100%', paddingHorizontal: '5%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: '15%' }}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../../../assets/images/pig1.png')}
                                style={styles.image}
                                resizeMode="contain" />
                            <CheckBox checked={true} style={styles.checkbox} />
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../../../assets/images/pig2.png')}
                                style={styles.image}
                                resizeMode="contain" />
                            <CheckBox checked={true} style={styles.checkbox} />

                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../../../assets/images/pig3.png')}
                                style={styles.image}
                                resizeMode="contain" />
                            <CheckBox checked={true} style={styles.checkbox} />

                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../../../assets/images/pig4.png')}
                                style={styles.image}
                                resizeMode="contain" />
                            <CheckBox checked={true} style={styles.checkbox} />

                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate(ScreenNames.Pig)}>
                        <Text style={styles.textButton}>START RACE</Text>
                    </TouchableOpacity>
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

