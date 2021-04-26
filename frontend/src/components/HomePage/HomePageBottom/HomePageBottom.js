import './HomePageBottom.css'
import NearestToYou from './NearestToYou/NearestToYou'
import TopBringAll from './TopBringAll/TopBringAll'

const HomePageBottom = () => {
    return (
        <div className='home-page-bottom' id='home-page-bottom'>
            <div className='sub-home-page-bottom'>
                <NearestToYou />
                <TopBringAll />
            </div>
        </div>
    )
}

export default HomePageBottom