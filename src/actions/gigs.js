import { FETCH_GIGS } from 'constants/types';
import {getFlowGigApiUrl} from "helpers/apiUrlHelpers";

export const fetchGigs = (bandId) => dispatch => {
  if (bandId){
    const fetchOptions = {
      headers: new Headers({
      })
    };
    const flowGigApiUrl = getFlowGigApiUrl();
    return fetch(`${flowGigApiUrl}/bands/${bandId}/gigs`, fetchOptions)
    .then(res => res.json())
    .then(gigs => dispatch({
      type: FETCH_GIGS,
      payload: gigs
    }))
  }else {
    console.warn('Unable to fetch gigs: Missing value for bandId');
  }
};
