import './DisplayImages.css'

const DisplayImages = ({spot}) => {

    console.log('In Images: ',spot)
    return (
        <div className='all-images-display-modal'>
            {spot.Images.map((img, i) => {
                return <img key={`${i}-dis-img`} src={img.src} alt={img.title}></img>
            })}
        </div>
    )
}

export default DisplayImages