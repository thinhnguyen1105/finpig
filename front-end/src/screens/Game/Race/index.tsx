import React from 'react';
import { Animated, View, Text, Image, TouchableOpacity, ImageBackground, Easing, Modal } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../../store';
import { AppState } from '../../../store/state';
import { getLayout } from '../../../helpers/get-layout';
import styles from './styles';
import config from '../../../config';
import AppText from '../../../components/AppText';
import ScreenNames from '../../screen-names';

export interface Props extends NavigationScreenProps {
    number: number;
    updateNumber: () => void;
}
export interface State {
    positionPig1: any;
    positionPig2: any;
    positionPig3: any;
    positionPig4: any;
    choosenPig: any;
    winner: string;
    visible: boolean;
}

class Test1 extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            choosenPig: this.props.navigation.getParam('choosenPig', ''),
            positionPig1: new Animated.Value(0),
            positionPig2: new Animated.Value(0),
            positionPig3: new Animated.Value(0),
            positionPig4: new Animated.Value(0),
            winner: '',
            visible: false
        };
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.animate(this.state.positionPig1, 'pig1');
            this.animate(this.state.positionPig2, 'pig2');
            this.animate(this.state.positionPig3, 'pig3');
            this.animate(this.state.positionPig4, 'pig4');
        }, 1500)

    }

    animate(params: any, id: string) {
        // this.state.positionPig1.setValue(0)
        Animated.timing(
            params,
            {
                toValue: 350,
                duration: Math.floor(Math.random() * 2000) + 500,
                easing: Easing.linear
            }
        ).start(() => {
            if (this.state.winner === '') {
                this.setState({
                    winner: id,
                })
            }

        })
    }

    render(): React.ReactNode {
        console.log(this.props.navigation.getParam('choosenPig', ''));
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ paddingTop: 30 }}>
                        <Image
                            source={require('../../../../assets/screen_game/finish.png')}
                            style={{ width: getLayout().deviceWidth, height: 70, }} />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, bottom: 0, position: 'absolute' }}>
                        <Animated.View style={{ ...styles.imageContainer, bottom: this.state.positionPig1 }}>
                            <Image
                                source={require('../../../../assets/screen_game/Pig4.png')}
                                resizeMode="contain"
                                style={styles.image} />
                        </Animated.View>
                        <Animated.View style={{ ...styles.imageContainer, bottom: this.state.positionPig2 }}>
                            <Image
                                source={require('../../../../assets/screen_game/Pig2.png')}
                                resizeMode="contain"
                                style={styles.image} />
                        </Animated.View>
                        <Animated.View style={{ ...styles.imageContainer, bottom: this.state.positionPig3 }}>
                            <Image
                                source={require('../../../../assets/screen_game/Pig1.png')}
                                resizeMode="contain"
                                style={styles.image} />
                        </Animated.View>
                        <Animated.View style={{ ...styles.imageContainer, bottom: this.state.positionPig4 }}>
                            <Image
                                source={require('../../../../assets/screen_game/Pig3.png')}
                                resizeMode="contain"
                                style={styles.image} />
                        </Animated.View>
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.winner !== ''}
                    onShow={() => setTimeout(() => {
                        this.setState({ winner: '' })
                        this.props.navigation.navigate(ScreenNames.ChoosePig)
                    }, 2000)}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: '10%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{ backgroundColor: config().primaryColor, paddingVertical: 30, paddingHorizontal: 35, borderRadius: 10 }}>
                            {this.state.choosenPig[this.state.winner] !== 0
                                ? <AppText style={{ color: '#fff', fontFamily: 'iciel-bold', fontSize: 20, textAlign: 'center' }}>
                                    Congratulation! You won the game.
                                </AppText>
                                : <AppText style={{ color: '#fff', fontFamily: 'iciel-bold', fontSize: 20, textAlign: 'center' }}>
                                    Try your best luck next time :(
                                    </AppText>
                            }
                        </View>
                    </View>

                </Modal>
            </View>

        );
    }
}
const mapState = (state: AppState) => ({
    number: state.appState.number,
});

const mapDispatch = ({ appState }: RematchDispatch<models>) => ({
});

export default connect(mapState, mapDispatch as any)(Test1);

