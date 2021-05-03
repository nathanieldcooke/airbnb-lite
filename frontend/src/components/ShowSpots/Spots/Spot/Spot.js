import './Spot.css'

const Spot = ({spotObj}) => {
    let country = spotObj.country;
    let city = spotObj.city;
    let state = spotObj.state; 
    let title = spotObj.title; 
    let price = spotObj.price;
    let maxGuests = spotObj.maxGuests; 
    let rating = spotObj.rating; 
    let image = spotObj.Images.find(img => img.main === true).src; 
    let currPath = `${window.location.href}`.split('spots')

    console.log(currPath)

    return (
        // https://auth-me-app.herokuapp.com/
        <div className='spot' onClick={() => window.open(`${currPath[0]}spot/${spotObj.id}`, '_blank', 'noopener noreferrer')}>
            <div className='spot-sub'>
                <div className='spot-img-container'>
                    <img src={image} alt='house' ></img>
                </div>
                <div className='spot-text-container'>
                    <div className='top-box'>
                        <span>{`${city}, ${state}`}</span>
                        <span>{`${country}`}</span>
                        <span>{title}</span>
                        <span>{maxGuests} guests</span>
                    </div>
                    <div className='bottom-box'>
                        <span><i className="fas fa-star"></i> {rating}</span>
                        <span>{`$${price}/night`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spot