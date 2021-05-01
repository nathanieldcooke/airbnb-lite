import {useState} from 'react';
import './LoggedOut.css'
import LoginFormModal from '../../../LoginFormModal/LoginFormModal';
import SignupFormModal from '../../../SignupFormModal/SignupFormModal';


const LoggedOut = ( { display } ) => {
    const [_displayLogIn, setDisplayLogIn] = useState(false);
    return (
        <>
            <div className='login-modal'></div>
            <div className='spacer-div'>

            </div>
            <div className={`profile-btn-dropdown ${display} `}>
                <div onClick={() => {setDisplayLogIn(true)}}>
                    <span><LoginFormModal/></span>
                </div>
                <div>
                    <span><SignupFormModal/></span>
                </div>
                <div>
                    <span>Demo Login</span>
                </div>
                <div>
                    <span>Demo SignUp</span>
                </div>
                <div>
                    <span>Demo Host SignUp</span>
                </div>
            </div>
        </>
    )
}

export default LoggedOut