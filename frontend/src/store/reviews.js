import { csrfFetch } from './csrf'

const GET_REVIEWS = 'reviews/getReviews'
const POST_REVEIW = 'reviews/postReview'
const DELETE_REVIEW = 'reviews/deleteReview'

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

const deleteReview = (id) => {
    return {
        type: DELETE_REVIEW,
        payload: id
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

export const deleteReviewThunk = (id) => async (dispatch) => {
    await csrfFetch(`/api/reviews/${id}`,{
        method: 'DELETE'
    })
    dispatch(deleteReview(id))
}

///////////////// Reducer //////////////////

const initialState = [];

const reviewsReducer = (state = initialState, action) => {
    let stateDup = [...state]
    let idx = null;
    switch (action.type) {
        case GET_REVIEWS:
            return [...action.payload]
        case POST_REVEIW:
            return [...state, action.payload]
        case DELETE_REVIEW:
            for(let i = 0; i < stateDup.length; i++) {
                if (stateDup[i].id === action.payload) {
                    idx = i;
                    // console.log('STORE IDX: ', idx)
                    // console.log('STORE I : ', i)
                    break;
                }
            }
            // console.log('STORE STATEDUP: ', stateDup)
            stateDup.splice(idx, 1)
            return stateDup
        default:
            return state
    }
}

export default reviewsReducer