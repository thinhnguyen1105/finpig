import { Container, Content, Header, Left } from 'native-base';
import * as React from 'react';
import styles from './styles';
import { ViewStyle, StatusBar, View, TouchableOpacity, Image } from 'react-native';
import { withNavigation, NavigationScreenProps } from 'react-navigation';

export interface IProps {
    styles?: ViewStyle;
    isFullscreen?: boolean;
    image?: boolean;
    noHeader?: boolean;
}
export interface IState { }
class BasicLayout extends React.Component<IProps, IState> {
    render(): React.ReactNode {
        const containerStyle = this.props.styles ? { ...styles.Container, ...this.props.styles } : styles.Container;
        return (
            <Container style={containerStyle}>
                {!this.props.noHeader &&

                    <TouchableOpacity style={{ paddingLeft: 12 }} onPress={() => (this.props as any).navigation.goBack()}>
                        <Image
                            source={require('../../../assets/Register/button_back.png')}
                            style={{ width: 20, height: 20 }}
                            resizeMode="contain" />
                    </TouchableOpacity>}

                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
            </Container>
        );
    }
}

export default withNavigation(BasicLayout);
