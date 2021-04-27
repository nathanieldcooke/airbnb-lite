import Spot from './Spot/Spot'
import './Spots.css'

const Spots = ({ spotsArr }) => {
    console.log('From Spots: ',spotsArr)
    return (
        <div className='spots'>
            <div className='spots-nav-space-holder'></div>
            {
                spotsArr.map((spotObj) => (<Spot key={`spot-${spotObj.id}`} spotObj={spotObj}/>))
            }
        </div>
    )
};

export default Spots