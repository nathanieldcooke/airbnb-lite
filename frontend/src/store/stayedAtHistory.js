import { csrfFetch } from './csrf'

const GET_STAYED_AT_HISTORY = 'stayedAtHistory/getStayedAtHistory'

/////////////////// ACTION CREATORS ////////////////////

const getStayedAtHistory = (spotsStayedAt) => {
    return {
        type: GET_STAYED_AT_HISTORY,
        payload: spotsStayedAt
    }
}

//////////////// THUNK ACTION CREATORS ////////////////////

export const getStayedAtHistoryThunk = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/stayedAtHistory/${userId}`);
    const spotsStayedAt = await response.json();
    dispatch(getStayedAtHistory(spotsStayedAt));
}

///////////////// Reducer //////////////////

const initialState = [];

const stayedAtHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STAYED_AT_HISTORY:
            return [...action.payload]
        default:
            return state
    }
}

export default stayedAtHistoryReducer