import './ReviewSpot.css'

const ReviewSpot = () => {
    return (
        <div className='review-spot-container'>
            <div className='review-navbar-space-holder'></div>
            <div className='sub-review-spot-container'>
                <div className='review-spot-review-star'><span><i className="fas fa-star"></i> Num</span></div>
                <div className='reveiw-spot-six-fields'>
                    <div className='review-spot-left'>

                    </div>
                    <div className='review-spot-right'>

                    </div>
                </div>
                <div className='review-comments'>

                </div>
                <button>Show All NUM reviews</button>
            </div>
        </div>
    )
}

export default ReviewSpot