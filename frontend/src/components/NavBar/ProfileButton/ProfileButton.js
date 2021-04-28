import { useState, useEffect } from 'react';
import ProfileBtn from '../../DropDowns/ProfileBtn/ProfileBtn'
import './ProfileButton.css'

function ProfileButton () {

    let [display, setDisplay] = useState('hidden');


    // function setDisplayHelperEnter(e) {

    //     console.log("THis is E:",e.target.className)
    //     if (e.target.className === 'profile-button-icon-container') {
    //         setDisplay(display ? '' : 'hidden');
    //         e.stopPropagation();
    //         return
    //     }
    //     setDisplay('hidden')
    // }

    return (
        <div className='profile-btn-dropdown-conntainer'
        onClick={((e) => { display === '' ? setDisplay('hidden') : setDisplay('')})}
        onMouseLeave={((e) => { setDisplay('hidden') })}
        >
            <div className='profile-button-icon-container'>
                <i className="fas fa-bars"></i>
                <i className="fas fa-user-circle"></i>
            </div>
            {/* <div className='spacer-div'>

            </div> */}
            <ProfileBtn display={display}/>
        </div>
    )
}

export default ProfileButton