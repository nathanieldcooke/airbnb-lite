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