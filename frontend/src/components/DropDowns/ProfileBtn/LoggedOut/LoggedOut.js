import {useState} from 'react';
import './LoggedOut.css'
import LoginFormModal from '../../../LoginFormModal/LoginFormModal';
import SignupFormModal from '../../../SignupFormModal/SignupFormModal';
import DemoSignupFormModal from '../../../DemoSignupFormModal/DemoSignupFormModal';


const LoggedOut = ( { display } ) => {
    const [_displayLogIn, setDisplayLogIn] = useState(false);
    return (
        <>
            <div className='login-modal'></div>
            <div className='spacer-div'>

            </div>
            <div className={`profile-btn-dropdown ${display} `}>
                <div className='logged-in-div' onClick={() => {setDisplayLogIn(true)}}>
                    <span className='logged-in-span' ><LoginFormModal/></span>
                </div>
                <div className='logged-in-div'>
                    <span className='logged-in-span' ><SignupFormModal/></span>
                </div>
                <div className='logged-in-div'>
                    <span className='logged-in-span' ><DemoSignupFormModal/></span>
                </div>
            </div>
        </>
    )
}

export default LoggedOut