import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const filtersPersistConfig = {
  key: 'filters',
  storage,
};

const contactsPersistedReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

const filtersPersistedReducer = persistReducer(
  filtersPersistConfig,
  filtersReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsPersistedReducer,
    filters: filtersPersistedReducer,
  },
});

export const persistor = persistStore(store);
