
import { createModel } from '@rematch/core';
import { BudgetState, GetBudgetParam, BudgetData } from './interface';
import { AppState } from '../../state';
import serviceProvider from '../../../services/service.provider';

const defaultState: BudgetState = {
  data: {
    ownerId: '',
    saving: 0,
    expense: 0,
    _id: '',
    ownerType: '',
    balance: 0,
    _v: 0,
  }
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
    updateBudget: (state: BudgetState, payload: BudgetData) => {
      return {
        ...state,
        data: { ...payload }
      };
    },
  },
  effects: (_dispatch) => ({
    async getBudgetAsync(payload: string, rootState: AppState): Promise<any> {
      try {
        this.updateBusyState(true);

        const budget = await serviceProvider.BudgetServices().getBudget(rootState.userProfile.token, rootState.userProfile.info.budget);
        console.log('butget', budget);
        this.updateBudget(budget.data)
      } catch (error) {
        console.log(error)
      } finally {
        this.updateBusyState(false);
      }
    },
  })
});
