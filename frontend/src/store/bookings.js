import { csrfFetch } from './csrf'

const GET_BOOKINGS = 'bookings/getBookings'
const DELETE_BOOKINGS = 'bookings/deleteBooking'

/////////////////// ACTION CREATORS ////////////////////

const getBookings = (bookings) => {
    return {
        type: GET_BOOKINGS,
        payload: bookings
    };
};

const deleteBooking = (id) => {
    return {
        type: DELETE_BOOKINGS,
        payload: id
    }
}
//////////////// THUNK ACTION CREATORS ////////////////////

export const getBookingsThunk = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${userId}`);
    const bookings = await response.json();
    console.log(bookings)
    dispatch(getBookings(bookings));
}

export const deleteBookingThunk = (id) => async (dispatch) => {


    await csrfFetch(`/api/bookings/${id}`, {
        method: 'DELETE'
    })

    dispatch(deleteBooking(id))
}

///////////////// Reducer //////////////////

const initialState = []

const bookingsReducer = (state = initialState, action) => {
    let stateDup = [...state]
    switch (action.type) {
        case GET_BOOKINGS:
            return [...action.payload]
        case DELETE_BOOKINGS:
            let idx = null;
            for (let i = 0; i < stateDup.length; ++i) {
                if (stateDup[i] === action.payload) {
                    idx = i;
                    break;
                }
            }
            stateDup.splice(idx, idx + 1)
            return stateDup;
        default:
            return state;
    }
}

export default bookingsReducer;