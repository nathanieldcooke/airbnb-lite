import {useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import Calendar from 'react-calendar';
import * as bookingActions from '../../store/bookings'
import './BookingForm.css'



const BookingForm = ( { updateData, setShowModal } ) => {

    const dispatch = useDispatch()

    let spot = useSelector(state => state.spot)
    const user = useSelector(state => state.session.user)
    const bookings = useSelector(state => state.bookings)

    let checkInData = null; 
    let checkOutData = null; 
    let childrenData = null; 
    let infantsData = null; 
    let numOfGuestsData = null; 
    if (updateData) {
        spot = updateData.Spot
        checkInData = updateData.checkIn
        checkOutData = updateData.checkOut
        childrenData = updateData.children
        infantsData = updateData.infants
        numOfGuestsData = updateData.numOfGuests
    }


    
    // const dispatch = useDispatch();

    
    const monthToNum = {
        Jan: 1,
        Feb: 2, 
        Mar: 3, 
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12
    }
    
    const convertCalenderDate = (date) => {
        date = date.toString().split(' ').splice(1, 2)
        date[0] = monthToNum[date[0]]
        date[1] = Number(date[1])
        return date.join(' ')
    }
    
    
    const getDaysArray = function (start, end) {
        let arr = []
        for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
            arr.push(convertCalenderDate(new Date(dt)));
        }
        return arr.map(date => {
            date = date.toString().split(' ')
            if (date[1].length === 1) {
                date[1] = `0${date[1]}`
                return date.join(' ');
            } else {
                return date.join(' ')
            }
        })
    };
    
    const setDateCheckIn = date => {
        setDateIn(date)
        setDateOut(date)
    }
    const setDateCheckOut = date => {
        setDateOut(date)
    } 
    
    const tileClassName = ( dateSelected ) => { 
        dateSelected = dateSelected.date.toString().split(' ').splice(1, 2)
        dateSelected[0] = monthToNum[dateSelected[0]]
        dateSelected = dateSelected.join(' ') 
        return selectedDates.includes(dateSelected) ? 'green' : null;
    }

    const closingAction = async () => {

        // dispatch(bookingActions.makeBookingThunk(spot, )

        setPage('success')
        setTimeout(() => {
            setShowModal(false)
        }, 5000)



        let bookingData = {
            checkIn: dateIn,
            checkOut: dateOut,
            children: children,
            infants: infants,
            numOfGuests: guests,
            spotId: spot.id,
            userId: user.id
        }

        // add a fetch request to put booking in database. 

        if (updateData) {
            dispatch(bookingActions.updateBookingThunk(bookingData, updateData.id))
        } else {
            dispatch(bookingActions.makeBookingThunk(bookingData))
        }
        // await dispatch(spotsActions.getSpotsThunk('top-rated'))
        // await csrfFetch('/api/bookings/', {
        //     method: 'POST',
        //     body: JSON.stringify(bookingData)
        // });

        
    }
    
    const [dateIn, setDateIn] = useState(updateData ? new Date(checkInData) : new Date());
    const [dateOut, setDateOut] = useState(updateData ? new Date(checkOutData) : new Date());
    const [selectedDates, setSelectedDates] = useState([convertCalenderDate(dateIn), dateOut])
    const [page, setPage] = useState(1);
    const [children, setChildren] = useState(updateData ? childrenData : false)
    const [infants, setInfants] = useState(updateData ? infantsData : false)
    const [guests, setGuests] = useState(updateData ? numOfGuestsData : 1)
    const [validationErrors, setValidationErrors] = useState([])

    if (!spot.Bookings) spot.Bookings = bookings
    const dateTaken = (dateIn, dateOut) => {
        let dI = dateIn
        let dO = dateOut
        return spot.Bookings.some(booking => {
            if (new Date(booking.checkIn).getTime() > dI && new Date(booking.checkOut).getTime() < dO) {
                return true;
            } else {
                return false;
            }
        })

    }

    useEffect(() => {
        let daysArr = getDaysArray(dateIn, dateOut)
        setSelectedDates(daysArr)
    }, [dateIn, dateOut]) 

    useEffect(() => {
        const errors = [];

        if (spot.childrenAllowed === false && children === true)  errors.push('Children are not allowed')
        if (spot.infantsAllowed === false && infants === true) errors.push('Infants are not allowed')
        if (spot.maxGuests < guests) errors.push(`A max of ${spot.maxGuests} guests ar Allowed`)
        if (guests <= 0) errors.push(`There must be at least 1 guest`)
        if (selectedDates.length < spot.minimumStay) errors.push(`The minimum stay here is ${spot.minimumStay} day`)
        if (dateTaken(dateIn, dateOut)) errors.push('Your dates cannot surround taken appointment')
        setValidationErrors(errors)

    }, [children, infants, guests, selectedDates, dateIn, dateOut])

    const tileDisabled = ({ activeStartDate, date, view }) => {
        let d = new Date(date).getTime()
        return spot.Bookings.some(booking => {
            if (new Date(booking.checkIn).getTime() < d && new Date(booking.checkOut).getTime() > d) {
                return true 
            } else {
                return false
            }
        })

    }

    if (page === 1) {
        return (
            <div className='booking-form'>
                <div className='book-title'>
                    <span>Please Choose A Check-In Date:</span>
                </div>
                <Calendar
                    onChange={setDateCheckIn}
                    value={dateIn}
                    className='react-calender'
                    tileClassName={tileClassName}
                    tileDisabled={tileDisabled}
                />
                <div className='book-buttons'>
                    <button disabled={true} className='back-step'>back</button>
                    <button 
                        className='next-step'
                        onClick={() => {setPage(2)}}
                    >Next</button>
                </div>
            </div>
        )
    } else if (page === 2) {
        return (
            <div className='booking-form'>
                <div className="errors">
                    {validationErrors.map((el, i) => <div key={`${i}-err`}>{el}</div>)}
                </div>
                <div className='book-title'>
                    <span>Please Choose A Check-Out Date:</span>
                </div>
                <Calendar
                    onChange={setDateCheckOut}
                    value={dateOut}
                    className='react-calender'
                    tileClassName={tileClassName}
                    tileDisabled={tileDisabled}
                />
                <div className='book-buttons'>
                    <button 
                        className='back-step'
                        onClick={() => { setPage(1) }}
                    >back</button>
                    <button 
                        className='next-step'
                        onClick={() => { setPage(3) }}
                    >Next</button>
                </div>
            </div>
        )
    } else if (page === 3) {
        return (
            <div className='booking-form'>
                <div className="errors">
                    {validationErrors.map((el, i) => <div key={`${i}-err`}>{el}</div>)}
                </div>
                <div className='book-title'>
                    <span>Please Answer Fields Below:</span>
                </div>
                <div className='step-3-text'>
                    <span>Will there be Children(Age: 3-13)</span>
                    <label>
                        <input
                            type="radio"
                            value='no'
                            name="children"
                            onChange={(e) => setChildren(false)}
                            checked={children === false}
                        />
                        No
                        </label>
                        <label>
                        <input
                            type="radio"
                            value='yes'
                            name="children"
                            onChange={(e) => setChildren(true)}
                            checked={children === true}
                        />
                        Yes
                        </label>
                    <span>Will there be Infants(Age: 0-2) </span>
                    <label>
                        <input
                            type="radio"
                            value='no'
                            name="infants"
                            onChange={(e) => setInfants(false)}
                            checked={infants === false}
                        />
                        No
                        </label>
                    <label>
                        <input
                            type="radio"
                            value='yes'
                            name="infants"
                            onChange={(e) => setInfants(true)}
                            checked={infants === true}
                        />
                        Yes
                        </label>
                    <span>The Number of Guests: {`Max Guests: ${spot.maxGuests}`}</span>
                    <label>
                        <input
                            type="number"
                            name="sweetness"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />
                    </label>
                </div>
                <div className='book-buttons'>
                    <button
                        className='back-step'
                        onClick={() => { setPage(2) }}
                    >back</button>
                    <button
                        className='next-step'
                        onClick={() => { setPage(4) }}
                    >Next</button>
                </div>
            </div>
        )
    } else if (page === 4) {
        return (
            <div className='booking-form'>
                <div className="errors">
                    {validationErrors.map((el, i) => <div key={`${i}-err`}>{el}</div>)}
                </div>
                <div className='book-title'>
                    <span>Please Click Confirm:</span>
                </div>
                <div className='step-3-text'>
                    <span>Your Booked a Stay at:</span>
                    <span>{spot.title}</span>
                    <span>For CheckIn at: </span>
                    <span>{(convertCalenderDate(dateIn) + " " + new Date().getFullYear()).split(' ').join('-')}</span>
                    <span>For CheckOut at:</span>
                    <span>{(convertCalenderDate(dateOut) + " " + new Date().getFullYear()).split(' ').join('-')}</span>
                    <span>Amounting to:</span>
                    <span>{`$${spot.price * selectedDates.length} @ $${spot.price}/night`}</span>
                    <span>Click Confirm to Charge Account</span>
                </div>
                <div className='book-buttons'>
                    <button
                        className='back-step'
                        onClick={() => { setPage(3) }}
                    >back</button>
                    <button
                        className='next-step'
                        disabled={validationErrors.length}
                        onClick={() => closingAction()}
                    // onClick={() => { setPage(3) }}
                    >Confirm</button>
                </div>
            </div>
        )
    } else if (page === 'success') {
        return (
            <div className='booking-form'>
                <div className='booking-success'>
                    <span className='success'>Successful Booking</span>
                    <span className='visit' >Visit Booking History to make Changes</span>
                </div>
            </div>
        )
    }

};

export default BookingForm;