import { FETCH_GIGS } from 'constants/types';

const initialState = {
  data: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_GIGS:
    return action.payload;
    default:
    return state;
  }
}
