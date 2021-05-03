import './CheckOut.css'
import Calendar from 'react-calendar'
import { useState } from 'react'
import { useHistory } from 'react-router'



function CheckOut({ display }) {
    // const [redirect, setRedirect] = useState(false)
    // const [link, setLink] = useState('')
    const history = useHistory()

    const [dateOut, setDateCheckOut] = useState(new Date())

    const handelSubmit = (e) => {
        e.preventDefault()
        // setLink('check-in')

        history.push(`/spots/check-out::${dateOut}`)
    }

    // if (redirect) return (<Redirect to={`/spots/${link}`} />)

    return (
        <>
            {/* <div className='sub-search-bar-container'> */}
            <div className={`white-space-check-out ${display}`}></div>
            <div className={`calender-container ${display}`}>
                <span className='check-in-out-date'>Please Choose A Check-Out Date</span>
                <Calendar
                    onClick={e => e.stopPropagation}
                    onChange={setDateCheckOut}
                    value={dateOut}
                    className='react-calender'
                // tileClassName={tileClassName}
                // tileDisabled={tileDisabled}
                />
                <button
                    onClick={(e) => handelSubmit(e)}
                >Search</button>
            </div>
            {/* </div> */}
        </>
    )
}

export default CheckOut