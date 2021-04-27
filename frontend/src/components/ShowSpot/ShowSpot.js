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
    const spotId = useParams().spotId
    let [spot, setSpot] = useState([])
    useEffect( async () => {
        const response = await csrfFetch(`/api/spots/${spotId}`);
        const newSpot = await response.json();
        setSpot(newSpot)
    }, [])
    console.log(spot)
    return (
        <div className='show-spot-container'>
            <DisplaySpot spot={spot}/>
            <BookSpot/>
            <ReviewSpot/>
            <div>{spot.id} hello</div>
        </div>
    )
};

export default ShowSpot