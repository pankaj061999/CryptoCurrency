import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import homepage from "./slices/HomePage";

const rootPersistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["homepage"],
};

const cryptoCurrencyPersistConfig = {
  key: "homepage",
  storage: storage,
};

const rootReducer = combineReducers({
  homepage: persistReducer(cryptoCurrencyPersistConfig, homepage),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
