import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ShowCaseBox.css'
        // later also an img
function ShowCaseBox ({id, title, src}) {
    // const spots = useSelector(state => state.spots)
    const [redirect, setRedirect] = useState(false)
    const [link, setLink] = useState('')
    const history = useHistory()

    const handelSearchClick = (e) => {
        const spotsCollection = e.target.id
        if (spotsCollection === '1') { setLink('top-rated') }
        else if (spotsCollection === '2') { setLink('bring-children') }
        else if (spotsCollection === '3') { setLink('bring-infants') }
        else if (spotsCollection === '4') { setLink('budget') }
        setRedirect(true)
        // history.push(`/spots/${link}`)
    }
    
    
    if (redirect) {
        history.push(`/spots/${link}`)
        // return (<Redirect to={`/spots/${link}`} />)
    }

    return (
        <div onClick={(e) => handelSearchClick(e)} className='show-case-box'>
            <span>{title}</span>
            <div className='image'>
                <img src={`${src}`} alt='property' id={id}/>
            </div>
        </div>
    )
}

export default ShowCaseBox