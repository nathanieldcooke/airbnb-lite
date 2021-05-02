import HomePageBottom from './HomePageBottom/HomePageBottom'
import HomePageTop from './HomePageTop/HomePageTop'
import Footer from '../Footer/Footer'
import './HomePage.css'

const HomePage = () => {
    return (        
        <div className='main-page-container'>
            <HomePageTop />
            <HomePageBottom />
            <Footer />
        </div>
    )
}

export default HomePage