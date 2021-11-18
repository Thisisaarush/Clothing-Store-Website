import { combineReducers } from "redux";

// reducers
import UserReducer from './User/User.reducer';

const RootReducer = combineReducers({
  user: UserReducer,
});

export default RootReducer;
