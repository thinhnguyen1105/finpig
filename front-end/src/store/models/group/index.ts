
import { createModel } from '@rematch/core';
import { GroupState, Group } from './interface';
import { LoginParam, GetUserParam } from '../../../services/interface.service';
import { AppState } from '../../state';
import serviceProvider from '../../../services/service.provider';
import ScreenNames from '../../../screens/screen-names';

const defaultState: GroupState = {
    groups: []
};

export default createModel({
    state: defaultState, // initial state
    reducers: {
        // handle state changes with pure functions
        updateGroup: (state: GroupState, payload: GroupState) => {
            return {
                ...state,
                ...payload
            };
        },
    },
    effects: (_dispatch) => ({
        async getGroupAsync(payload: string, rootState: AppState): Promise<any> {
            try {
                const groupIds = rootState.userProfile.info.groups;
                const groups = []
                for (const groupId of groupIds) {
                    const group = await serviceProvider.GroupService().getGroup(rootState.userProfile.token, groupId);
                    console.log('login', group);
                }
            } catch (error) {
                console.log(error)
            }
        },
    })
});
