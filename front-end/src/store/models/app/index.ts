
import { createModel } from '@rematch/core';
import { UiAppState } from './interface';

const defaultState: UiAppState = {
    isBusy: false,
};

export default createModel({
    state: defaultState, // initial state
    reducers: {
        // handle state changes with pure functions
        'userProfile/updateBusyState': (state: UiAppState, payload: boolean) => {
            return {
                ...state,
                isBusy: payload
            };
        },
        'membership/updateBusyState': (state: UiAppState, payload: boolean) => {
            return {
                ...state,
                isBusy: payload
            };
        },
        'group/updateBusyState': (state: UiAppState, payload: boolean) => {
            return {
                ...state,
                isBusy: payload
            };
        },
        'budgetData/updateBusyState': (state: UiAppState, payload: boolean) => {
            return {
                ...state,
                isBusy: payload
            };
        },
    },
    effects: (_dispatch) => ({

    })
});
