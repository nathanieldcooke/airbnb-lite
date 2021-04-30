import { csrfFetch } from './csrf'

const GET_REVIEWS = 'reviews/getReviews'

/////////////////// ACTION CREATORS ////////////////////

const getReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        payload: reviews
    }
}

//////////////// THUNK ACTION CREATORS ////////////////////

export const getReviewsThunk = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${userId}`);
    const reviews = await response.json();
    dispatch(getReviews(reviews));
}

///////////////// Reducer //////////////////

const initialState = [];

const reviewsReducer = (state = initialState, action) => {
    let stateDup = [...state]
    switch (action.type) {
        case GET_REVIEWS:
            return [...action.payload]
        default:
            return state
    }
}

export default reviewsReducer