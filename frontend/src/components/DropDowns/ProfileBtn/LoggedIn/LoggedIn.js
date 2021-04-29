import * as sessionActions from '../../../../store/session'
import { useDispatch, useSelector } from 'react-redux';
import './LoggedIn.css'
import HistoryFormModal from '../../../HistoryFormModal/HistoryFormModal';


const LoggedIn = ( { display } ) => {
    const dispatch = useDispatch();
    const userSession = useSelector(state => state.session)

    

    return (
        <>
            <div className='spacer-div'>

            </div>
            <div className={`profile-btn-dropdown ${display} `}>
                <div onClick={() => { dispatch(sessionActions.logout()) }}>
                    <span>Logout</span>
                </div>
                <div>
                    <HistoryFormModal />
                </div>
            </div>
        </>
    )
}

export default LoggedIn