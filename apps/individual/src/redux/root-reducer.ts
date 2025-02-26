import { combineReducers } from "@reduxjs/toolkit";
import { baseAPI } from "./api/base-api";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import howItWorksReducer from "./slices/how-it-works.slice";
import featuresReducer from "./slices/features.slice";
import loginStateReducer from "./slices/auth-slice";
import storage from "redux-persist/lib/storage";

export const rootPersistConfig = {
	key: "root",
	storage,
	keyPrefix: "Chainkeeping-",
	stateReconciler: hardSet,
};

const rootReducer = combineReducers({
	[baseAPI.reducerPath]: baseAPI.reducer,
	howItWorks: howItWorksReducer,
	features: featuresReducer,
	loginState: loginStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
