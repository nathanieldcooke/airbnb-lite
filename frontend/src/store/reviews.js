import { csrfFetch } from './csrf'

const GET_REVIEWS = 'reviews/getReviews'
const POST_REVEIW = 'reviews/postReview'

/////////////////// ACTION CREATORS ////////////////////

const getReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        payload: reviews
    }
}

const postReview = (reviewData) => {
    return {
        type: POST_REVEIW,
        payload: reviewData
    }
}

//////////////// THUNK ACTION CREATORS ////////////////////

export const getReviewsThunk = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${userId}`);
    const reviews = await response.json();
    dispatch(getReviews(reviews));
}

export const postReviewThunk = (reviewData) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews/',{
        method: 'POST',
        body: JSON.stringify(reviewData)
    })
    const newReview = await response.json()
    dispatch(postReview(newReview))
}

///////////////// Reducer //////////////////

const initialState = [];

const reviewsReducer = (state = initialState, action) => {
    let stateDup = [...state]
    switch (action.type) {
        case GET_REVIEWS:
            return [...action.payload]
        case POST_REVEIW:
            return [...state, action.payload]
        default:
            return state
    }
}

export default reviewsReducer