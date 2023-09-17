import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReduser = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReduser);
const enhancer = devToolsEnhancer();

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
