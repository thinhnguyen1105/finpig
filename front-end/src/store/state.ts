
import { UiAppState } from './models/app/interface';
import { UserState } from './models/user-profile/interface';
import { BudgetState } from './models/budget-info/interface';
import { GroupState } from './models/group/interface';
import { MembershipState } from './models/membership/interface';

export interface AppState {
    appState: UiAppState;
    userProfile: UserState;
    budgetData: BudgetState;
    group: GroupState,
    membership: MembershipState
}
