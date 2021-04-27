import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from './Map/Map';
import './ShowSpots.css'
import Spots from './Spots/Spots';


const ShowSpots = () => {
    const spotsArr = useSelector(state => state.spots)
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






