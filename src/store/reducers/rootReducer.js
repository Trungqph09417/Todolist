// chứa tất cả các reducer
import appReducer from "./appReducer";
import { combineReducers } from "redux";
// redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import musicReducer from "./musicReducer";
// combinerReducer ==> tổng hợp các reducer
// applyMiddleware ==> sử dụng middleware

const commonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
const musicConfig = {
  ...commonConfig,
  key: "music",
  whitelist: ["curSongId"],
};

const rootReducer = combineReducers({
  app: appReducer,
  music: persistReducer(musicConfig, musicReducer),
});
export default rootReducer;
