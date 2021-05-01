// import * as sessionActions from '../../../store/session'
import { useSelector } from 'react-redux';
import './ProfileBtn.css'
import LoggedIn from './LoggedIn/LoggedIn';
import LoggedOut from './LoggedOut/LoggedOut';

function ProfileBtn ( { display } ) {
    // const dispatch = useDispatch();
    const userSession = useSelector(state => state.session)
    if (userSession.user?.id) {
        return <LoggedIn display={display} />
    } else {
        return <LoggedOut display={display} />
    }

}

export default ProfileBtn