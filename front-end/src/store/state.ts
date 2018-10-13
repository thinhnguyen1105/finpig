
import { UiAppState } from './models/app/interface';
import { UserState } from './models/user-profile/interface';

export interface AppState {
    appState: UiAppState;
    userProfile: UserState
}
