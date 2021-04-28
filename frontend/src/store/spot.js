import { csrfFetch } from './csrf';

const GET_SPOT = 'spot/getSpot'

/////////////////// ACTION CREATORS ////////////////////

const getSpot = (spot) => {
    return {
        type: GET_SPOT,
        payload: spot
    };
};



//////////////// THUNK ACTION CREATORS ////////////////////

export const getSpotThunk = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`);
    const spot = await response.json();
    dispatch(getSpot(spot));
}


///////////////// Reducer //////////////////

const initialState = {}

const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SPOT:
            return {...action.payload}
        default:
            return state;
    }
}

export default spotReducer;