import { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as bookingsActions from '../../store/bookings'
import * as reviewsActions from '../../store/reviews'
import * as stayedAtHistoryActions from '../../store/stayedAtHistory'
import './HistoryForm.css'
import Booking from './Booking/Booking';
import Reviews from './Reviews/Reviews';
import Spots from './Spots/Spots';




const HistoryForm = ({ setShowModal }) => {

    const dispatch = useDispatch();
    const bookings = useSelector(state => state.bookings)
    const user = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews)
    const stayedAtHistory = useSelector(state => state.stayedAtHistory)


    const [page, setPage] = useState('bookings');

    
    useEffect(() => {
        dispatch(bookingsActions.getBookingsThunk(user.id))
        dispatch(reviewsActions.getReviewsThunk(user.id))
        dispatch(stayedAtHistoryActions.getStayedAtHistoryThunk(user.id))
    }, [dispatch])

    let spotsStayedAt = stayedAtHistory.map(sAH => sAH.spotId)
    const reviewsObj = {}
    reviews.forEach(review => reviewsObj[review.spotId] = review)

    const stayedAtHistoryObj = {}
    stayedAtHistory.forEach(spot => stayedAtHistoryObj[spot.Spot.id] = spot.Spot)

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
                {/* <button 
                    className={`btn-spots 
                    ${page === 'spots' ? 'solid-green' : ''}`
                }
                onClick={() => { setPage('spots') }}
                >Spots</button> */}
            </div>
            <div className='sub-history'>
                {page === 'bookings' && <Booking bookings={bookings} />}
                {page === 'reviews' && <Reviews stayedAtHistoryObj={stayedAtHistoryObj} spotsStayedAt={spotsStayedAt} reviewsObj={reviewsObj}/>}
                {/* {page === 'spots' && <Spots/>} */}
            </div>
        </div>
    )
};

export default HistoryForm;