import { useEffect, useState } from 'react';
import ProfileButton from './ProfileButton/ProfileButton';
import SearchBar from './SearchBar/SearchBar';
import './NavBar.css'
import SearchBtn from './SearchBtn/SearchBtn';
import { useHistory } from 'react-router';

function NavBar (){

    const [windowScroll, setWindowScroll] = useState(false);
    const [showBar, setShowBar] = useState('');
    const [showBtn, setShowBtn] = useState('hidden');
    const [navBotBorder, setNavBotBorder] = useState('');

    let history = useHistory()

    window.onscroll = () => setWindowScroll(() => {
        if (window.pageYOffset === 0) return false;
        return true
    })

    useEffect(() => {
        if (windowScroll) {
            setShowBar('hidden')
            setShowBtn('')
        } else {
            setShowBar('')
            setShowBtn('hidden')
        }
        history.location.pathname === '/' && window.pageYOffset === 0 ? setNavBotBorder('') : setNavBotBorder('nav-bottom-border')
    }, [windowScroll])

    return (
        <div className={`nav-bar ${navBotBorder}`}>
            <div className='logo-home-button'>
                <i className="fab fa-airbnb"></i> 
                <span className='span-airbnb' >airbnb-
                    <span className='span-lite' >lite</span>
                </span>
            </div>
            <div>
                <SearchBtn showBtn={showBtn} setWindowScroll={setWindowScroll} />
                <SearchBar showBar={showBar} />
            </div>
            <div className='profile-button-div'>
                <span className='become-a-host-span'>Become a host</span>
                <ProfileButton />
            </div>
        </div>
    )
}

export default NavBar;