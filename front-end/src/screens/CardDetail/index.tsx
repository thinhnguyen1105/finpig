import React from 'react';
import { Animated, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import { AppState } from '../../store/state';
import { getLayout } from '../../helpers/get-layout';
import styles from './styles';
import AppText from '../../components/AppText';
import ScreenNames from '../screen-names';
import BasicLayout from '../../components/BasicLayout';
import { UserState } from '../../store/models/user-profile/interface';
import { GetBudgetParam } from '../../services/interface.service';

export interface Props extends NavigationScreenProps {
  number: number;
  updateNumber: () => void;
  userProfile: UserState;
  getBudgetAsync: (param: GetBudgetParam) => void;
}
export interface State {

}

class CardDetail extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
    };
  }
  // componentDidMount() {
  //     this.props.getBudgetAsync({ token: this.state.username, budgetId: this.state.password })
  // }



  render(): React.ReactNode {
    const { userProfile } = this.props;
    return (
      <BasicLayout image title='Detail Spending Card'>
        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
          <View style={{ position: 'absolute', backgroundColor: 'white', top: 100, width: '80%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 100, width: 100, position: 'absolute', top: -40, zIndex: 10 }} source={require('../../../assets/images/lon_xu.png')}></Image>
            <View style={{ marginBottom: 20 }}>
              <Image style={{ width: 150, height: 150, marginTop: 20 }} source={require('../../../assets/images/QR.png')} ></Image>
            </View>
            <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}>Gold Card</Text>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.textCenterBold}>Total Value</Text>
              <Text style={styles.textCenter}>200$</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
              <Text style={styles.textCenterBold}>Day of purchase</Text>
              <Text style={styles.textCenter}>10 Oct 2019</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
              <Text style={styles.textCenterBold}>Expriation Date</Text>
              <Text style={styles.textCenter}>10 Oct 2020</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
              <Text style={styles.textCenterBold}>Remaining Cost</Text>
              <Text style={styles.textCenter}>200$</Text>
            </View>



          </View>
        </View>
      </BasicLayout >
    );
  }
}
const mapState = (state: AppState) => ({
  budgetData: state.budgetData,
  userProfile: state.userProfile,
});

const mapDispatch = ({ budgetData }: RematchDispatch<models>) => ({
  getBudgetAsync: (param: GetBudgetParam) => { budgetData.getBudgetAsync(param as any) }
});

export default connect(mapState, mapDispatch as any)(CardDetail);

