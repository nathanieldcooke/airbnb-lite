import { csrfFetch } from './csrf'

const GET_BOOKINGS = 'spot/getBookings'

/////////////////// ACTION CREATORS ////////////////////

const getBookings = (bookings) => {
    return {
        type: GET_BOOKINGS,
        payload: bookings
    };
};

//////////////// THUNK ACTION CREATORS ////////////////////

export const getBookingsThunk = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${userId}`);
    const bookings = await response.json();
    console.log(bookings)
    dispatch(getBookings(bookings));
}


///////////////// Reducer //////////////////

const initialState = []

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKINGS:
            return [...action.payload]
        default:
            return state;
    }
}

export default bookingsReducer;