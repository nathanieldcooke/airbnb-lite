import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import * as bookingsActions from '../../../store/bookings'
import BookingFormModal from '../../BookingFormModal/BookingFormModal'

import './Booking.css'

const Booking = ( {bookings} ) => {
    
    let dispatch = useDispatch()

    // let bookings = useSelector(state)
    // let history = useHistory()

    const deleteBooking = async (id) => {
        // history.push('/')
        await dispatch(bookingsActions.deleteBookingThunk(id));

        // await 

        // history.pop()
    }

    return (
        <div className='history-booking'>
            {bookings.map((booking, i) => {
                return (
                    <div key={`book-hist-${i}`} className='sub-history-booking'>
                        <div className='hist-book-left'>
                            <span>You have a booking at: </span>
                            <span className='title'>{booking.Spot.title}</span>
                            <span>Your Check-In/Check-Out:</span>
                            <span>{`In: ${booking.checkIn.split('T')[0]} / Out: ${booking.checkOut.split('T')[0]}`}</span>
                        </div>
                        <div className='hist-book-right'>
                            <button className='hist-book-update-btn'><BookingFormModal text='Update'/></button>
                            <button
                            onClick={() => {deleteBooking(booking.id)}}
                            className='hist-book-delete-btn'>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Booking