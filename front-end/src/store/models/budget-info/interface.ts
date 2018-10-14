export interface BudgetState {
  data: BudgetData;

}

export interface GetBudgetParam {
  token: string;
  budgetId: string;
}

export interface BudgetData {
  ownerId: string;
  saving: number;
  expense: number;
  _id: string;
  ownerType: string;
  _v: number;
}

