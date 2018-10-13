import { Container, Content } from 'native-base';
import * as React from 'react';
import styles from './styles';
import { ViewStyle, StatusBar, View, TouchableOpacity, Image } from 'react-native';

export interface IProps {
    styles?: ViewStyle;
    isFullscreen?: boolean;
    image?: boolean;
    noBackButton?: boolean;
}
export interface IState { }
class BasicLayout extends React.Component<IProps, IState> {
    render(): React.ReactNode {
        const containerStyle = this.props.styles ? { ...styles.Container, ...this.props.styles } : styles.Container;
        return (
            <Container style={containerStyle}>
                {!this.props.noBackButton &&
                    <TouchableOpacity style={{ paddingLeft: 12 }}>
                        <Image
                            source={require('../../../assets/Register/button_back.png')}
                            style={{ width: 20, height: 20 }} 
                            resizeMode="contain"/>
                    </TouchableOpacity>}
                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
            </Container>
        );
    }
}

export default BasicLayout;
