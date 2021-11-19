import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

// root reducer
import RootReducer from "./RootReducer";

const middlewares = [logger];

export const Store = createStore(RootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(Store);

