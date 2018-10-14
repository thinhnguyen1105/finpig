import React from 'react';
import { Animated, View, Text, Image, ScrollView } from 'react-native';
import { Button, Content, Container, Header, Right, Left, Body, Item, Input, CheckBox } from 'native-base';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import { AppState } from '../../store/state';
import style from './style';
import BasicLayout from '../../components/BasicLayout';
import { RegisterParam } from '../../services/interface.service';

export interface Props extends NavigationScreenProps {
  number: number;
  updateNumber: () => void;
  register: (param: RegisterParam) => void;
}
export interface State {
  opacity: any;
  name: string;
  username: string;
  password: string;
  age: string;
  phoneNumber: string;
  email: string;
}

class Register extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
      name: '',
      username: '',
      password: '',
      age: '',
      phoneNumber: '',
      email: '',
    };
  }

  render(): React.ReactNode {
    return (
      <ScrollView>
        <View >
          <View style={{ alignItems: "center", padding: 20, justifyContent: 'center', marginTop: 20 }}>
            <Image style={{ width: 100, height: 100 }} source={require('../../../assets/Register/icon_phone.png')}></Image>
          </View>
          <View style={{ alignItems: "center", padding: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Registration</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ backgroundColor: '#f7f5f5', borderRadius: 10, width: '100%', padding: 20 }}>
              <View style={{ marginBottom: 20 }}>
                <Item regular style={{ borderRadius: 5, marginBottom: 10 }}>
                  <Input onChangeText={(value) => this.setState({ username: value })} placeholder='Username'></Input>
                </Item>
                <Item regular style={{ borderRadius: 5, marginBottom: 10 }}>
                  <Input onChangeText={(value) => this.setState({ password: value })} placeholder='Password'></Input>
                </Item>
                <Item regular style={{ borderRadius: 5, marginBottom: 10 }}>
                  <Input onChangeText={(value) => this.setState({ age: value })} placeholder='Age'></Input>
                </Item>
                <Item regular style={{ borderRadius: 5, marginBottom: 10 }}>
                  <Input onChangeText={(value) => this.setState({ name: value })} placeholder='Day Of Birth'></Input>
                </Item>
                <Item regular style={{ borderRadius: 5, marginBottom: 10 }}>
                  <Input onChangeText={(value) => this.setState({ phoneNumber: value })} placeholder='Phone number'></Input>
                </Item>
                <Item regular style={{ borderRadius: 5, marginBottom: 10 }}>
                  <Input onChangeText={(value) => this.setState({ email: value })} placeholder='Email'></Input>
                </Item>
              </View>
              <Button onPress={() => this.props.register({
                username: this.state.username, name: this.state.name, password: this.state.password, age: this.state.age, email: this.state.email, phoneNumber: this.state.phoneNumber
              })} style={{ borderRadius: 20, backgroundColor: '#ff60a9' }} full><Text style={{ color: '#ffffff' }}>SIGN UP</Text></Button>
            </View>
          </View>
        </View>
      </ScrollView>



    );
  }
}
const mapState = (state: AppState) => ({
  number: state.appState.number,
});

const mapDispatch = ({ appState, userProfile }: RematchDispatch<models>) => ({
  updateNumber: (value: string) => { appState.updateNumber('' as any); },
  register: (param: RegisterParam) => { userProfile.register(param as any) }

});

export default connect(mapState, mapDispatch as any)(Register);

