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
import AppText from '../../../components/AppText';
import config from '../../../config';
import ScreenNames from '../../screen-names';

export interface Props extends NavigationScreenProps {
    number: number;
    updateNumber: () => void;
}
export interface State {
    pig1: number;
    pig2: number;
    pig3: number;
    pig4: number;
}

class Test1 extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            pig1: 0,
            pig2: 0,
            pig3: 0,
            pig4: 0,
        };
    }

    render(): React.ReactNode {
        return (
            <BasicLayout image >
                <View style={styles.container}>
                    <Text style={{ fontFamily: 'iciel-bold', fontSize: 28, color:'#fff' }}>PIG RACING</Text>
                    <Text style={{ fontFamily: 'iciel-regular', fontSize: 14, color:'#fff', textAlign: 'center', paddingHorizontal: '15%' }}>
                        You need to choose a pig that you believe it can win
                    </Text>
                    <View style={{ width: '100%', paddingHorizontal: '5%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: '15%' }}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../../../assets/images/pig1.png')}
                                style={styles.image}
                                resizeMode="contain" />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    style={{ height: 20, width: 20, borderRadius: 20 / 2, backgroundColor: '#f93a5e', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => this.setState({ pig1: this.state.pig1 === 0 ? 0 : this.state.pig1 - 5 })}>
                                    <Icon name="remove" style={{ fontSize: 20, color: '#fff' }} />
                                </TouchableOpacity>
                                <AppText style={{ paddingHorizontal: 12, fontSize: 20 }}>{this.state.pig1}</AppText>
                                <TouchableOpacity
                                    style={{ height: 20, width: 20, borderRadius: 20 / 2, backgroundColor: '#3a8bf9', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => this.setState({ pig1: this.state.pig1 + 5 })}>
                                    <Icon name="add" style={{ fontSize: 20, color: '#fff' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../../../assets/images/pig2.png')}
                                style={styles.image}
                                resizeMode="contain" />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    style={{ height: 20, width: 20, borderRadius: 20 / 2, backgroundColor: '#f93a5e', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => this.setState({ pig2: this.state.pig2 === 0 ? 0 : this.state.pig2 - 5 })}>
                                    <Icon name="remove" style={{ fontSize: 20, color: '#fff' }} />
                                </TouchableOpacity>
                                <AppText style={{ paddingHorizontal: 12, fontSize: 20 }}>{this.state.pig2}</AppText>
                                <TouchableOpacity
                                    style={{ height: 20, width: 20, borderRadius: 20 / 2, backgroundColor: '#3a8bf9', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => this.setState({ pig2: this.state.pig2 + 5 })}>
                                    <Icon name="add" style={{ fontSize: 20, color: '#fff' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../../../assets/images/pig3.png')}
                                style={styles.image}
                                resizeMode="contain" />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    style={{ height: 20, width: 20, borderRadius: 20 / 2, backgroundColor: '#f93a5e', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => this.setState({ pig3: this.state.pig3 === 0 ? 0 : this.state.pig3 - 5 })}>
                                    <Icon name="remove" style={{ fontSize: 20, color: '#fff' }} />
                                </TouchableOpacity>
                                <AppText style={{ paddingHorizontal: 12, fontSize: 20 }}>{this.state.pig3}</AppText>
                                <TouchableOpacity
                                    style={{ height: 20, width: 20, borderRadius: 20 / 2, backgroundColor: '#3a8bf9', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => this.setState({ pig3: this.state.pig3 + 5 })}>
                                    <Icon name="add" style={{ fontSize: 20, color: '#fff' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../../../assets/images/pig4.png')}
                                style={styles.image}
                                resizeMode="contain" />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    style={{ height: 20, width: 20, borderRadius: 20 / 2, backgroundColor: '#f93a5e', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => this.setState({ pig4: this.state.pig4 === 0 ? 0 : this.state.pig4 - 5 })}>
                                    <Icon name="remove" style={{ fontSize: 20, color: '#fff' }} />
                                </TouchableOpacity>
                                <AppText style={{ paddingHorizontal: 12, fontSize: 20 }}>{this.state.pig4}</AppText>
                                <TouchableOpacity
                                    style={{ height: 20, width: 20, borderRadius: 20 / 2, backgroundColor: '#3a8bf9', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => this.setState({ pig4: this.state.pig4 + 5 })}>
                                    <Icon name="add" style={{ fontSize: 20, color: '#fff' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate(ScreenNames.Race, {choosenPig: {
                            pig1: this.state.pig1,
                            pig2: this.state.pig2,
                            pig3: this.state.pig3,
                            pig4: this.state.pig4,
                        }})}>
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
});

export default connect(mapState, mapDispatch as any)(Test1);

