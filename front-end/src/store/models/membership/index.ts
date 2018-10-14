
import { createModel } from '@rematch/core';
import { MembershipState } from './interface';
import { AppState } from '../../state';
import serviceProvider from '../../../services/service.provider';

const defaultState: MembershipState = {
    memberships: []
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
        updateMembership: (state: MembershipState, payload: MembershipState) => {
            return {
                ...state,
                ...payload
            };
        },
    },
    effects: (_dispatch) => ({
        async getMembershipAsync(payload: string, rootState: AppState): Promise<any> {
            try {
                this.updateBusyState(true);

                const membershipIds = rootState.userProfile.info.purchasedMemberShip;
                const memberships = []
                for (const membershipId of membershipIds) {
                    const membership = await serviceProvider.GroupService().getGroup(rootState.userProfile.token, membershipId);
                    console.log('membership', membership);
                }
            } catch (error) {
                console.log(error)
            } finally {
                this.updateBusyState(false);
            }
        },
    })
});
