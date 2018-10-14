
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
    _v: 0,
  }
};

export default createModel({
  state: defaultState, // initial state
  reducers: {
    // handle state changes with pure functions
    updateBudget: (state: BudgetState, payload: BudgetData) => {
      return {
        ...state,
        data: { ...payload }
      };
    },
  },
  effects: (_dispatch) => ({
    async getBudgetAsync(payload: GetBudgetParam, _rootState: AppState): Promise<any> {
      try {
        const budget = await serviceProvider.BudgetServices().getBudget(payload.token, payload.budgetId);
        console.log(budget);
        this.updateBudget(budget.data)
      } catch (error) {
        console.log(error)
      }
    },
  })
});
