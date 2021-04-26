import { createContext, useEffect, useState, useContext } from 'react';
import ProfileButton from './ProfileButton/ProfileButton';
import SearchBar from './SearchBar/SearchBar';
import './NavBar.css'
import SearchBtn from './SearchBtn/SearchBtn';

function NavBar (){

    const [windowScroll, setWindowScroll] = useState(false);
    const [showBar, setShowBar] = useState('');
    const [showBtn, setShowBtn] = useState('hidden');

    window.onscroll = () => setWindowScroll(() => {
        if (window.pageYOffset === 0) return false;
        console.log(window.pageYOffset)
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
    }, [windowScroll])


    return (
        <div className='nav-bar'>
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