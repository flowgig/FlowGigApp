import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from 'reducers/user';
import gigs from 'reducers/gigs';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    user,
    gigs
  });
}
