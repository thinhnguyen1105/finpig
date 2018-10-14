
import { createModel } from '@rematch/core';
import { MembershipState, Membership } from './interface';
import { AppState } from '../../state';
import serviceProvider from '../../../services/service.provider';
import { Toast } from 'native-base';
import { duration } from 'moment';

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
        updateMembership: (state: MembershipState, payload: Membership[]) => {
            return {
                ...state,
                memberships: [...payload]
            };
        },
    },
    effects: (_dispatch) => ({
        async getMembershipAsync(payload: string, rootState: AppState): Promise<any> {
            try {
                this.updateBusyState(true);

                const membershipIds = rootState.userProfile.info.purchasedMemberShip;
                const memberships: Membership[] = []
                for (const membershipId of membershipIds) {
                    const membership = await serviceProvider.Membership().getMemberShip(rootState.userProfile.token, membershipId);
                    memberships.push(membership.data);
                    console.log('membership', membership);
                }
                // console.log(memberships);
                this.updateMembership(memberships);
            } catch (error) {
                console.log(error)
            } finally {
                this.updateBusyState(false);
            }
        },
        async purchaseMembershipAsync(payload: string, rootState: AppState): Promise<any> {
            try {
                this.updateBusyState(true);
                const purchaseMembership = await serviceProvider.Membership().purchaseMemberShip(payload, rootState.userProfile.token);
                if (purchaseMembership.status === 'success') {
                    Toast.show({
                        text: 'Successfully purchased',
                        duration: 2000,
                        type: 'success'
                    })
                } else {
                    Toast.show({
                        text: purchaseMembership.data.info,
                        duration: 2000,
                        type: 'danger'
                    })
                }
                console.log(purchaseMembership);
            } catch (error) {
                console.log(error)
            } finally {
                this.updateBusyState(false);
            }
        },
    })
});
