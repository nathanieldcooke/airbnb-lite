import * as sessionActions from '../../../../store/session'
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';
import './LoggedOut.css'
import LoginFormModal from '../../../LoginFormModal/LoginFormModal';


const LoggedOut = ( { display } ) => {
    const dispatch = useDispatch();
    const [displayLogIn, setDisplayLogIn] = useState(false);
    const userSession = useSelector(state => state.session)
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
                    <span>SignUp</span>
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