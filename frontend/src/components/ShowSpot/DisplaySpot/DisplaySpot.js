import './DisplaySpot.css'

const DisplaySpot = () => {
    return (
        <div className='display-spot-container'>
            <div className='display-spot-sub-container'>
                <div className='display-navbar-space-holder'></div>
                <div className='display-top-spot-info'>
                    <span className='display-title'>This Is the Title</span>
                    <div className='sub-display-top-info'>
                        <span>@ 4.57</span>
                    </div>
                </div>
                <div className='display-images-box'>
                    <div className='display-main-img'></div>
                    <div className='display-images-box-sub'>
                        <img></img>
                        <img></img>
                        <img></img>
                        <img></img>
                    </div>
                    <div className='display-spot-info'>
                        <div className='display-left-info'></div>
                        <div className='display-right-info'></div>
                    </div>
                    <div className='book-button'><button></button></div>
                </div>
            </div>
        </div>
    )
}

export default DisplaySpot