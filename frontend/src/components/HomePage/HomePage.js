import HomePageBottom from './HomePageBottom/HomePageBottom'
import HomePageTop from './HomePageTop/HomePageTop'
import './HomePage.css'

const HomePage = () => {
    return (        
        <div className='main-page-container'>
            <HomePageTop />
            <HomePageBottom />
        </div>
    )
}

export default HomePage