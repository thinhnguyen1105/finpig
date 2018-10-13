import React from 'react';
import { Animated, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import { AppState } from '../../store/state';
import { getLayout } from '../../helpers/get-layout';
import styles from './styles';
import { Item, Input, Icon, Button } from 'native-base';
import BasicLayout from '../../components/BasicLayout';
import AppText from '../../components/AppText';

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
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../../assets/images/logo.png')}
                            style={{ width: getLayout().deviceWidth - 90, height: 80 }}
                        />
                        <Text style={{ color: '#ed82a6', fontFamily: 'iciel-bold', fontSize: 18 }}>FOR FUN WITH SAVING</Text>
                    </View>

                    <Item regular style={styles.textInputContainer}>
                        <View style={{ paddingHorizontal: 8 }}>
                            <Icon active name='home' />
                        </View>
                        <Input placeholder='Email' style={styles.textInput} />
                    </Item>
                    <Item regular style={styles.textInputContainer}>
                        <View style={{ paddingHorizontal: 8 }}>
                            <Icon active name='home' />
                        </View>
                        <Input placeholder='Password' style={styles.textInput} secureTextEntry />
                    </Item>
                    <View style={{ marginTop: 20, width: '100%' }}>
                        <Button full style={{ backgroundColor: '#00caab', borderRadius: 5, }}>
                            <AppText>SIGN IN</AppText>
                        </Button>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 10, alignContent: 'center', justifyContent: 'center'  }}>
                        <TouchableOpacity style={{borderRightWidth: 1, borderRightColor: '#000', paddingHorizontal: 4}}>
                            <AppText style={styles.text}>SIGN UP</AppText>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 4}}>
                            <AppText style={styles.text}>FORGOT PASSWORD?</AppText>

                        </TouchableOpacity>
                    </View>

                    <Image
                        source={require('../../../assets/images/image.png')}
                        style={{ width: getLayout().deviceWidth - 50, height: getLayout().deviceHeight / 3 }}
                    />
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

