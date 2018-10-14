import React from 'react';
import { Animated, View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
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
import { BudgetData } from '../../store/models/budget-info/interface';
import config from '../../config';
import { Button } from 'native-base';

export interface Props extends NavigationScreenProps {
    budgetData: BudgetData
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
    _renderItem = ({ item }: { item: DataCarousel }) => {
        return (
            <View style={{ backgroundColor: '#fff', paddingVertical: 12, marginBottom: 20 }}>
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
            </View>
        )
    }

    render(): React.ReactNode {
        const { budgetData } = this.props;
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
        return (
            <BasicLayout image title="Saving">
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between', paddingHorizontal: '10%', paddingVertical: 12,
                            backgroundColor: 'rgba(207,139,170,0.5)',
                            width: '100%',
                            borderRadius: 30
                        }}>
                            <AppText style={{ color: '#fff' }}>My balance</AppText>
                            <AppText style={{ color: '#fff', fontFamily: 'iciel-bold' }}>${budgetData.balance}</AppText>
                        </View>
                        <AppText style={{ color: '#fff', paddingTop: 8 }}>Account detail 09/11/2018</AppText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingVertical: 16 }}>
                            <View>
                                <AppText style={{ color: '#fff' }}>Interest Rate</AppText>
                                <AppText style={{ color: '#fff', fontSize: 18 }}><Text style={{ color: '#fff', fontFamily: 'iciel-bold' }}>6.5%</Text> /year</AppText>
                            </View>
                            <View>
                                <AppText style={{ color: '#fff' }}>Your Interst</AppText>
                                <AppText style={{ color: '#fff', fontFamily: 'iciel-bold', fontSize: 18 }}>${budgetData.saving}</AppText>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: '5%' }}>
                            <TouchableOpacity style={{ backgroundColor: '#fff', padding: 20, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                                <Image
                                    source={require('../../../assets/my_saving_screen/wallet.png')}
                                    style={{ height: 40, width: 40 }}
                                    resizeMode="contain" />
                                <AppText style={{ fontSize: 12, paddingTop: 10 }}>Add group</AppText>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#fff', padding: 20, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                                <Image
                                    source={require('../../../assets/my_saving_screen/bag.png')}
                                    style={{ height: 40, width: 40 }} />
                                <AppText style={{ fontSize: 12, paddingTop: 10 }}>Withdraw</AppText>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#fff', padding: 20, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                                <Image
                                    source={require('../../../assets/my_saving_screen/topup.png')}
                                    style={{ height: 50, width: 50 }}
                                    resizeMode="contain" />
                                <AppText style={{ fontSize: 12 }}>Topup</AppText>
                            </TouchableOpacity>
                        </View>
                        <View style={{ backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 10, width: '100%', marginTop: 24 }}>
                            <AppText>Periodic Transfer</AppText>
                            <View style={{ ...styles.row, borderBottomColor: '#ececec', borderBottomWidth: 1 }}>
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <AppText>Periodic</AppText>
                                    <AppText style={{ fontFamily: 'iciel-bold' }}>Every month</AppText>

                                </View>
                                <View style={{ alignItems: 'center', flex: 1, borderLeftColor: '#ececec', borderLeftWidth: 1 }}>
                                    <AppText>Amount</AppText>
                                    <AppText style={{ fontFamily: 'iciel-bold' }}>$100</AppText>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <Image
                                        source={require('../../../assets/my_saving_screen/BIDV.png')}
                                        style={{ height: '80%', width: '80%' }}
                                        resizeMode="contain" />

                                </View>
                                <View style={{ alignItems: 'center', flex: 1, borderLeftColor: '#ececec', borderLeftWidth: 1 }}>
                                    <AppText>Justin Bieber</AppText>
                                    <AppText style={{ fontFamily: 'iciel-bold' }}>1231232335</AppText>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <AppText style={{ fontFamily: 'iciel-bold', paddingVertical: 16, paddingHorizontal: '12%' }}>My goals</AppText>
                            <Carousel
                                layout={'tinder'}
                                data={data}
                                renderItem={this._renderItem}
                                sliderWidth={getLayout().deviceWidth}
                                itemWidth={getLayout().deviceWidth - 70}

                            />
                        </View>

                    </View>
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={true}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: '10%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{ backgroundColor: config().primaryColor, paddingVertical: 30, paddingHorizontal: 35, borderRadius: 10 }}>
                            <AppText style={{ color: '#fff' }}>Amount</AppText>
                            <TextInput
                                style={{ paddingVertical: 12, borderBottomColor: '#fff', borderBottomWidth: 1, color: '#fff', width: 100 }}
                            />
                            <Button full style={{ marginVertical: 12, borderRadius: 5 }}>
                                <AppText style={{ color: '#fff' }}>Withdraw</AppText>
                            </Button>
                        </View>
                    </View>

                </Modal>
            </BasicLayout>
        );
    }
}
const mapState = (state: AppState) => ({
    budgetData: state.budgetData.data,
});

const mapDispatch = ({ appState }: RematchDispatch<models>) => ({
});

export default connect(mapState, mapDispatch as any)(Test1);

