import React from 'react';
import { Animated, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models, dispatch } from '../../store';
import { AppState } from '../../store/state';
import { getLayout } from '../../helpers/get-layout';
import styles from './styles';
import { Item, Input, Icon, Button, Spinner } from 'native-base';
import BasicLayout from '../../components/BasicLayout';
import AppText from '../../components/AppText';
import ScreenNames from '../screen-names';
import serviceProvider from '../../services/service.provider';
import { LoginParam } from '../../services/interface.service';
import config from '../../config';

export interface Props extends NavigationScreenProps {
    isBusy: boolean;
    number: number;
    updateNumber: () => void;
    loginAsync: (param: LoginParam) => void;
}
export interface State {
    username: string;
    password: string;
}

class Test1 extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    login = () => {
        this.props.loginAsync({ username: this.state.username, password: this.state.password })
    }

    render(): React.ReactNode {
        if (this.props.isBusy) {
            return (<View style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Spinner color={config().primaryColor} />

            </View>)

        }
        return (
            <BasicLayout noHeader >
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
                        <Input placeholder='Username' style={styles.textInput} onChangeText={(username) => this.setState({ username })} />
                    </Item>
                    <Item regular style={styles.textInputContainer}>
                        <View style={{ paddingHorizontal: 8 }}>
                            <Icon active name='home' />
                        </View>
                        <Input placeholder='Password' style={styles.textInput} secureTextEntry onChangeText={(password) => this.setState({ password })} />
                    </Item>
                    <View style={{ marginTop: 20, width: '100%' }}>
                        <Button full style={{ backgroundColor: '#00caab', borderRadius: 5, }}
                            onPress={this.login}>
                            <AppText>SIGN IN</AppText>
                        </Button>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 10, alignContent: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ borderRightWidth: 1, borderRightColor: '#000', paddingHorizontal: 4 }}
                            onPress={() => this.props.navigation.navigate(ScreenNames.Register)}>
                            <AppText style={styles.text}>SIGN UP</AppText>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 4 }}>
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
    isBusy: state.appState.isBusy,
});

const mapDispatch = ({ userProfile }: RematchDispatch<models>) => ({
    loginAsync: (param: LoginParam) => { userProfile.loginAsync(param as any) }
});

export default connect(mapState, mapDispatch as any)(Test1);

