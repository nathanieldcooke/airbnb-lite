import { useSelector } from 'react-redux'
import BookingFormModal from '../../BookingFormModal/BookingFormModal'
import ReviewComments from './ReviewComments/ReviewComments'
import ReviewScale from './ReviewScale/ReviewScale'
import './ReviewSpot.css'

const ReviewSpot = () => {

    const spot = useSelector(state => state.spot)
    const user = useSelector(state => state.session.user)

    const reviews = spot.Reviews?.map((review, i) => <ReviewComments key={`recCom${i}`} review={review} />)
    let i = reviews?.length
    while (i < 6) {
        reviews.push(<ReviewComments key={`recCom${i}`} review={null}/>);
        i++
    }


    return (
        <div className='review-spot-container' id='reviews-below'>
            <div className='sub-review-spot-container'>
            <div className='review-navbar-space-holder'></div>
                <div className='review-spot-review-star'><span><i className="fas fa-star"></i> {spot.rating} ({spot.Reviews?.length} reviews)</span></div>
                <div className='reveiw-spot-six-fields'>
                    <div className='review-spot-left'>
                        <ReviewScale text='Cleanliness' objkey='cleanliness'/>
                        <ReviewScale text='Communication' objkey='communication'/>
                        <ReviewScale text='Check-in' objkey='checkIn'/>
                    </div>
                    <div className='review-spot-right' objkey=''>
                        <ReviewScale text='Accuracy' objkey='accuracy'/>
                        <ReviewScale text='Location' objkey='location'/>
                        <ReviewScale text='Value' objkey='value'/>
                    </div>
                </div>
                <div className='review-comments'>
                    {reviews}
                </div>
                <div >
                    {
                        user ?
                        <span className='review-book-now-btn is-logged-in'> <BookingFormModal text={"Book Now"}/></span> :
                        <span className='review-book-now-btn'> <button disabled={true}>Book Now</button></span>


                    }
                </div>
            </div>
        </div>
    )
}

export default ReviewSpot