import { useSelector } from 'react-redux'
import { Link } from 'react-scroll'
import BookingFormModal from '../../BookingFormModal/BookingFormModal'
import DisplayImagesModal from '../../DisplayImagesModal/DisplayImagesModal'
import './DisplaySpot.css'

const DisplaySpot = () => {

    const spot = useSelector(state => state.spot)
    const user = useSelector(state => state.session.user)

    let title = spot.title
    let rating = spot.rating
    // let numOfReviews = null
    let numOfReviews = spot.Reviews?.length
    let city = spot.city
    let state = spot.state
    let country = spot.country
    let mainImg = spot.Images?.find(img => img.main === true).src
    // let mainImg = 'https://a0.muscache.com/im/pictures/40104227/bdec5982_original.jpg?im_w=1200'
    // let newImgArr = [
    //     'https://a0.muscache.com/im/pictures/71865830/a6c27ff6_original.jpg?im_w=720',
    //     'https://a0.muscache.com/im/pictures/40681771/9afae12b_original.jpg?im_w=720',
    //     'https://a0.muscache.com/im/pictures/71875065/119f0cf6_original.jpg?im_w=720',
    //     'https://a0.muscache.com/im/pictures/71875109/cb9ba477_original.jpg?im_w=720'
    // ];
    let userName = spot.User?.username
    let newImgArr = []
    if (spot?.Images)
    for (let i = 1; i < 5; i++) {
        newImgArr.push(spot.Images[i].src)
    }
    let maxGuests = spot.maxGuests
    let bathrooms = spot.bathrooms
    let bedrooms = spot.bedrooms
    let beds = spot.beds
    let profileImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'



    return (
        <div className='display-spot-container'>
            <div className='display-spot-sub-container'>
                <div className='display-navbar-space-holder'></div>
                <div className='display-top-spot-info'>
                    <span className='display-title'>{title}</span>
                    <div className='sub-display-top-info'>
                        <span><i className="fas fa-star"></i> {rating} <span>({numOfReviews} reviews)</span></span>
                        <span className='location'>{`${city}, ${state}, ${country}`}</span>
                    </div>
                </div>
                <div className='display-images-box'>
                    <div className='display-main-img'><img src={mainImg} alt='house'></img></div>
                    <div className='display-images-box-sub'>
                        {newImgArr.map((imgSrc, i) => (
                            <div key={`spot-div-img${i}`} className={`img${i + 1}`}><img key={`spot-img-img${i}`} alt='house' src={imgSrc}></img></div>
                        ))}
                    </div>
                </div>
                <div className='display-spot-info'>
                    <div className='profile-info'>
                        <div className='display-left-info'>
                            <span className='span1'>Hosted by {userName}</span>
                            <span className='span2'>{maxGuests} guests - {bedrooms} bedroom - {beds} bed - {bathrooms} bath</span>
                        </div>
                        <div className='display-right-info'><img src={profileImg} alt='house'></img></div>
                    </div>
                    <div className='display-buttons'>
                        {
                            user ?
                            <div className='book-button'><span><BookingFormModal text='Book Now'/></span></div> :
                            <div className='book-button-not-logged-in' ><span><button className='not-logged-in' disabled={true} >Book Now</button></span></div>

                        }
                        <div className='more-img-button'><button className='is-logged-in' ><DisplayImagesModal spot={spot}/> </button></div>
                    </div>
                </div>
                <Link
                    className='link'
                    to='reviews-below'
                    smooth={true}
                    duration={1000}

                >
                <div className='display-review-button'><button>See Reviews Below</button></div>
                </Link>
            </div>
        </div>
    )
}

export default DisplaySpot