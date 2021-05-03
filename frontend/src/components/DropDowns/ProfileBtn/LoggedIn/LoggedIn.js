import * as sessionActions from '../../../../store/session'
import { useDispatch} from 'react-redux';
import './LoggedIn.css'
import HistoryFormModal from '../../../HistoryFormModal/HistoryFormModal';


const LoggedIn = ( { display } ) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className='spacer-div'>

            </div>
            <div className={`profile-btn-dropdown ${display} `}>
                <div className='logged-in-div' onClick={() => { dispatch(sessionActions.logout()) }}>
                    <span className='logged-in-span' >Logout</span>
                </div>
                <div className='logged-in-div'>
                    <span className='logged-in-span' ><HistoryFormModal /></span>
                </div>
            </div>
        </>
    )
}

export default LoggedIn