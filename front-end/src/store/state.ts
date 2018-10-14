
import { UiAppState } from './models/app/interface';
import { UserState } from './models/user-profile/interface';
import { BudgetState } from './models/budget-info/interface';

export interface AppState {
    appState: UiAppState;
    userProfile: UserState;
    budgetData: BudgetState;
}
