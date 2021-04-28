import { useSelector } from 'react-redux';
import './ReviewComments.css'

const ReviewComments = ( { review } ) => {
    // const spot = useSelector(state => state.spot)
    
    let profileImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    // let user = spot.Reviews?.find(userObj)

    if (!review) return <div className='review-placeholder'></div>


    return (
        <div className='review-comment'>
            <div className='review-pic-name'>
                <img src={profileImg}></img>
                <span>{review.User?.username}</span>
                {/* <span>{review.User?.username}</span> */}
            </div>

            <div className='text-content'>{review.reviewContent}</div>
        </div>
    );
};

export default ReviewComments