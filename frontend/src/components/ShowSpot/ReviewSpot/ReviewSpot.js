import { useSelector } from 'react-redux'
import ReviewComments from './ReviewComments/ReviewComments'
import ReviewScale from './ReviewScale/ReviewScale'
import './ReviewSpot.css'

const ReviewSpot = () => {

    const spot = useSelector(state => state.spot)

    return (
        <div className='review-spot-container'>
            <div className='review-navbar-space-holder'></div>
            <div className='sub-review-spot-container'>
                <div className='review-spot-review-star'><span><i className="fas fa-star"></i> {spot.rating} ({spot.Reviews?.length} reviews)</span></div>
                <div className='reveiw-spot-six-fields'>
                    <div className='review-spot-left'>
                        <ReviewScale text='Cleanliness' objKey='cleanliness'/>
                        <ReviewScale text='Communication' objKey='communication'/>
                        <ReviewScale text='Check-in' objKey='checkIn'/>
                    </div>
                    <div className='review-spot-right' objKey=''>
                        <ReviewScale text='Accuracy' objKey='accuracy'/>
                        <ReviewScale text='Location' objKey='location'/>
                        <ReviewScale text='Value' objKey='value'/>
                    </div>
                </div>
                <div className='review-comments'>
                    <ReviewComments />
                    <ReviewComments />
                    <ReviewComments />
                    <ReviewComments />
                    <ReviewComments />
                    <ReviewComments />

                </div>
                <button>Book Now</button>
            </div>
        </div>
    )
}

export default ReviewSpot