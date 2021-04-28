import { useSelector } from 'react-redux'
import './ReviewScale.css'

const ReviewScale = ({text, objKey}) => {

    const spot = useSelector(state => state.spot)

    let categoryRating = (spot.Reviews?.reduce((acc, revObj) => {
        return revObj[objKey] + acc;
    }, 0) / spot.Reviews?.length).toFixed(2)

    return (
        <div className='review-scale'>
            <span>{text}</span>

            <div className='value-scale'>
                <div className='glass'>
                    <div className='fluid' style={{width: `${categoryRating * 1.5}em`}}></div>
                </div>
                <span>{categoryRating}</span>
            </div>
        </div>
    )
}

export default ReviewScale