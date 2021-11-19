import { combineReducers } from "redux";

// reducers
import UserReducer from "./User/User.reducer";
import CartReducer from "./Cart/Cart.reducer";
import directoryReducer from "./Directory/Directory.reducer";
import shopReducer from "./Shop/Shop.reducer";

// persistor
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const RootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, RootReducer);
