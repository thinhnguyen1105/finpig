import React from 'react';
import { Animated, View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import { AppState } from '../../store/state';
import styles from './styles';
import AppText from '../../components/AppText';
import Carousel from 'react-native-snap-carousel';
import BasicLayout from '../../components/BasicLayout';
import { getLayout } from '../../helpers/get-layout';

export interface Props extends NavigationScreenProps {
    number: number;
    updateNumber: () => void;
}
export interface State {

}


class GroupDetail extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            opacity: new Animated.Value(1),
        };
    }

    render(): React.ReactNode {
        return (
            <BasicLayout image>
                <View style={styles.container}>
                    <View>
                        <Image
                            source={require('../../../assets/my_saving_screen/japan.png')}
                            style={{width: '100%', height: 140}} />
                    </View>
                </View>
            </BasicLayout>
        );
    }
}
const mapState = (state: AppState) => ({
    number: state.appState.number,
});

const mapDispatch = ({ appState }: RematchDispatch<models>) => ({
});

export default connect(mapState, mapDispatch as any)(GroupDetail);

