import { useState, useEffect, Children } from 'react';
import { useSelector, useDispatch, connectAdvanced } from 'react-redux'
import Calendar from 'react-calendar';
import { csrfFetch } from '../../store/csrf'
import * as bookingsActions from '../../store/bookings'
import * as reviewsActions from '../../store/reviews'
import './HistoryForm.css'
import Booking from './Booking/Booking';
import Reviews from './Reviews/Reviews';
import Spots from './Spots/Spots';




const HistoryForm = ({ setShowModal }) => {

    const dispatch = useDispatch();
    const bookings = useSelector(state => state.bookings)
    const user = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews)

    const [page, setPage] = useState('bookings');

    
    useEffect(() => {
        dispatch(bookingsActions.getBookingsThunk(user.id))
        dispatch(reviewsActions.getReviewsThunk(user.id))
    }, [dispatch])
    
    console.log('From HistoryFrom(reviews): ', reviews)

    return (
        <div 
            className='history-master'
            onClick={e => e.stopPropagation()}
            >
            <div className='history-buttons'>
                <button 
                className={
                    `btn-bookings 
                    ${page === 'bookings' ? 'solid-red' : ''}`
                }
                onClick={() => {setPage('bookings')}}
                >Bookings</button>
                <button 
                className={
                    `btn-reviews 
                    ${page === 'reviews' ? 'solid-blue' : ''}` 
                }
                onClick={() => { setPage('reviews') }}
                >Reviews</button>
                <button 
                    className={`btn-spots 
                    ${page === 'spots' ? 'solid-green' : ''}`
                }
                onClick={() => { setPage('spots') }}
                >Spots</button>
            </div>
            <div className='sub-history'>
                {page === 'bookings' && <Booking bookings={bookings} />}
                {page === 'reviews' && <Reviews reviews={reviews}/>}
                {page === 'spots' && <Spots/>}
            </div>
        </div>
    )
};

export default HistoryForm;