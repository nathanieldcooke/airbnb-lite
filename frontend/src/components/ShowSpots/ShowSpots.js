import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import * as spotsActions from '../../store/spots'
import Map from './Map/Map';
import Spots from './Spots/Spots';
import './ShowSpots.css'
import Footer from '../Footer/Footer';


const ShowSpots = () => {
    const dispatch = useDispatch();
    const spotsArr = useSelector(state => state.spots)
    const link = useParams().link
    
    useEffect(() => {
        if (link === 'top-rated') { dispatch(spotsActions.getSpotsThunk('top-rated')) }
        else if (link === 'bring-children') { dispatch(spotsActions.getSpotsThunk('bring-children')) }
        else if (link === 'bring-infants') { dispatch(spotsActions.getSpotsThunk('bring-infants')) }
        else if (link === 'budget') { dispatch(spotsActions.getSpotsThunk('budget')) }
        const [newLink, data] = link.split('::')
        if (newLink === 'check-in') { dispatch(spotsActions.getSpotsThunk(`${newLink}::${data}`)) }
        else if (newLink === 'check-out') { dispatch(spotsActions.getSpotsThunk(`${newLink}::${data}`)) }
        else if (newLink === 'guests') { dispatch(spotsActions.getSpotsThunk(`${newLink}::${data}`)) }
    }, [dispatch, link])

    return (
        <>
            <div className='random-test'>
                <Spots spotsArr={spotsArr}/>
                <Map spotsArr={spotsArr}/>
            </div>
            <Footer/>
        </>
       
    )
}

export default ShowSpots






