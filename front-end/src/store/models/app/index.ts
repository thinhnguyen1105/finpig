
import { createModel } from '@rematch/core';
import { UiAppState } from './interface';

const defaultState: UiAppState = {
    number: 0,
};

export default createModel({
    state: defaultState, // initial state
    reducers: {
        // handle state changes with pure functions
        updateNumber: (state: UiAppState) => {
            return {
                ...state,
                number: state.number + 1
            };
        },
    },
    effects: (_dispatch) => ({

    })
});
