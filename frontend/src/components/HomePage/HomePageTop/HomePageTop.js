import { Link } from 'react-scroll'
import './HomePageTop.css'

const HomePageTop = () => {
    return (
        <div className='home-page-top'>
            <div className='img-container'>
                
            </div>
            {/* <div> */}
            <Link
                className='link'
                to='home-page-bottom'
                smooth={true}
                duration={1000}
                
            >
            <i className="fas fa-chevron-circle-down"></i>
            </Link>
            {/* </div> */}
        </div>
    )
}

export default HomePageTop