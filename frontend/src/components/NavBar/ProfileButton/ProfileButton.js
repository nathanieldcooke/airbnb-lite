import { useState } from 'react';
import ProfileBtn from '../../DropDowns/ProfileBtn/ProfileBtn'
import './ProfileButton.css'

function ProfileButton () {

    let [display, setDisplay] = useState('hidden');

    return (
        <div className='profile-btn-dropdown-conntainer'
        onClick={((e) => { display === '' ? setDisplay('hidden') : setDisplay('')})}
        onMouseLeave={((e) => { setDisplay('hidden') })}
        >
            <div className='profile-button-icon-container'>
                <i className="fas fa-bars"></i>
                <i className="fas fa-user-circle"></i>
            </div>
            <ProfileBtn display={display}/>
        </div>
    )
}

export default ProfileButton