import React from 'react';
import { Animated, View, Text } from 'react-native';
import { Button } from 'native-base';
import ScreenNames from '../screen-names';

class Test2 extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            opacity: new Animated.Value(1),
        };
    }

    render(): React.ReactNode {
        return (
            <View>
                <Text>asdasd</Text>
                <Button onPress={() => this.props.navigation.navigate(ScreenNames.Register)}>
                    <Text>Go to test1</Text>
                </Button>
            </View>
        );
    }
}

export default (Test2);
