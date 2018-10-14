import React from 'react';
import { Animated, View, Text, Image, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { RematchDispatch } from '@rematch/core';
import { models } from '../../store';
import DatePicker from 'react-native-datepicker'
import AppText from '../../components/AppText';
import BasicLayout from '../../components/BasicLayout';
import ScreenNames from '../screen-names';
import { Spinner, Item, Input, Button } from 'native-base';
import config from '../../config';
import styles from './styles';
import { CreateGroupParams } from '../../services/interface.service';
import { AppState } from '../../store/state';
export interface Props extends NavigationScreenProps {
    number: number;
    updateNumber: () => void;
    getGroupAsync: () => void;
    createGroupAsync: (params: CreateGroupParams) => void;
    isBusy: boolean;
}
export interface State {
    startDate: string;
    endDate: string;
    name: string;
    description: string;
    goal: string;
}

export interface DataCarousel {
    url: any;
    name: string;
    descriptrion: string;
    goals: string;
}

class Test1 extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            endDate: '',
            startDate: '',
            name: '',
            description: '',
            goal: ''
        };
    }

    creatGroup = () => {
        const params: CreateGroupParams = {
            name: this.state.name,
            description: this.state.description,
            goal: parseInt(this.state.goal),
            startDate: new Date(this.state.startDate),
            endDate: new Date(this.state.endDate)
        }
        console.log(params);
        this.props.createGroupAsync(params);
    }

    render(): React.ReactNode {
        if (this.props.isBusy) {
            return (<View style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Spinner color={config().primaryColor} />

            </View>)

        }
        return (
            <BasicLayout image title="Add Group">
                <View style={{
                    paddingHorizontal: '10%',
                    paddingTop: '10%'
                }}>
                    <Item regular style={styles.textInput}>
                        <Input placeholder='Name' style={styles.text} onChangeText={(name) => this.setState({ name })} />
                    </Item>
                    <Item regular style={styles.textInput}>
                        <Input placeholder='Description' style={styles.text} onChangeText={(description) => this.setState({ description })} />
                    </Item>
                    <Item regular style={styles.textInput}>
                        <Input placeholder='Goal' style={styles.text} keyboardType="number-pad" onChangeText={(goal) => this.setState({ goal })} />
                    </Item>
                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingRight: 4 }}>
                            <AppText style={{ paddingRight: 8 }}>Start: </AppText>
                            <DatePicker
                                style={{ flex: 1 }}
                                date={this.state.startDate}
                                mode="date"
                                placeholder="Select date"
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}
                                customStyles={{
                                    // ... You can check the source to find the other keys.
                                    dateInput: {
                                        borderColor: '#fff'
                                    }
                                }}

                                // ... You can check the source to find the other keys.
                                onDateChange={(date) => { this.setState({ startDate: date }) }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingLeft: 4 }}>

                            <AppText style={{ paddingRight: 8 }}>End: </AppText>
                            <DatePicker
                                style={{ flex: 1 }}
                                date={this.state.endDate}
                                mode="date"
                                placeholder="Select date"
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                showIcon={false}

                                cancelBtnText="Cancel"
                                customStyles={{
                                    // ... You can check the source to find the other keys.
                                    dateInput: {
                                        borderColor: '#fff'
                                    }
                                }}
                                onDateChange={(date) => { this.setState({ endDate: date }) }}
                            />
                        </View>

                    </View>


                    <Button full
                        onPress={this.creatGroup}
                        style={{ marginVertical: 12, borderRadius: 5, backgroundColor: config().primaryColor }}>
                        <AppText style={{ color: '#fff' }}>Create</AppText>
                    </Button>
                </View>
            </BasicLayout>
        );
    }
}
const mapState = (state: AppState) => ({
    isBusy: state.appState.isBusy,
});

const mapDispatch = ({ group }: RematchDispatch<models>) => ({
    createGroupAsync: (params: CreateGroupParams) => { group.createGroupAsync(params as any) }
});

export default connect(mapState, mapDispatch as any)(Test1);

