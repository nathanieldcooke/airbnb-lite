import { csrfFetch } from './csrf';

const GET_SPOTS = 'spots/getSpots'

/////////////////// ACTION CREATORS ////////////////////

const getSpots = (spots) => {
    return {
        type: GET_SPOTS,
        payload: spots
    };
};

//////////////// THUNK ACTION CREATORS ////////////////////

export const getSpotsThunk = (order) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${order}`);
    const spots = await response.json();
    dispatch(getSpots(spots));
}

///////////////// Reducer //////////////////

const initialState = []

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SPOTS:
            return [...action.payload]
        default:
            return state;
    }
}

export default spotsReducer;