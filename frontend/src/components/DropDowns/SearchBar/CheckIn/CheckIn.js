import './CheckIn.css'

function CheckIn({ display }) {

    return (
        <>
            <div className='location-spacer-div'>

            </div>
            <div className={`location-btn-dropdown ${display} `}>
                <div>
                    <span>Login</span>
                </div>
                <div>
                    <span>SignUp</span>
                </div>
                <div>
                    <span>Demo User</span>
                </div>
                <div>
                    <span>Demo SignUp</span>
                </div>
            </div>
        </>
    )
}

export default CheckIn