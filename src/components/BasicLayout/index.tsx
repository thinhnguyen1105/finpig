import { Container, Content } from 'native-base';
import * as React from 'react';
import styles from './styles';
import { ViewStyle, StatusBar } from 'react-native';

export interface IProps {
    styles?: ViewStyle;
    isFullscreen?: boolean;
    image?: boolean;
}
export interface IState { }
class BasicLayout extends React.Component<IProps, IState> {
    render(): React.ReactNode {
        const containerStyle = this.props.styles ? { ...styles.Container, ...this.props.styles } : styles.Container;
        return (
            <Container style={containerStyle}>
                <Content style={{ flex: 1 }}>
                    {this.props.children}
                </Content>
            </Container>
        );
    }
}

export default BasicLayout;
