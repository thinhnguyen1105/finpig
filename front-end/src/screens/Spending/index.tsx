import React from 'react';
import { Animated, View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import { AppState } from '../../store/state';
import styles from './styles';
import { LinearGradient } from 'expo';
import BasicLayout from '../../components/BasicLayout';
import { getLayout } from '../../helpers/get-layout';
import AppText from '../../components/AppText';
import { Button, Icon } from 'native-base'

export interface Props extends NavigationScreenProps {
    number: number;
    updateNumber: () => void;
}
export interface State {

}

export interface CardTypeColor {
    [id: string]: {
        startColor: string;
        endColor: string;
    }
}

export interface DataCard {
    name: string;
    totalValue: string;
    savingValue: string;
    validPeriod: string;
    type: string;
}

export interface SpedingCard {
    name: string;
    expiryDate: string;
    type: string;
}

const cardTypeColor: CardTypeColor = {
    gold: {
        startColor: '#fca912',
        endColor: '#f5f125'
    },
    silver: {
        startColor: '#5b5b5b',
        endColor: '#e3e3e3'
    },
    diamond: {
        startColor: '#0c76f0',
        endColor: '#80ade3'
    }
}

class Test1 extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }
    renderDataCard = ({ item }: { item: DataCard }) => {
        return (
            <View style={{ marginHorizontal: 12, borderTopEndRadius: 5,borderTopStartRadius: 5 }}>
                <LinearGradient
                    colors={[cardTypeColor[item.type].startColor, cardTypeColor[item.type].endColor]}
                    style={{ height: getLayout().deviceHeight / 2.5, width: getLayout().deviceWidth / 1.5, borderTopEndRadius: 5,borderTopStartRadius: 5 }}>
                    <View style={{ borderBottomColor: '#fff', borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <AppText style={{ paddingVertical: 16, color: '#fff', fontSize: 22, fontFamily: 'iciel-bold' }}>{item.name}</AppText>

                    </View>
                    <View style={{ paddingHorizontal: '5%', paddingVertical: '8%' }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 4 }}>
                            <AppText style={{ color: '#fff', fontFamily: 'iciel-bold' }}>Total value: </AppText>
                            <AppText style={{ color: '#fff' }}>{item.totalValue}</AppText>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 4 }}>
                            <AppText style={{ color: '#fff', fontFamily: 'iciel-bold' }}>Saving value: </AppText>
                            <AppText style={{ color: '#fff' }}>{item.savingValue}</AppText>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 4 }}>
                            <AppText style={{ color: '#fff', fontFamily: 'iciel-bold' }}>Total value: </AppText>
                            <AppText style={{ color: '#fff' }}>{item.validPeriod}</AppText>
                        </View>
                    </View>


                </LinearGradient>
                <Button full style={{ backgroundColor: '#00a651', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                    <AppText style={{ color: '#fff', right: -8 }}>Buy now</AppText>
                    <Icon name="cart" style={{ fontSize: 24 }}></Icon>
                </Button>
            </View>


        )
    }

    renderSpendingCard = ({ item }: { item: SpedingCard }) => {
        return (
            <LinearGradient
                colors={[cardTypeColor[item.type].startColor, cardTypeColor[item.type].endColor]}
                start={[0.1, 0.1]}
                style={{ width: '100%', height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginVertical: 6 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Image source={require('../../../assets/spending_card_screen/pink_pig.png')}
                        style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode="contain" />
                    <View style={{ paddingHorizontal: 8 }}>
                        <AppText style={{ color: '#fff', fontFamily: 'iciel-bold' }}>{item.name}</AppText>
                        <View style={{ flexDirection: 'row' }}>
                            <AppText style={{ color: '#fff', fontFamily: 'iciel-bold' }}>Expiry Date: </AppText>
                            <AppText style={{ color: '#fff' }}>{item.expiryDate}</AppText>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }

    render(): React.ReactNode {
        const dataCard: DataCard[] = [{
            name: 'Silver Card',
            totalValue: '5 millions',
            savingValue: '1 million',
            validPeriod: '30 days',
            type: 'silver'

        },
        {
            name: 'Gold Card',
            totalValue: '5 millions',
            savingValue: '1 million',
            validPeriod: '30 days',
            type: 'gold'
        },
        {
            name: 'Diamond Card',
            totalValue: '5 millions',
            savingValue: '1 million',
            validPeriod: '30 days',
            type: 'diamond'
        }]
        const dataSpedingCard: SpedingCard[] = [{
            name: 'Silver Card',
            type: 'silver',
            expiryDate: '11/05/2016'
        },
        {
            name: 'Gold Card',
            expiryDate: '11/05/2016',
            type: 'gold'
        },
        {
            name: 'Diamond Card',
            expiryDate: '11/05/2016',
            type: 'diamond'
        }]

        return (
            <BasicLayout image title="Spending Card">
                <View style={styles.container}>
                    <FlatList
                        data={dataCard}
                        renderItem={this.renderDataCard}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false} />

                    <View style={{ marginHorizontal: '10%', backgroundColor: '#fff', marginVertical: 15, paddingVertical: 6, borderRadius: 5 }}>
                        <AppText style={{ fontFamily: 'iciel-bold', alignSelf: 'center', paddingVertical: 12 }}>Your Speding Card</AppText>
                        <FlatList
                            data={dataSpedingCard}
                            renderItem={this.renderSpendingCard}
                            keyExtractor={(item, index) => index.toString()}
                            style={{ paddingHorizontal: '10%' }} />
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

export default connect(mapState, mapDispatch as any)(Test1);

