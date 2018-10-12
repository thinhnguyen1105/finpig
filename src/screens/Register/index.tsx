import React from 'react';
import { Animated, View, Text, Image } from 'react-native';
import { Button, Content, Container, Header, Right, Left, Body } from 'native-base';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import { AppState } from '../../store/state';

export interface Props extends NavigationScreenProps {
  number: number;
  updateNumber: () => void;
}
export interface State {

}

class Register extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
    };
  }

  render(): React.ReactNode {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent><Image style={{ width: 10, height: 10, marginLeft: 4 }} source={require('../../../assets/Register/button_back.png')}></Image></Button>
          </Left>
          <Body>
            <Text>step 1/6</Text>
          </Body>
          <Right>
          </Right>
        </Header>

        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center", padding: 20, flex: 1, justifyContent: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={require('../../../assets/Register/icon_phone.png')}></Image>
          </View>
          <View style={{ alignItems: "center", padding: 20, flex: 1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Registration</Text>
            <Text style={{fontSize: 20, flexWrap: 'wrap', textAlign: 'center' }}>Enter your number, we will send you OTP to verify later</Text>
          </View>
        </View>

      </Container>
    );
  }
}
const mapState = (state: AppState) => ({
  number: state.appState.number,
});

const mapDispatch = ({ appState }: RematchDispatch<models>) => ({
  updateNumber: (value: string) => { appState.updateNumber('' as any); },

});

export default connect(mapState, mapDispatch as any)(Register);

