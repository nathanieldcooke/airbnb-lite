import * as sessionActions from '../../../store/session'
import { useDispatch, useSelector } from 'react-redux';
import './ProfileBtn.css'

function ProfileBtn ( { display } ) {
    const dispatch = useDispatch();
    const userSession = useSelector(state => state.session)
    if (userSession.user?.id) {
        return (
            <>
                <div className='spacer-div'>

                </div>
                <div className={`profile-btn-dropdown ${display} `}>
                    <div onClick={() => {dispatch(sessionActions.logout())}}>
                        <span>Logout</span>
                    </div>
                    <div>
                        <span>History</span>
                    </div>
                </div>
            </>
        )

    } else {

        return (
            <>
                <div className='spacer-div'>
    
                </div>
                <div className={`profile-btn-dropdown ${ display } `}>
                    <div>
                        <span>Login</span>
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

}

export default ProfileBtn