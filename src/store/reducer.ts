import { combineReducers } from 'redux';
import { reducer as loginReducer } from './login';

const reducer = combineReducers({
  login: loginReducer,
});

export default reducer;
