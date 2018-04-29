import axios from 'axios';

//Action types
const GET_ACTIVITIES = 'GET_ACTIVITIES';

//Action Creators

const getActivities = activities => ({ type: GET_ACTIVITIES, activities });

//Thunk Creators

export const fetchActivities = (userId) => dispatch => {
    return axios.get(`/api/activities/${userId}`)
        .then(res => res.data)
        .then(activity => dispatch(getActivities(activity)))
        .catch(err => console.log(err))
}

//Reducer
export default function (state = [], action) {
    switch (action.type) {
        case GET_ACTIVITIES:
            return action.activities;
        default:
            return state;
    }
}