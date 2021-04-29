import {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import './BookingForm.css'


const BookingForm = () => {

    const [dateIn, setDateIn] = useState(new Date());
    const [dateOut, setDateOut] = useState(new Date());
    const [date, setDate] = useState(new Date())

    const [page, setPage] = useState(1);
    const setDateCheckIn = date => {
        // console.log(date)
        setDateIn(date)
    }
    const setDateCheckOut = date => {
        // console.log(date)
        setDateOut(date)
    } 



    const tileClassName = ( dateIn ) => { 
        let sDate = date.toString().split(' ').splice(0, 3).join()
        let sDateIn = dateIn.date.toString().split(' ').splice(0, 3).join()
        console.log(sDate === sDateIn)
        return sDateIn === sDate ? 'red' : null;
    }
    // useEffect(() => {

    // }, []);
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
                <div className='book-title'>
                    <span>Please Choose A Check-Out Date:</span>
                </div>
                <Calendar
                    onChange={setDateCheckOut}
                    value={dateOut}
                    className='react-calender'
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
    } else if (page === 3 ) {
        return (
            <div className='booking-form'>
                <div className='book-title'>
                    <span>Please Click Confirm:</span>
                </div>
                <div className='step-3-text'>
                    <span>Your Booked a Stay at:</span>
                    <span>Place I'm Staing</span>
                    <span>For CheckIn at: </span>
                    <span>TIME</span>
                    <span>For CheckOut at:</span>
                    <span>Amounting to:</span>
                    <span>Total Cost</span>
                    <span>Click Confirm to Charge Account</span>
                </div>
                <div className='book-buttons'>
                    <button
                        className='back-step'
                        onClick={() => { setPage(2) }}
                    >back</button>
                    <button
                        className='next-step'
                        // onClick={() => { setPage(3) }}
                    >Confirm</button>
                </div>
            </div>
        )
    }
};

export default BookingForm;