import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    user
  });
}
