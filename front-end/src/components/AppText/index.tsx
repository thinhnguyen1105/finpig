import * as React from 'react';
import { ViewStyle, StatusBar, Text, TextStyle } from 'react-native';

export interface IProps {
    style?: TextStyle
}
export interface IState { }
class AppText extends React.Component<IProps, IState> {
    render(): React.ReactNode {
        return (
            <Text style={{ fontFamily: 'iciel-regular', ...this.props.style }}>{this.props.children}</Text>
        );
    }
}

export default AppText;
