import {useState, useEffect} from 'react';
import { useSelector, useDispatch, connectAdvanced } from 'react-redux'
import Calendar from 'react-calendar';
import './BookingForm.css'



const BookingForm = () => {

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

    const spot = useSelector(state => state.spot)

    var getDaysArray = function (start, end) {
        for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };

    const allBookedDayArray = (start, end) => {
        console.log(start)
        console.log(end)
        console.log('-[[[[[[[[[[[[[[[[')
        var daylist = getDaysArray(new Date(start), new Date(end));
        daylist.map((v) => v.toISOString().slice(0, 10)).join("")
        return daylist

    }

    const convertSQLDate = (date) => {
        date = date.toString().split('T')[0].split('-').splice(1, 3).map(numS => Number(numS))
        return date
    }

    const convertCalenderDate = (date) => {
        // console.log(date.toString().split(' ').splice(1,2))
        date = date.toString().split(' ').splice(1, 2)
        date[0] = monthToNum[date[0]]
        date[1] = Number(date[1])
        // console.log("val" ,date.join(' '))
        return date.join(' ')
    }
    const spotBookings = spot.Bookings.map(booking => {
        return allBookedDayArray(...[convertSQLDate(booking.checkIn), convertSQLDate(booking.checkOut)]) 
    })
    .map(bookingArr => bookingArr
    .map(booking => convertCalenderDate(booking)))
    .reduce((acc, subArr) => {
        acc.push(...subArr)
        return acc
    }, [])
    // .map(booking => convertCalenderDate(booking))
    


    console.log(spotBookings)
    console.log(spot)
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
        // let sDate = date.toString().split(' ').splice(0, 3).join()
        // let sDateIn = dateIn.date.toString().split(' ').splice(0, 3).join()
        // // console.log(sDate === sDateIn)
        // return sDateIn === sDate ? 'red' : null;
    }

    const tileDisabled = ({ activeStartDate, date, view }) => {
        // console.log(date)
        // console.log('String: ', convertCalenderDate(date))
        return spotBookings.includes(convertCalenderDate(date))
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