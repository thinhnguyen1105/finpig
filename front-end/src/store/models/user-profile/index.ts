
import { createModel } from '@rematch/core';
import { UserState } from './interface';
import { LoginParam, GetUserParam } from '../../../services/interface.service';
import { AppState } from '../../state';
import serviceProvider from '../../../services/service.provider';
import ScreenNames from '../../../screens/screen-names';

const defaultState: UserState = {
    avatar: '',
    exp: 0,
    groups: [],
    transaction: [],
    _id: '',
    name: '',
    username: '',
    age: 0,
    budget: '',
    __v: 0
};

export default createModel({
    state: defaultState, // initial state
    reducers: {
        // handle state changes with pure functions
        updateUser: (state: UserState, payload: UserState) => {
            return {
                ...state,
                ...payload
            };
        },
    },
    effects: (_dispatch) => ({
        async loginAsync(payload: LoginParam, _rootState: AppState): Promise<any> {
            try {
                const login = await serviceProvider.AuthService().login({ username: payload.username, password: payload.password });
                this.getUserAsync({ token: login.data.token, userId: login.data.userId });
                console.log('login', login);
            } catch (error) {
                console.log(error)
            }
        },
        async getUserAsync(payload: GetUserParam, _rootState: AppState): Promise<any> {
            try {
                const user = await serviceProvider.UserService().getUser(payload.token, payload.userId);
                console.log(user);
                this.updateUser(user.data);
                serviceProvider.NavigatorService().navigate(ScreenNames.Choose)
            } catch (error) {
                console.log(error)
            }
        },
    })
});
