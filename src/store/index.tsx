import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import models from './models';
import createRematchPersist from '@rematch/persist';
import storage from 'redux-persist/lib/storage';

const persistPlugin = createRematchPersist({
    whitelist: ['appState'],
    key: 'root',
    storage,
    throttle: 2000,
    version: 1,
} as any);

const store = init({
  plugins: [selectPlugin(), persistPlugin],
  models,
});

export default store;
export const { dispatch } = store;
export { models };
export type models = typeof models;
// export const select = getSelect<models>();
