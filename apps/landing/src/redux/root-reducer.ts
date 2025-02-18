import { combineReducers } from "@reduxjs/toolkit";
// slices
import { baseAPI } from "./api/base-api";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import howItWorksReducer from './slices/how-it-works.slice';
import featuresReducer from './slices/features.slice';
import integrationsReducer from './slices/integrations.slice';
import glossaryReducer from './slices/glossary.slice';
import authStateReducers from "./slices/auth.slice";

import storage from "redux-persist/lib/storage";

export const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "Chainkeeping-",
    // whitelist: [],
    stateReconciler: hardSet,
};

const rootReducer = combineReducers({
    [baseAPI.reducerPath]: baseAPI.reducer,
    authState: authStateReducers,
    howItWorks: howItWorksReducer,
    features: featuresReducer,
    integrations: integrationsReducer,
    glossary: glossaryReducer,
});

export default rootReducer;
