import { combineReducers } from "redux";

// reducers
import UserReducer from "./User/User.reducer";
import CartReducer from "./Cart/Cart.reducer";

const RootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
});

export default RootReducer;
