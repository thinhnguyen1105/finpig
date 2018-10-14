import React from 'react';
import { Animated, View, Text, Image, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import { AppState } from '../../store/state';
import AppText from '../../components/AppText';
import BasicLayout from '../../components/BasicLayout';
import ScreenNames from '../screen-names';
import { Spinner } from 'native-base';
import config from '../../config';
export interface Props extends NavigationScreenProps {
    number: number;
    updateNumber: () => void;
    getGroupAsync: () => void;
    isBusy: boolean;
}
export interface State {

}

export interface DataCarousel {
    url: any;
    name: string;
    descriptrion: string;
    goals: string;
}

class Test1 extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            opacity: new Animated.Value(1),
        };
    }

    componentDidMount(): void {
        this.props.getGroupAsync();
    }
    _renderItem = ({ item }: { item: DataCarousel }) => {
        const onPress = () => {
            this.props.navigation.navigate(ScreenNames.GroupDetail);
        }
        return (
            <TouchableOpacity style={{ backgroundColor: '#fff', paddingVertical: 12, marginBottom: 20 }} onPress={onPress}>
                <Image
                    source={item.url}
                    style={{ width: '100%', height: 140 }} />
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 12 }}>
                    <View>
                        <AppText style={{ fontFamily: 'iciel-bold' }}>{item.name}</AppText>
                        <AppText>{item.descriptrion}</AppText>
                    </View>
                </View>
                <View style={
                    {
                        paddingVertical: 10,
                        paddingHorizontal: 14,
                        backgroundColor: '#fbde1b',
                        width: '50%',
                        alignItems: 'center',
                        borderRadius: 30,
                        justifyContent: 'center',
                        marginVertical: 8,
                        marginHorizontal: 16
                    }}>
                    <AppText style={{ fontFamily: 'iciel-bold', fontSize: 22, }}>{item.goals}</AppText>
                </View>
            </TouchableOpacity>
        )
    }

    render(): React.ReactNode {
        const data: DataCarousel[] = [{
            url: require('../../../assets/my_saving_screen/japan.png'),
            name: 'Japan Trip',
            descriptrion: 'Lorem ipsum',
            goals: '$100'
        }, {
            url: require('../../../assets/my_saving_screen/japan.png'),
            name: 'Japan Trip',
            descriptrion: 'Lorem ipsum',
            goals: '$100'
        }, {
            url: require('../../../assets/my_saving_screen/japan.png'),
            name: 'Japan Trip',
            descriptrion: 'Lorem ipsum',
            goals: '$100'
        }]
        if (this.props.isBusy) {
            return (<View style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Spinner color={config().primaryColor} />

            </View>)

        }
        return (
            <BasicLayout image title="Group" add>
                <View style={{
                    paddingHorizontal: '10%',
                    paddingTop: '7%'
                }}>
                    <FlatList
                        data={data}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </BasicLayout>
        );
    }
}
const mapState = (state: AppState) => ({
    isBusy: state.appState.isBusy,
});

const mapDispatch = ({ group }: RematchDispatch<models>) => ({
    getGroupAsync: () => { group.getGroupAsync('') }
});

export default connect(mapState, mapDispatch as any)(Test1);

