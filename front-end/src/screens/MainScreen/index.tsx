import React from 'react';
import { Animated, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import { AppState } from '../../store/state';
import { getLayout } from '../../helpers/get-layout';
import styles from './styles';
import AppText from '../../components/AppText';
import ScreenNames from '../screen-names';
import BasicLayout from '../../components/BasicLayout';
import { UserState } from '../../store/models/user-profile/interface';

export interface Props extends NavigationScreenProps {
    number: number;
    updateNumber: () => void;
    userProfile: UserState;
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
        const { userProfile } = this.props;
        return (
            <BasicLayout image noHeader>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center', marginBottom: 12 }}>
                        <View></View>
<<<<<<< HEAD
                        <AppText style={{ color: '#fff', fontSize: 24, fontFamily: 'iciel-bold' }}>{userProfile.name}</AppText>
                        <AppText style={{ color: '#fff', }}>@Lorem</AppText>
=======
                        <AppText style={{ color: '#fff', fontSize: 24, fontFamily: 'iciel-bold' }}>Lorem</AppText>
                        <View>
                            <AppText style={{ color: '#fff', }}>@Lorem</AppText>
                        </View>

>>>>>>> 9d4e646619cb81acc9c379f8e7346b30edd5aaf0
                    </View>
                    <View style={{ backgroundColor: '#fff', width: getLayout().deviceWidth - 50, paddingVertical: 12, borderRadius: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%', paddingBottom: 12, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
                            <AppText>My balance</AppText>
                            <AppText>$10.000</AppText>
                        </View>
                        <View style={{ flexWrap: 'wrap', paddingHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: '5%', paddingBottom: '10%' }}>
                            <TouchableOpacity style={{ paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => this.props.navigation.navigate(ScreenNames.Spending)}>
                                <View style={styles.button}>
                                    <Image
                                        source={require('../../../assets/main_screen/button_main1.png')}
                                        style={{ width: 50, height: 50, }}
                                        resizeMode="contain" />
                                </View>

                                <AppText>Spending</AppText>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => this.props.navigation.navigate(ScreenNames.Saving)}>
                                <View style={styles.button}>
                                    <Image
                                        source={require('../../../assets/main_screen/button_main2.png')}
                                        style={{ width: 50, height: 50, }}
                                        resizeMode="contain" />
                                </View>

                                <AppText>Saving</AppText>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => this.props.navigation.navigate(ScreenNames.Group)}>
                                <View style={styles.button}>
                                    <Image
                                        source={require('../../../assets/main_screen/button_main3.png')}
                                        style={{ width: 50, height: 50, }}
                                        resizeMode="contain" />
                                </View>

                                <AppText>Group</AppText>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => this.props.navigation.navigate(ScreenNames.ChoosePig)}>
                                <View style={styles.button}>
                                    <Image
                                        source={require('../../../assets/main_screen/button_main4.png')}
                                        style={{ width: 50, height: 50, }}
                                        resizeMode="contain" />
                                </View>

                                <AppText>Game</AppText>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ position: 'absolute', bottom: 90, }}>
                        <Image
                            source={require('../../../assets/main_screen/pig.png')}
                            style={{ height: 170, width: 100, }}
                            resizeMode="contain" />
                        <View style={{ bottom: -15 }}>
                            <View style={{ backgroundColor: '#19fa73', height: 5, width: '40%', zIndex: 2, position: 'absolute' }}></View>
                            <View style={{ backgroundColor: 'green', height: 5, width: '100%', zIndex: -1, top: 0, position: 'absolute' }}></View>
                        </View>
                        <Text style={{ bottom: -25, alignSelf: 'center' }}>Level: 20</Text>
                    </View>

                </View>
            </BasicLayout >
        );
    }
}
const mapState = (state: AppState) => ({
    userProfile: state.userProfile,
});

const mapDispatch = ({ appState }: RematchDispatch<models>) => ({
});

export default connect(mapState, mapDispatch as any)(Test1);

