import { useEffect, useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import * as reviewsActions from '../../store/reviews'
import './ReviewForm.css'

function ReviewForm( { updateData, spotId, setShowModal } ) {

    console.log('UPDATE DATA: ', updateData)
    const dispatch = useDispatch()

    let cleanlinessData = null
    let communicationData = null
    let checkInData = null
    let accuracyData = null
    let locationData = null
    let valueData = null
    let reviewContentData = null

    if (updateData) {
        cleanlinessData = updateData.cleanliness;
        communicationData = updateData.communication;
        checkInData = updateData.checkIn;
        accuracyData = updateData.accuracy;
        locationData = updateData.location;
        valueData = updateData.value;
        reviewContentData = updateData.reviewContent
    }

    // console.log(cleanlinessData, communicationData, checkInData, accuracyData, locationData, valueData, reviewContentData)

    const [cleanliness, setCleanliness] = useState( updateData ? cleanlinessData : null)
    const [communication, setCommunication] = useState( updateData ? communicationData : null)
    const [checkIn, setCheckIn] = useState( updateData ? checkInData : null)
    const [accuracy, setAccuracy] = useState( updateData ? accuracyData : null)
    const [location, setLocation] = useState( updateData ? locationData : null)
    const [value, setValue] = useState( updateData ? valueData : null)
    const [reviewContent, setReviewContent] = useState( updateData ? reviewContentData : '')
    const [radiosChecked, setRadiosChecked] = useState( updateData ? true : false)
    const [validationErrors, setValidationErrors] = useState( [] )

    const user = useSelector(state => state.session.user)

    console.log('Spot and User ID"s: ', user.id, spotId )

    useEffect(() => {
        let errors = []
        if (null !== cleanliness && communication && checkIn && accuracy && location && value && true) setRadiosChecked(true);
        if (reviewContent.length > 300) errors.push('Max Charactors Limit of 300') 
        if (reviewContent.length <= 0) errors.push('Must Leave Summary of Experience')
        setValidationErrors(errors)
    }, [cleanliness, communication, checkIn, accuracy, location, value, radiosChecked, reviewContent])

    const handleSubmit = (e) => {
        e.preventDefault()
        const reviewData = {
            cleanliness,
            communication, 
            checkIn, 
            accuracy, 
            location, 
            value,
            reviewContent,
            spotId,
            userId: user.id
        }

        if (updateData) {
            dispatch(reviewsActions.editReviewThunk(reviewData, updateData.id))
        } else {
            dispatch(reviewsActions.postReviewThunk(reviewData))
        }

        setShowModal(false)
    }

    return (
        <div className='review-form-container'>
            <form>
                <div className='review-radio-buttons'>
                    {
                        [
                            { name: 'cleanliness', variable: cleanliness, setter: setCleanliness },
                            { name: 'communication', variable: communication, setter: setCommunication },
                            { name: 'checkIn', variable: checkIn, setter: setCheckIn },
                            { name: 'accuracy', variable: accuracy, setter: setAccuracy },
                            { name: 'location', variable: location, setter: setLocation },
                            { name: 'value', variable: value, setter: setValue }
                        ].map(categoryObj => {return (
                        <div key={`input-div-cont-${categoryObj.name}`} className='review-buttons-row-container'>
                            <label>{categoryObj.name}</label>
                            <div key={`input-div-${categoryObj.name}`} className='reviews-buttons-row'>
                                {[
                                    { ratingNum: 1, title: 'Very Bad'},
                                    { ratingNum: 2, title: 'Bad' },
                                    { ratingNum: 3, title: 'Ok' },
                                    { ratingNum: 4, title: 'Good' },
                                    { ratingNum: 5, title: 'Very Good' }
                                ].map((categoryData, i) => {return (
                                <div key={`input-div-${i}${categoryObj.name}`} >
                                    <label key={`input-label-${i}${categoryObj.name}`} name={categoryObj.name}>{categoryData.title}</label>
                                    <input
                                        key={`input-${i}${categoryObj.name}`}
                                        type='radio'
                                        value={categoryData.ratingNum}
                                        name={categoryObj.name}
                                        onChange={(e) => categoryObj.setter(categoryData.ratingNum)}
                                        checked={categoryObj.variable === categoryData.ratingNum}
                                    />
                                </div>
                                )})}
                            </div>
                        </div>
                    )})}
                </div>
                <div className='review-content'>
                    <ul>
                        {
                        !!validationErrors.length && 
                        validationErrors.map((err, i) => (<li key={`rev-${i}`}>{err}</li>))
                        }
                    </ul>
                    <textarea
                    value={reviewContent}
                    onChange={(e) => setReviewContent(e.target.value)}
                    >

                    </textarea>
                </div>
                <div className='button-div'>
                    <button 
                        type='submit' 
                        onClick={(e) => handleSubmit(e)}
                        disabled={!radiosChecked || !!validationErrors.length}
                    >Submit Review</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm