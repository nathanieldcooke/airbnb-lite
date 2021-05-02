import { useState , useEffect } from 'react'
import { useHistory } from 'react-router'
import './Guests.css'

function Guests({ display }) {
  
    const history = useHistory()

    const [num, setNum] = useState(1)
    const [enablePlus, setEnablePlus] = useState(false)
    const [enableSubtract, setEnableSubtract] = useState(true)
    
    useEffect(() => {
        (num === 1) ? setEnableSubtract(true) : setEnableSubtract(false);
        (num === 99) ? setEnablePlus(true) : setEnablePlus(false);
    },[num])

    const handelSubmit = (e) => {
        e.preventDefault()
        history.push(`/spots/guests::${num}`)
    }

    return (
        <>
            <div className='guests-spacer-div'></div>
            <div className={`guests-btn-dropdown ${display}`}>
                <div className='add-val-sub-div'>
                    <button 
                        className='subtract'
                        onClick={(e) => {
                            e.preventDefault()
                            setNum(num - 1)
                        }}
                        disabled={enableSubtract}
                    >-</button>
                    <div className='val-div'>
                        <div className='val' >{num}</div>
                    </div>
                    <button 
                        className='add'
                        onClick={(e) => {
                            e.preventDefault()
                            setNum(num + 1)
                        }}
                        disabled={enablePlus}
                    >+</button>
                </div>
                <button
                    className='guest-search-btn'
                    onClick={(e) => handelSubmit(e)}
                >Search</button>
            </div>
        </>
    )
}

export default Guests