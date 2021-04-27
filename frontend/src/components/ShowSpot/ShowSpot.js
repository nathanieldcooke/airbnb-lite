import { csrfFetch } from '../../store/csrf'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import './ShowSpot.css'
import DisplaySpot from './DisplaySpot/DisplaySpot'
import BookSpot from './BookSpot/BookSpot'
import ReviewSpot from './ReviewSpot/ReviewSpot'


const ShowSpot = () => {
    // const dispatch = useDispatch();
    const spotsArr = useSelector(state => state.spots)
    const spotId = useParams().spotId
    let [spot, setSpot] = useState([])
    console.log('ShowSpots spotsArr: ', spotsArr)
    console.log('ShowSpots spotId: ', spotId)
    useEffect( async () => {
        const response = await csrfFetch(`/api/spots/${spotId}`);
        const newSpot = await response.json();
        setSpot(newSpot)
    }, [])

    // const response = await csrfFetch(`/api/spot/${spotId}`);
    // const spots = await response.json();

    // let spot = spotsArr.find(spot => spot.id === spotId)


    console.log(spot)
    return (
        <div className='show-spot-container'>
            <DisplaySpot/>
            <BookSpot/>
            <ReviewSpot/>
            <div>{spot.id} hello</div>
        </div>
    )
};

export default ShowSpot