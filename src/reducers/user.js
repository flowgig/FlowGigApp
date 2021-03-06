import { UPDATE_USER } from 'constants/types';

const initialState = null;

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return action.payload;
        default:
            return state;
    }
}
