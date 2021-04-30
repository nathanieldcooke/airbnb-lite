import { csrfFetch } from './csrf'

const GET_BOOKINGS = 'bookings/getBookings'
const MAKE_BOOKING = 'bookings/makeBooking'
const UPDATE_BOOKING = 'bookings/updateBooking'
const DELETE_BOOKINGS = 'bookings/deleteBooking'

/////////////////// ACTION CREATORS ////////////////////

const getBookings = (bookings) => {
    return {
        type: GET_BOOKINGS,
        payload: bookings
    };
};

const makeBooking = (newBooking) => {
    return {
        type: MAKE_BOOKING,
        payload: newBooking
    }
}

const updateBooking = (updatedBooking) => {
    return {
        type: UPDATE_BOOKING,
        payload: updatedBooking
    }
}

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
    dispatch(getBookings(bookings));
}

export const makeBookingThunk = (bookingData) => async (dispatch) => {
    const response = await csrfFetch('/api/bookings/', {
        method: 'POST',
        body: JSON.stringify(bookingData)
    })
    let newBooking = await response.json()
    dispatch(makeBooking(newBooking))
}

export const updateBookingThunk = (bookingData, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${id}`, {
        method: 'PUT',
        body: JSON.stringify(bookingData)
    })
    let updatedBooking = await response.json()
    console.log('This Is Updated Booking In Store: ', updatedBooking)
    dispatch(updateBooking(updatedBooking))
} 

export const deleteBookingThunk = (id) => async (dispatch) => {
    console.log('THIS IS DELETE THUNK: ', console.log(id))
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
                console.log('stateDup[i]: ',stateDup[i])
                console.log('action.payload: ', action.payload)
                if (stateDup[i].id === action.payload) {
                    idx = i;
                    break;
                }
            }
            stateDup.splice(idx, idx + 1)
            return stateDup;
        case MAKE_BOOKING:
            stateDup.push(action.payload.newBooking)
            return stateDup;
        case UPDATE_BOOKING:
            for (let i = 0; i < stateDup.length; ++i) {
                if (stateDup[i].id === action.payload.updatedBooking.id) {
                    stateDup[i] = action.payload.updatedBooking
                    break;
                }
            }
            return stateDup;
        default:
            return state;
    }
}

export default bookingsReducer;