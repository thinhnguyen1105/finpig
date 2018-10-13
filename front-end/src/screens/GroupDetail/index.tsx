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
            <BasicLayout image title= " Japan - Hokaldo">
                <View style={styles.container}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <AppText style={{ fontFamily: 'iciel-bold', fontSize: 22, color: '#fff' }}>
                            Japan - Hokaldo
                        </AppText> */}
                        <AppText style={{ color: '#fff', fontSize: 20, paddingTop: 30 }}>
                            Goal: $100.00
                        </AppText>

                        <Image
                            source={require('../../../assets/my_saving_screen/japan.png')}
                            style={{ width: '100%', height: 160 }}
                            resizeMode="contain" />
                        <AppText style={{}}>From 1/1/2017 - 2/2/2018</AppText>
                    </View>
                    <View style={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        width: '100%',
                        marginTop: 24,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <AppText style={{ fontSize: 20, fontFamily: 'iciel-bold' }}>Group Detail</AppText>
                        <AppText>Members</AppText>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: 1 }}>
                            <Image
                                source={require('../../../assets/my_saving_screen/avatar1.png')}
                                style={{ flex: 1 }} />
                            <Image
                                source={require('../../../assets/my_saving_screen/avatar2.png')}
                                style={{ flex: 1 }} />
                            <Image
                                source={require('../../../assets/my_saving_screen/avatar3.png')}
                                style={{ flex: 1 }} />
                        </View>
                        <AppText style={{ paddingVertical: 20 }}>Lorel iposau asirx</AppText>

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

