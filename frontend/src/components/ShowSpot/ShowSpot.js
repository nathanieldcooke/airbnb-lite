import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import * as spotsActions from '../../store/spot'
import './ShowSpot.css'
import DisplaySpot from './DisplaySpot/DisplaySpot'
// import BookSpot from './BookSpot/BookSpot'
import ReviewSpot from './ReviewSpot/ReviewSpot'
import Footer from '../Footer/Footer'


const ShowSpot = () => {
    const dispatch = useDispatch();
    const spotId = useParams().spotId
    useEffect( () => {
        dispatch(spotsActions.getSpotThunk(spotId));
    }, [dispatch])
    return (
        <div className='show-spot-container'>
            <DisplaySpot/>
            <ReviewSpot/>
            <Footer />
            {/* <BookSpot/> */}
        </div>
    )
};

export default ShowSpot