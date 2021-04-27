import './DisplaySpot.css'

const DisplaySpot = ( {spot} ) => {

    console.log(spot)

    let title = spot.title
    let rating = spot.rating
    // let numOfReviews = null
    let numOfReviews = spot.Reviews?.length
    let city = spot.city
    let state = spot.state
    let country = spot.country
    let mainImg = spot.Images?.find(img => img.main === true).src
    let newImgArr = [];
    if (spot?.Images)
    for (let i = 0; i < 4; i++) {
        newImgArr.push(spot.Images[i].src)
    }
    console.log(newImgArr)

    // console.log(mainImg)


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
                    <div className='display-main-img'><img src={mainImg}></img></div>
                    <div className='display-images-box-sub'>
                        {newImgArr.map((imgSrc, i) => (
                            <div key={`spot-div-img${i}`} className={`img${i + 1}`}><img key={`spot-img-img${i}`} src={imgSrc}></img></div>
                        ))}
                    </div>
                </div>
                <div className='display-spot-info'>
                    <div className='display-left-info'></div>
                    <div className='display-right-info'></div>
                </div>
                <div className='book-button'><button></button></div>
            </div>
        </div>
    )
}

export default DisplaySpot