import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';
import gigs from './gigs';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    user,
    gigs
  });
}
