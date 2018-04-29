import axios from 'axios';

/*** ACTION TYPES ***/
const GET_ACTIVITY = 'GET_ACTIVITY';

/*** ACTION CREATORS ***/
//get single ACTIVITY
const getActivity = activity => {
    return {
        type: GET_ACTIVITY,
        activity
    }
}



/*** THUNK CREATORS ***/
export const fetchSingleActivity = (userId, activityId) => {
    return dispatch => {
        return axios.get(`/api/activities/${userId}/${activityId}`)
            .then(res => res.data)
            .then(activity => {
                dispatch(getActivity(activity))
            })
            .catch(console.error)
    }
}



/*** REDUCER ***/
export default function (state = {}, action) {
    switch (action.type) {
        case GET_ACTIVITY:
            return action.activity;
        default:
            return state
    }
}