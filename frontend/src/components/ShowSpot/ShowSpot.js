import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import './ShowSpot.css'
import DisplaySpot from './DisplaySpot/DisplaySpot'
import BookSpot from './BookSpot/BookSpot'
import ReviewSpot from './ReviewSpot/ReviewSpot'


const ShowSpot = () => {
    const dispatch = useDispatch();
    const spotsArr = useSelector(state => state.spots)
    const spotId = useParams().spotId
    console.log('ShowSpots spotsArr: ', spotsArr)
    console.log('ShowSpots spotId: ', spotId)

    // let spot = spotsArr.find(spot => spot.id === spotId)

    return (
        <div className='show-spot-container'>
            <DisplaySpot/>
            <BookSpot/>
            <ReviewSpot/>
        </div>
    )
};

export default ShowSpot