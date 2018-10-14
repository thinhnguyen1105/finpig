
import { createModel } from '@rematch/core';
import { UserState, UserInfo } from './interface';
import { LoginParam, GetUserParam, RegisterParam } from '../../../services/interface.service';
import { AppState } from '../../state';
import serviceProvider from '../../../services/service.provider';
import ScreenNames from '../../../screens/screen-names';
import { Toast } from 'native-base';

const defaultState: UserState = {
    info: {
        avatar: '',
        exp: 0,
        groups: [],
        transaction: [],
        _id: '',
        name: '',
        username: '',
        age: 0,
        budget: '',
        __v: 0,
        email: '',
        purchasedMemberShip: []
    },
    token: '',
};

export default createModel({
    state: defaultState, // initial state
    reducers: {
        // handle state changes with pure functions
        updateBusyState: (payload: any) => {
            return {
                ...payload
            };
        },
        updateUser: (state: UserState, payload: UserInfo) => {
            return {
                ...state,
                info: { ...payload }
            };
        },
        updateToken: (state: UserState, payload: string) => {
            return {
                ...state,
                token: payload
            };
        },
        updateUserGroup: (state: UserState, payload: string[]) => {
            return {
                ...state,
                info: {
                    ...state.info,
                    groups: [...payload]
                }
            };
        },
    },
    effects: (_dispatch) => ({
        async loginAsync(payload: LoginParam, _rootState: AppState): Promise<any> {
            try {
                this.updateBusyState(true);

                const login = await serviceProvider.AuthService().login({ username: payload.username, password: payload.password });

                if (login.status === 'failure') {
                    Toast.show({
                        text: "Wrong password or username!",
                        buttonText: "Okay",
                        duration: 3000,
                        type: "danger"
                    })

                    return;
                } else {
                    this.getUserAsync({ token: login.data.token, userId: login.data.userId });
                    this.getUseGroupAsync({ token: login.data.token, userId: login.data.userId });
                    this.updateToken(login.data.token);
                    serviceProvider.NavigatorService().navigate(ScreenNames.Choose)
                }

            } catch (error) {
                console.log(error)
            } finally {
                this.updateBusyState(false);
            }
        },
        async getUserAsync(payload: GetUserParam, _rootState: AppState): Promise<any> {
            try {
                this.updateBusyState(true);

                const user = await serviceProvider.UserService().getUser(payload.token, payload.userId);
                console.log(user);
                this.updateUser(user.data);
            } catch (error) {
                console.log(error)
            } finally {
                this.updateBusyState(false);
            }
        },
        async register(payload: RegisterParam, _rootState: AppState): Promise<any> {
            try {
                const user = await serviceProvider.AuthService().register(payload);
                if (user.status === 'success') {
                    serviceProvider.NavigatorService().navigate(ScreenNames.Login);
                } else {
                    Toast.show({
                        text: 'please re-input',
                        duration: 3000
                    })
                }
                console.log(user);
            } catch (error) {
                console.log(error)
            }
        },
        async getUseGroupAsync(payload: GetUserParam, _rootState: AppState): Promise<any> {
            try {
                this.updateBusyState(true);
                const userGroup = await serviceProvider.UserService().getUserGroup(payload.token, payload.userId);
                console.log(userGroup);
                this.updateUserGroup(userGroup.data);
            } catch (error) {
                console.log(error)
            } finally {
                this.updateBusyState(false);
            }
        },
    })
});
