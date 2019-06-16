import {UPDATE_USER} from '../actions/types';

export const updateUser = (user) => dispatch => {
    dispatch({
        type: UPDATE_USER,
        payload: user,
    })
};
