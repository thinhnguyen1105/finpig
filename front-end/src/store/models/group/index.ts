
import { createModel } from '@rematch/core';
import { GroupState, Group } from './interface';
import { AppState } from '../../state';
import serviceProvider from '../../../services/service.provider';
import { CreateGroupParams } from '../../../services/interface.service';

const defaultState: GroupState = {
    groups: []
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
                this.updateBusyState(true);
                const groupIds = rootState.userProfile.info.groups;
                const groups = []
                for (const groupId of groupIds) {
                    const group = await serviceProvider.GroupService().getGroup(rootState.userProfile.token, groupId);
                    console.log('login', group);
                }
            } catch (error) {
                console.log(error)
            } finally {
                this.updateBusyState(false);
            }
        },
        async createGroupAsync(payload: CreateGroupParams, rootState: AppState): Promise<any> {
            try {
                this.updateBusyState(true);
                const creatGroup = await serviceProvider.GroupService().createGroup(payload, rootState.userProfile.token);
                console.log('creatGroup', creatGroup);
            } catch (error) {
                console.log(error)
            } finally {
                this.updateBusyState(false);
            }
        },
    })
});
