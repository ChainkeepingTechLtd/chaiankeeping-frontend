import { combineReducers } from "@reduxjs/toolkit";
// slices
import { baseAPI } from "./api/base-api";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import howItWorksReducer from './slices/how-it-works.slice';
import featuresReducer from './slices/features.slice';

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
    howItWorks: howItWorksReducer,
    features: featuresReducer,
});

export default rootReducer;
