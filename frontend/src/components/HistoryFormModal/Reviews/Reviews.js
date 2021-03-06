import { useDispatch } from 'react-redux'
import * as reviewsActions from '../../../store/reviews'
import ReviewFormModal from '../../ReviewFormModal/ReviewFormModal'
import './Reviews.css'

const Reviews = ( { reviewsObj, stayedAtHistoryObj, spotsStayedAt } ) => {
    const dispatch = useDispatch()

    const deleteReview = (id) => {
        dispatch(reviewsActions.deleteReviewThunk(id))
    }

    return (
        <div className='history-reviews'>
            {spotsStayedAt.map((spotId, i) => {
                /// make component for review left at spot 
                if (reviewsObj[spotId]) {
                    let review = reviewsObj[spotId]
            return (
                        <div key={`hist-rev-${i}`} className='history-review-left'>
                            <span>For Stay At: <span> {review.Spot?.title}</span></span>
                        <span><i className="fas fa-star"></i> {
                        ((review.cleanliness + review.communication + review.checkIn + review.accuracy + review.location + review.value) / 6).toFixed(2)
                        }</span>
                            <div className='review-buttons'>
                                <button
                                    onClick={() => {deleteReview(reviewsObj[spotId].id)}}
                                >Delete Review</button>
                            <button><ReviewFormModal updateData={reviewsObj[spotId]} spotId={spotId} text='Edit Review' /></button>
                            </div>
                        </div>
                    )
                } else {
                    /// make component for review not left at spot
                    let spot = stayedAtHistoryObj[spotId]
                    return (
                        <div key={`hist-rev-${i}`} className='history-review-not-left'>
                            <span>You Stayed At: <span> {spot.title}</span></span>
                            <div className='review-buttons'>
                                <button><ReviewFormModal spotId={spotId} text='Leave Review'/></button>
                            </div>
                        </div>
                    )
                }   
            }).reverse()}
        </div>
    )
}

export default Reviews