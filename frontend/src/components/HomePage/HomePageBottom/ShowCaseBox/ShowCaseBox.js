import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as spotsActions from '../../../../store/spots'
import './ShowCaseBox.css'
        // later also an img
function ShowCaseBox ({id, title, src}) {
    const dispatch = useDispatch();
    // const spots = useSelector(state => state.spots)
    const [redirect, setRedirect] = useState(false)

    const handelSearchClick = (e) => {
        console.log(e.target.id)
        const spotsCollection = e.target.id
        if (spotsCollection === '1') { dispatch(spotsActions.getSpotsThunk('top-rated')) }
        else if (spotsCollection === '2') { dispatch(spotsActions.getSpotsThunk('bring-children')) }
        else if (spotsCollection === '3') { dispatch(spotsActions.getSpotsThunk('bring-infants')) }
        else if (spotsCollection === '4') { dispatch(spotsActions.getSpotsThunk('budget')) }
        setRedirect(true)
    }

    if (redirect) return (<Redirect to="/spots" />)

    return (
        <div onClick={(e) => {handelSearchClick(e)}} className='show-case-box'>
            <span>{title}</span>
            <div className='image'>
                <img src={`${src}`} id={id}/>
            </div>
        </div>
    )
}

export default ShowCaseBox