import {UPDATE_USER} from '../actions/types';

export const updateUser = (user) => dispatch => {
    dispatch({
        type: UPDATE_USER,
        payload: user,
    })
};

export const logOut = (user) => dispatch => {
    dispatch({
        type: UPDATE_USER,
        payload: null,
    })
};

export const isLoggedIn = () => (dispatch, getState) => {
  const user = getState() && getState().user ? getState().user : null;
    return user && user.name && user.email;
};
