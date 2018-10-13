import { Container, Content, Left, Body, Right } from 'native-base';
import * as React from 'react';
import styles from './styles';
import { ViewStyle, StatusBar, View, TouchableOpacity, Image } from 'react-native';
import { withNavigation, NavigationScreenProps } from 'react-navigation';
import { getLayout } from '../../helpers/get-layout';
import AppText from '../AppText';

export interface IProps {
    styles?: ViewStyle;
    isFullscreen?: boolean;
    image?: boolean;
    noHeader?: boolean;
    title?: string;
}
export interface IState { }
class BasicLayout extends React.Component<IProps, IState> {
    render(): React.ReactNode {
        const containerStyle = this.props.styles ? { ...styles.Container, ...this.props.styles, } : styles.Container;
        return (
            <Container style={{ ...containerStyle, backgroundColor: this.props.image ? '#ececec' : '#fff' }}>
                {!this.props.noHeader &&
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Left>
                            <TouchableOpacity style={{ paddingLeft: 12 }} onPress={() => (this.props as any).navigation.goBack()}>
                                <Image
                                    source={require('../../../assets/Register/button_back.png')}
                                    style={{ width: 20, height: 20 }}
                                    resizeMode="contain" />
                            </TouchableOpacity>
                        </Left>

                        <Body>
                            <View style={{ alignSelf: 'center', justifyContent: 'center', }}>
                                <AppText style={{ fontFamily: 'iciel-bold', fontSize: 20, color: '#fff' }} numberOfLines={1} >{this.props.title}</AppText>

                            </View>
                        </Body>
                        <Right></Right>

                    </View>
                }
                {this.props.image &&
                    <Image
                        source={require('../../../assets/main_screen/background_pink.png')}
                        style={{
                            width: getLayout().deviceWidth, height: getLayout().deviceHeight / 2, position: 'absolute', zIndex: -1,
                        }}
                    />}
                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
            </Container>
        );
    }
}

export default withNavigation(BasicLayout);
