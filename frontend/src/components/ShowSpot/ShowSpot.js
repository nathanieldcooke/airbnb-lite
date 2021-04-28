import { csrfFetch } from '../../store/csrf'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import * as spotsActions from '../../store/spot'
import './ShowSpot.css'
import DisplaySpot from './DisplaySpot/DisplaySpot'
import BookSpot from './BookSpot/BookSpot'
import ReviewSpot from './ReviewSpot/ReviewSpot'


const ShowSpot = () => {
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spot)
    const spotId = useParams().spotId
    useEffect( async () => {
        dispatch(spotsActions.getSpotThunk(spotId));
    }, [dispatch])
    console.log(spot)
    return (
        <div className='show-spot-container'>
            <DisplaySpot/>
            <ReviewSpot/>
            {/* <BookSpot/> */}
        </div>
    )
};

export default ShowSpot