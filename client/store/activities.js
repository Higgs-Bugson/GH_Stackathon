import axios from 'axios';

//Action types
const GET_ACTIVITIES = 'GET_ACTIVITIES';
const GET_MEMBERSHIPS = 'GET_MEMBERSHIPS';

//Action Creators

const getActivities = activities => ({ type: GET_ACTIVITIES, activities });
const getMemberships = membership => ({ type: GET_MEMBERSHIPS, membership });

//Thunk Creators

export const fetchActivities = (userId) => dispatch => {
    return axios.get(`/api/activities/${userId}`)
        .then(res => res.data)
        .then(activity => dispatch(getActivities(activity)))
        .catch(err => console.log(err))
}

export const fetchMemberships = (activityId) => dispatch => {
    return axios.get(`/api/activities/users/member/${activityId}`)
        .then(res => res.data)
        .then(membership => dispatch(getMemberships(membership)))
        .catch(err => console.log(err))
}


//Reducer
export default function (state = [], action) {
    switch (action.type) {
        case GET_ACTIVITIES:
            return action.activities;
        case GET_MEMBERSHIPS:
            return action.membership;
        default:
            return state;
    }
}