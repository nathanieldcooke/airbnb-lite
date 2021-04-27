import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import * as spotsActions from '../../store/spots'
import Map from './Map/Map';
import Spots from './Spots/Spots';
import './ShowSpots.css'


const ShowSpots = () => {
    const dispatch = useDispatch();
    const spotsArr = useSelector(state => state.spots)
    console.log(spotsArr)
    const link = useParams().link
    console.log(link)
    
    useEffect(() => {
        if (link === 'top-rated') { dispatch(spotsActions.getSpotsThunk('top-rated')) }
        else if (link === 'bring-children') { dispatch(spotsActions.getSpotsThunk('bring-children')) }
        else if (link === 'bring-infants') { dispatch(spotsActions.getSpotsThunk('bring-infants')) }
        else if (link === 'budget') { dispatch(spotsActions.getSpotsThunk('budget')) }
    }, [dispatch])



    // let spotsArr = null
    // if (Object.keys(spots)[0]) {
        // let spotsArr = []
        // console.log("This is Spots: ", spots)
        // for (let spotId in spots) {
        //     // console.log(spots[spotId])
        //     // let newObj = {}
        //     // newObj[spotId] = spots[spotId]
        //     spotsArr.push(spots[spotId])
        // }
    // } else {
    //     spotsArr = []
    // }

    // console.log("My Console Log of Object: ", Object.keys(spots))
    // console.log(spots)
    // console.log(spotsArr)

    

    return (
        <div className='random-test'>
            <Spots spotsArr={spotsArr}/>
            <Map />
        </div>
       
    )
}

export default ShowSpots






